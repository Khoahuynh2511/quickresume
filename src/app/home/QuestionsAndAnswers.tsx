import { Link } from "components/documentation";

const QAS = [
  {
    question: "QuickResume có thực sự miễn phí không?",
    answer: (
      <p>
        Hoàn toàn miễn phí, không có chi phí ẩn hay giới hạn nào. QuickResume là dự án mã nguồn mở 
        được phát triển để giúp mọi người tạo CV chuyên nghiệp mà không phải trả bất kỳ khoản phí nào.
        Bạn có thể tạo và tải xuống vô số CV mà không cần đăng ký tài khoản hay cung cấp thông tin thanh toán.
      </p>
    ),
  },
  {
    question: "CV tạo bởi QuickResume có tương thích với hệ thống ATS không?",
    answer: (
      <p>
        Có, QuickResume được thiết kế đặc biệt để tối ưu cho các hệ thống ATS (Applicant Tracking System). 
        Chúng tôi sử dụng cấu trúc một cột, phông chữ dễ đọc, định dạng đơn giản và các thẻ tiêu đề rõ ràng 
        để đảm bảo CV của bạn được xử lý chính xác bởi hệ thống ATS và dễ dàng đọc được bởi nhà tuyển dụng.
        Điều này giúp tăng cơ hội CV của bạn vượt qua vòng sàng lọc tự động và đến được với người đọc.
      </p>
    ),
  },
  {
    question: "QuickResume lưu trữ dữ liệu của tôi ở đâu?",
    answer: (
      <p>
        QuickResume ưu tiên quyền riêng tư của bạn. Tất cả dữ liệu CV của bạn được lưu trữ cục bộ trong 
        trình duyệt của bạn thông qua Local Storage, không phải trên máy chủ của chúng tôi. Điều này có nghĩa là 
        chỉ bạn mới có quyền truy cập vào thông tin của mình. Tuy nhiên, điều này cũng có nghĩa rằng 
        dữ liệu của bạn sẽ bị mất nếu bạn xóa bộ nhớ cache trình duyệt, vì vậy chúng tôi khuyên bạn nên 
        thường xuyên tải xuống bản sao của CV để đảm bảo an toàn.
      </p>
    ),
  },
  {
    question: "Làm thế nào để tạo CV hiệu quả với QuickResume?",
    answer: (
      <>
        <p>
          Để tạo CV hiệu quả với QuickResume, hãy tuân theo các nguyên tắc sau:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Sử dụng từ khóa liên quan đến ngành nghề và vị trí bạn đang ứng tuyển</li>
          <li>Nhấn mạnh thành tựu cụ thể với các con số và kết quả đo lường được</li>
          <li>Giữ nội dung ngắn gọn, súc tích và dễ đọc với các câu ngắn</li>
          <li>Tùy chỉnh CV của bạn cho từng vị trí mà bạn ứng tuyển</li>
          <li>Sắp xếp thông tin theo thứ tự thời gian ngược (mới nhất trước)</li>
        </ul>
        <p className="mt-2">
          Bạn cũng có thể sử dụng công cụ <Link href="/resume-parser">Phân tích CV</Link> của chúng tôi 
          để kiểm tra mức độ tương thích của CV với yêu cầu công việc.
        </p>
      </>
    ),
  },
  {
    question: "Làm thế nào tôi có thể đóng góp cho QuickResume?",
    answer: (
      <p>
        Bạn có thể đóng góp cho QuickResume bằng nhiều cách: chia sẻ phản hồi và đề xuất cải tiến, 
        báo cáo lỗi, giúp phát triển mã nguồn hoặc chia sẻ công cụ với những người khác. 
        Truy cập <Link href="https://github.com/Khoahuynh2511">kho lưu trữ GitHub</Link> của 
        chúng tôi để tìm hiểu thêm về cách đóng góp. Mọi hình thức hỗ trợ đều rất được đánh giá cao và 
        giúp chúng tôi tiếp tục cải thiện công cụ này.
      </p>
    ),
  },
];

export const QuestionsAndAnswers = () => {
  return (
    <section className="pt-10 pb-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-indigo-700 to-indigo-500 inline-block text-transparent bg-clip-text mb-10">
          Câu Hỏi Thường Gặp
        </h2>
        
        <div className="grid gap-4 sm:gap-6">
          {QAS.map(({ question, answer }, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex items-start">
                  <span className="text-indigo-600 mr-3 text-xl sm:text-2xl font-bold">Q.</span>
                  {question}
                </h3>
                <div className="mt-3 sm:mt-4 text-gray-600 pl-8">
                  {answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Không tìm thấy câu trả lời cho câu hỏi của bạn?</p>
          <Link 
            href="mailto:hello@quick-resume.com" 
            className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Liên hệ với chúng tôi
          </Link>
        </div>
      </div>
    </section>
  );
};
