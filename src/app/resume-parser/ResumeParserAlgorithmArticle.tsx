import { isBold } from "lib/parse-resume-from-pdf/extract-resume-from-sections/lib/common-features";
import {
  Badge,
  Heading,
  Link,
  Paragraph,
  Table,
} from "components/documentation";
import type {
  Line,
  Lines,
  ResumeSectionToLines,
  TextItem,
  TextItems,
  TextScores,
} from "lib/parse-resume-from-pdf/types";
import { extractProfile } from "lib/parse-resume-from-pdf/extract-resume-from-sections/extract-profile";

// Định nghĩa Step3SectionsTable component trước khi sử dụng
const Step3SectionsTable = ({
  sections,
}: {
  sections: ResumeSectionToLines;
}) => {
  const table: React.ReactNode[][] = [["Lines", "Nội dung"]];
  const trClassNames = [];
  let lineCounter = 0;
  const BACKGROUND_COLORS = [
    "bg-red-50",
    "bg-yellow-50",
    "bg-orange-50",
    "bg-green-50",
    "bg-blue-50",
    "bg-purple-50",
  ] as const;
  const sectionsEntries = Object.entries(sections);

  const Line = ({ line }: { line: Line }) => {
    return (
      <>
        {line.map((item, idx) => (
          <span key={idx}>
            {item.text}
            {idx !== line.length - 1 && (
              <span className="select-none font-extrabold text-sky-400">
                &nbsp;&nbsp;{"|"}&nbsp;&nbsp;
              </span>
            )}
          </span>
        ))}
      </>
    );
  };

  for (let i = 0; i < sectionsEntries.length; i++) {
    const sectionBackgroundColor = BACKGROUND_COLORS[i % 6];
    const [sectionTitle, lines] = sectionsEntries[i];
    
    table.push([
      sectionTitle === "profile" ? "" : lineCounter,
      sectionTitle === "profile" ? "THÔNG TIN" : sectionTitle,
    ]);
    trClassNames.push(`${sectionBackgroundColor} font-bold`);
    lineCounter += 1;
    
    for (let j = 0; j < lines.length; j++) {
      table.push([lineCounter, <Line key={lineCounter} line={lines[j]} />]);
      trClassNames.push(sectionBackgroundColor);
      lineCounter += 1;
    }
  }

  return (
    <div className="mt-4 max-h-96 overflow-y-scroll border scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-w-3">
      <Table
        table={table}
        className="!border-none"
        trClassNames={trClassNames}
      />
    </div>
  );
};

export const ResumeParserAlgorithmArticle = ({
  textItems,
  lines,
  sections,
}: {
  textItems: TextItems;
  lines: Lines;
  sections: ResumeSectionToLines;
}) => {
  const getBadgeContent = (item: TextItem) => {
    const X1 = Math.round(item.x);
    const X2 = Math.round(item.x + item.width);
    const Y = Math.round(item.y);
    let content = `X₁=${X1} X₂=${X2} Y=${Y}`;
    if (X1 === X2) {
      content = `X=${X2} Y=${Y}`;
    }
    if (isBold(item)) {
      content = `${content} Bold`;
    }
    if (item.hasEOL) {
      content = `${content} NewLine`;
    }
    return content;
  };
  const step1TextItemsTable = [
    ["#", "Nội dung văn bản", "Metadata"],
    ...textItems.map((item, idx) => [
      idx + 1,
      item.text,
      <Badge key={idx}>{getBadgeContent(item)}</Badge>,
    ]),
  ];

  const step2LinesTable = [
    ["Dòng", "Nội dung dòng"],
    ...lines.map((line, idx) => [
      idx + 1,
      line.map((item, idx) => (
        <span key={idx}>
          {item.text}
          {idx !== line.length - 1 && (
            <span className="select-none font-extrabold text-sky-400">
              &nbsp;&nbsp;{"|"}&nbsp;&nbsp;
            </span>
          )}
        </span>
      )),
    ]),
  ];

  const { profile, profileScores } = extractProfile(sections);
  const Scores = ({ scores }: { scores: TextScores }) => {
    return (
      <>
        {scores
          .sort((a, b) => b.score - a.score)
          .map((item, idx) => (
            <span key={idx} className="break-all">
              <Badge>{item.score}</Badge> {item.text}
              <br />
            </span>
          ))}
      </>
    );
  };
  const step4ProfileFeatureScoresTable = [
    [
      "Thuộc tính",
      "Văn bản (Điểm cao nhất)",
      "Điểm của các văn bản khác",
    ],
    ["Tên", profile.name, <Scores key={"Name"} scores={profileScores.name} />],
    [
      "Email",
      profile.email,
      <Scores key={"Email"} scores={profileScores.email} />,
    ],
    [
      "Điện thoại",
      profile.phone,
      <Scores key={"Phone"} scores={profileScores.phone} />,
    ],
  ];

  return (
    <article className="mt-10">
      <Heading className="text-primary !mt-0 border-t-2 pt-8 text-indigo-700">
        Quy Trình Phân Tích CV Chuyên Sâu
      </Heading>
      <Paragraph smallMarginTop={true} className="text-gray-700">
        Phần này sẽ giới thiệu chi tiết về thuật toán phân tích CV của QuickResume và cách hoạt động 
        qua 4 bước cơ bản. (Lưu ý rằng thuật toán được thiết kế để phân tích CV tiếng Anh một cột)
      </Paragraph>
      {/* Step 1. Read the text items from a PDF file */}
      <Heading level={2} className="text-indigo-700">Bước 1. Đọc các phần tử văn bản từ file PDF</Heading>
      <Paragraph smallMarginTop={true} className="text-gray-700">
        File PDF là một định dạng file chuẩn được định nghĩa bởi{" "}
        <Link href="https://www.iso.org/standard/51502.html">
          đặc tả ISO 32000
        </Link>
        . Khi mở một file PDF bằng trình soạn thảo văn bản đơn giản, bạn sẽ thấy rằng
        nội dung được mã hóa và khó đọc. Để hiển thị ở định dạng dễ đọc, bạn cần một trình đọc PDF
        để giải mã và xem file. Tương tự, trình phân tích CV đầu tiên cần giải mã file PDF
        để trích xuất nội dung văn bản của nó.
      </Paragraph>
      <Paragraph className="text-gray-700">
        Mặc dù có thể viết một hàm đọc PDF tùy chỉnh theo đặc tả ISO 32000, 
        nhưng đơn giản hơn nhiều khi sử dụng một thư viện có sẵn. Trong trường hợp này, 
        trình phân tích CV sử dụng thư viện mã nguồn mở{" "}
        <Link href="https://github.com/mozilla/pdf.js">pdf.js</Link> của Mozilla để
        trích xuất tất cả các phần tử văn bản trong file.
      </Paragraph>
      <Paragraph className="text-gray-700">
        Bảng dưới đây liệt kê {textItems.length} phần tử văn bản được trích xuất
        từ file PDF CV đã thêm. Một phần tử văn bản chứa nội dung văn bản và
        cả metadata về nội dung, ví dụ như vị trí x, y trên tài liệu, 
        liệu font có được in đậm hay không, hoặc có bắt đầu một dòng mới không.
        (Lưu ý rằng vị trí x, y là tương đối so với góc dưới bên trái của
        trang, là gốc tọa độ 0,0)
      </Paragraph>
      <div className="mt-4 max-h-72 overflow-y-scroll border scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-w-3">
        <Table
          table={step1TextItemsTable}
          className="!border-none"
          tdClassNames={["", "", "md:whitespace-nowrap"]}
        />
      </div>
      {/* Step 2. Group text items into lines */}
      <Heading level={2} className="text-indigo-700">Bước 2. Nhóm các phần tử văn bản thành dòng</Heading>
      <Paragraph smallMarginTop={true} className="text-gray-700">
        Các phần tử văn bản được trích xuất chưa sẵn sàng để sử dụng và có 2 vấn đề chính:
      </Paragraph>
      <Paragraph className="text-gray-700">
        <span className="mt-3 block font-semibold">
          Vấn đề 1: Chúng có một số nhiễu không mong muốn.
        </span>
        Một số phần tử văn bản đơn lẻ có thể bị chia thành nhiều phần, như bạn có thể
        thấy trên bảng ở trên, ví dụ: một số điện thoại "(123) 456-7890" có thể
        bị chia thành 3 phần tử văn bản "(123) 456", "-" và "7890".
      </Paragraph>
      <Paragraph smallMarginTop={true} className="text-gray-700">
        <span className="font-semibold">Giải pháp:</span> Để giải quyết vấn đề này,
        trình phân tích CV kết nối các phần tử văn bản liền kề thành một phần tử nếu
        khoảng cách giữa chúng nhỏ hơn độ rộng ký tự trung bình, trong đó
        <span
          dangerouslySetInnerHTML={{
            __html: `<math display="block">
                        <mrow>
                            <mn>Khoảng cách </mn>
                            <mo>=</mo>
                            <mn>X₁ phần tử bên phải</mn>
                            <mo>-</mo>
                            <mn>X₂ phần tử bên trái</mn>
                        </mrow>
                    </math>`,
          }}
          className="my-2 block text-left text-base"
        />
        Độ rộng ký tự trung bình được tính bằng cách chia tổng độ rộng
        của tất cả các phần tử văn bản cho tổng số ký tự của các phần tử văn bản
        (Văn bản in đậm và phần tử dòng mới được loại trừ để không làm sai lệch
        kết quả).
      </Paragraph>
      <Paragraph className="text-gray-700">
        <span className="mt-3 block font-semibold">
          Vấn đề 2: Chúng thiếu ngữ cảnh và sự liên kết.
        </span>
        Khi chúng ta đọc một CV, chúng ta quét CV từng dòng một. Não bộ của chúng ta có thể
        xử lý từng phần thông qua các gợi ý trực quan như độ đậm và
        sự gần nhau của văn bản, nơi chúng ta có thể nhanh chóng liên kết các văn bản gần nhau hơn để thành
        một nhóm liên quan. Tuy nhiên, các phần tử văn bản được trích xuất hiện tại không có
        những ngữ cảnh/liên kết đó và chỉ là các phần tử rời rạc.
      </Paragraph>
      <Paragraph smallMarginTop={true} className="text-gray-700">
        <span className="font-semibold">Giải pháp:</span> Để giải quyết vấn đề này,
        trình phân tích CV tái tạo lại các ngữ cảnh và liên kết tương tự
        như cách não bộ chúng ta đọc và xử lý CV. Đầu tiên, nó nhóm các phần tử văn bản
        thành các dòng vì chúng ta đọc văn bản theo từng dòng. Sau đó, nó nhóm các dòng
        thành các phần, điều này sẽ được thảo luận ở bước tiếp theo.
      </Paragraph>
      <Paragraph className="text-gray-700">
        Ở cuối bước 2, trình phân tích CV trích xuất {lines.length} dòng
        từ file PDF CV đã thêm, như được hiển thị trong bảng dưới đây. Kết quả
        dễ đọc hơn nhiều khi hiển thị theo dòng. (Một số dòng có thể có
        nhiều phần tử văn bản, được phân tách bằng dấu phân cách dọc màu xanh{" "}
        <span className="select-none font-extrabold text-sky-400">
          &nbsp;{"|"}&nbsp;
        </span>
        )
      </Paragraph>
      <div className="mt-4 max-h-96 overflow-y-scroll border scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-w-3">
        <Table table={step2LinesTable} className="!border-none" />
      </div>
      {/* Step 3. Group lines into sections */}
      <Heading level={2} className="text-indigo-700">Bước 3. Nhóm các dòng thành các phần</Heading>
      <Paragraph smallMarginTop={true} className="text-gray-700">
        Ở bước 2, trình phân tích CV bắt đầu xây dựng ngữ cảnh và liên kết
        cho các phần tử văn bản bằng cách nhóm chúng thành các dòng. Bước 3 tiếp tục
        quá trình này để xây dựng thêm các liên kết bằng cách nhóm các dòng thành
        các phần.
      </Paragraph>
      <Paragraph className="text-gray-700">
        Lưu ý rằng mỗi phần (ngoại trừ phần thông tin cá nhân) bắt đầu bằng một
        tiêu đề phần chiếm cả dòng. Đây là một mẫu phổ biến
        không chỉ trong CV mà còn trong sách và blog. Trình phân tích CV sử dụng
        mẫu này để nhóm các dòng vào tiêu đề phần gần nhất phía trên
        các dòng đó.
      </Paragraph>
      <Paragraph className="text-gray-700">
        Trình phân tích CV áp dụng một số phương pháp để phát hiện tiêu đề phần. Phương pháp
        chính để xác định tiêu đề phần là kiểm tra xem nó có đáp ứng
        cả 3 điều kiện sau không: <br />
        1. Đó là phần tử văn bản duy nhất trong dòng <br />
        2. Nó được <span className="font-bold">in đậm</span> <br />
        3. Tất cả chữ cái đều viết HOA
        <br />
      </Paragraph>
      <Paragraph className="text-gray-700">
        Nói đơn giản, nếu một phần tử văn bản được nhấn mạnh gấp đôi để vừa in đậm
        vừa viết hoa, rất có thể đó là tiêu đề phần trong CV. Điều này
        thường đúng đối với CV được định dạng tốt. Có thể có ngoại lệ, nhưng
        khả năng đó không phải là cách sử dụng tốt của chữ in đậm và viết hoa.
      </Paragraph>
      <Paragraph className="text-gray-700">
        Trình phân tích CV cũng có một phương pháp dự phòng nếu phương pháp chính
        không áp dụng được. Phương pháp dự phòng chủ yếu thực hiện việc đối chiếu từ khóa
        với danh sách các từ khóa tiêu đề phần thông dụng trong CV.
      </Paragraph>
      <Paragraph className="text-gray-700">
        Ở cuối bước 3, trình phân tích CV xác định các phần từ
        CV và nhóm những dòng đó với tiêu đề phần tương ứng, như
        được hiển thị trong bảng dưới đây. Lưu ý rằng{" "}
        <span className="font-bold">các tiêu đề phần được in đậm</span> và{" "}
        <span className="bg-teal-50">
          các dòng liên kết với phần được đánh dấu cùng
          màu
        </span>
        .
      </Paragraph>
      <Step3SectionsTable sections={sections} />
      {/* Step 4. Extract resume from sections */}
      <Heading level={2} className="text-indigo-700">Bước 4. Trích xuất thông tin CV từ các phần</Heading>
      <Paragraph smallMarginTop={true} className="text-gray-700">
        Bước 4 là bước cuối cùng của quá trình phân tích CV và cũng là
        cốt lõi của trình phân tích CV, nơi nó trích xuất thông tin CV từ
        các phần.
      </Paragraph>
      <Heading level={3} className="text-indigo-700">Hệ thống chấm điểm đặc trưng</Heading>
      <Paragraph smallMarginTop={true} className="text-gray-700">
        Cốt lõi của công cụ trích xuất là hệ thống chấm điểm đặc trưng. Mỗi
        thuộc tính CV cần được trích xuất có một tập đặc trưng tùy chỉnh, trong đó mỗi
        tập đặc trưng bao gồm một hàm đối chiếu đặc trưng và điểm
        đối chiếu đặc trưng nếu khớp (điểm đối chiếu đặc trưng có thể là số dương hoặc
        số âm). Để tính điểm đặc trưng cuối cùng của một phần tử văn bản cho
        một thuộc tính CV cụ thể, nó sẽ chạy phần tử văn bản qua tất cả
        các tập đặc trưng và cộng các điểm đặc trưng khớp. Quá trình này
        được thực hiện cho tất cả các phần tử văn bản trong phần, và phần tử văn bản
        có điểm đặc trưng tính toán cao nhất được xác định là thuộc tính
        CV được trích xuất.
      </Paragraph>
      <Paragraph className="text-gray-700">
        Để minh họa, bảng dưới đây hiển thị 3 thuộc tính CV trong
        phần thông tin cá nhân của CV PDF đã thêm.
      </Paragraph>
      <Table table={step4ProfileFeatureScoresTable} className="mt-4" />
      {(profileScores.name.find((item) => item.text === profile.name)?.score ||
        0) > 0 && (
        <Paragraph smallMarginTop={true} className="text-gray-700">
          Trong CV PDF đã thêm, thuộc tính tên CV có khả năng là "
          {profile.name}" vì điểm đặc trưng của nó là{" "}
          {profileScores.name.find((item) => item.text === profile.name)?.score}
          , cao nhất trong tất cả các phần tử văn bản trong phần thông tin cá nhân. (Một số phần tử văn bản có điểm đặc trưng âm,
          cho thấy chúng rất ít khả năng là thuộc tính đang tìm kiếm)
        </Paragraph>
      )}
      <Heading level={3} className="text-indigo-700">Các tập đặc trưng</Heading>
      <Paragraph smallMarginTop={true} className="text-gray-700">
        Sau khi giải thích hệ thống chấm điểm đặc trưng, chúng ta có thể đi sâu hơn vào cách
        các tập đặc trưng được xây dựng cho một thuộc tính CV. Nó tuân theo 2
        nguyên tắc: <br />
        1. Các tập đặc trưng của một thuộc tính CV được thiết kế tương đối so với tất cả các
        thuộc tính CV khác trong cùng một phần. <br />
        2. Các tập đặc trưng của một thuộc tính CV được tạo thủ công dựa trên
        đặc điểm và khả năng của mỗi đặc điểm.
      </Paragraph>
      <Paragraph className="text-gray-700">
        Bảng dưới đây liệt kê một số tập đặc trưng cho thuộc tính tên
        CV. Nó chứa hàm đặc trưng khớp với thuộc tính tên với
        điểm đặc trưng dương và cũng chứa hàm đặc trưng chỉ khớp với các
        thuộc tính CV khác trong phần với điểm đặc trưng âm.
      </Paragraph>
      <Table
        table={step4NameFeatureSetsTable}
        title="Tập đặc trưng cho Tên"
        className="mt-4"
      />
      <Heading level={3} className="text-indigo-700">Hàm đặc trưng cốt lõi</Heading>
      <Paragraph smallMarginTop={true} className="text-gray-700">
        Mỗi thuộc tính CV có nhiều tập đặc trưng. Chúng có thể được tìm thấy trong
        mã nguồn trong thư mục extract-resume-from-sections và chúng tôi
        sẽ không liệt kê tất cả ở đây. Mỗi thuộc tính CV thường có một hàm
        đặc trưng cốt lõi giúp xác định chúng tốt nhất, vì vậy chúng tôi sẽ liệt kê
        hàm đặc trưng cốt lõi dưới đây.
      </Paragraph>
      <Table table={step4CoreFeatureFunctionTable} className="mt-4" />
      <Heading level={3} className="text-indigo-700">Trường hợp đặc biệt: Các phần con</Heading>
      <Paragraph smallMarginTop={true} className="text-gray-700">
        Điều cuối cùng đáng đề cập là các phần con. Đối với phần thông tin cá nhân,
        chúng ta có thể trực tiếp chuyển tất cả các phần tử văn bản vào hệ thống
        chấm điểm đặc trưng. Nhưng đối với các phần khác, như học vấn và kinh nghiệm làm việc,
        chúng ta phải trước tiên chia phần thành các phần con vì có thể có
        nhiều trường học hoặc kinh nghiệm làm việc trong phần. Hệ thống chấm điểm đặc trưng
        sau đó xử lý từng phần con để trích xuất các thuộc tính CV của mỗi phần con và
        thêm kết quả vào.
      </Paragraph>
      <Paragraph smallMarginTop={true} className="text-gray-700">
        Trình phân tích CV áp dụng một số phương pháp để phát hiện phần con. Phương pháp
        chính để xác định một phần con là kiểm tra xem khoảng trống dòng theo chiều dọc
        giữa 2 dòng có lớn hơn khoảng trống dòng điển hình * 1,4 không,
        vì một CV được định dạng tốt thường tạo một dòng trống mới
        trước khi thêm phần con tiếp theo. Cũng có một phương pháp dự phòng nếu
        phương pháp chính không áp dụng được để kiểm tra xem phần tử văn bản có được in đậm không.
      </Paragraph>
      <Paragraph className="text-gray-700">
        Và đó là tất cả về thuật toán phân tích CV của QuickResume :)
      </Paragraph>
      <Paragraph className="text-gray-700">
        Được viết bởi <Link href="https://github.com/xitanggg">HDK</Link> vào
        tháng 5 năm 2025
      </Paragraph>
    </article>
  );
};

const step4NameFeatureSetsTable = [
  ["Hàm đặc trưng", "Điểm đối chiếu"],
  ["Chỉ chứa chữ cái, khoảng trắng hoặc dấu chấm", "+3"],
  ["Được in đậm", "+2"],
  ["Chứa toàn bộ chữ viết hoa", "+2"],
  ["Chứa @", "-4 (khớp với email)"],
  ["Chứa số", "-4 (khớp với điện thoại)"],
  ["Chứa dấu phẩy ,", "-4 (khớp với địa chỉ)"],
  ["Chứa dấu /", "-4 (khớp với URL)"],
];

const step4CoreFeatureFunctionTable = [
  ["Thuộc tính CV", "Hàm đặc trưng cốt lõi", "Biểu thức chính quy"],
  ["Tên", "Chỉ chứa chữ cái, khoảng trắng hoặc dấu chấm", "/^[a-zA-Z\\s\\.]+$/"],
  [
    "Email",
    <>
      Khớp định dạng email xxx@xxx.xxx
      <br />
      xxx có thể là bất kỳ ký tự nào không phải khoảng trắng
    </>,
    "/\\S+@\\S+\\.\\S+/",
  ],
  [
    "Điện thoại",
    <>
      Khớp định dạng số điện thoại (xxx)-xxx-xxxx <br /> () và - là tùy chọn
    </>,
    "/\\(?\\d{3}\\)?[\\s-]?\\d{3}[\\s-]?\\d{4}/",
  ],
  [
    "Địa chỉ",
    <>Khớp với định dạng thành phố và tiểu bang {"City, ST"}</>,
    "/[A-Z][a-zA-Z\\s]+, [A-Z]{2}/",
  ],
  ["URL", "Khớp định dạng url xxx.xxx/xxx", "/\\S+\\.[a-z]+\\/\\S+/"],
  ["Trường học", "Chứa từ khóa về trường học, ví dụ: Đại học, Trường, Học viện", ""],
  ["Bằng cấp", "Chứa từ khóa về bằng cấp, ví dụ: Cử nhân, Thạc sĩ, Tiến sĩ", ""],
  ["GPA", "Khớp định dạng GPA x.xx", "/[0-4]\\.\\d{1,2}/"],
  [
    "Thời gian",
    "Chứa từ khóa liên quan đến năm, tháng, mùa hoặc từ Hiện tại",
    "Năm: /(?:19|20)\\d{2}/",
  ],
  [
    "Vị trí",
    "Chứa từ khóa về vị trí, ví dụ: Chuyên viên, Kỹ sư, Thực tập sinh",
    "",
  ],
  ["Công ty", "Được in đậm hoặc không khớp với vị trí & thời gian", ""],
  ["Dự án", "Được in đậm hoặc không khớp với thời gian", ""],
];
