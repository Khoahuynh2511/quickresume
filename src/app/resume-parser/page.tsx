"use client";
import { useState, useEffect } from "react";
import { readPdf } from "lib/parse-resume-from-pdf/read-pdf";
import type { TextItems } from "lib/parse-resume-from-pdf/types";
import { groupTextItemsIntoLines } from "lib/parse-resume-from-pdf/group-text-items-into-lines";
import { groupLinesIntoSections } from "lib/parse-resume-from-pdf/group-lines-into-sections";
import { extractResumeFromSections } from "lib/parse-resume-from-pdf/extract-resume-from-sections";
import { ResumeDropzone } from "components/ResumeDropzone";
import { cx } from "lib/cx";
import { Heading, Link, Paragraph } from "components/documentation";
import { ResumeTable } from "resume-parser/ResumeTable";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { ResumeParserAlgorithmArticle } from "resume-parser/ResumeParserAlgorithmArticle";

const RESUME_EXAMPLES = [
  {
    fileUrl: "/resume-example/laverne-resume.pdf",
    description: (
      <span>
        Mẫu sơ yếu lý lịch từ Đại học La Verne -{" "}
        <Link href="https://laverne.edu/careers/wp-content/uploads/sites/15/2010/12/Undergraduate-Student-Resume-Examples.pdf">
          Xem nguồn
        </Link>
      </span>
    ),
  },
  {
    fileUrl: "/resume-example/openresume-resume.pdf",
    description: (
      <span>
        Được tạo bằng công cụ QuickResume -{" "}
        <Link href="/resume-builder">Thử ngay</Link>
      </span>
    ),
  },
];

const defaultFileUrl = RESUME_EXAMPLES[0]["fileUrl"];
export default function ResumeParser() {
  const [fileUrl, setFileUrl] = useState(defaultFileUrl);
  const [textItems, setTextItems] = useState<TextItems>([]);
  const lines = groupTextItemsIntoLines(textItems || []);
  const sections = groupLinesIntoSections(lines);
  const resume = extractResumeFromSections(sections);

  useEffect(() => {
    // Hàm để tải file PDF trực tiếp qua fetch và chuyển nó thành blob URL
    async function loadPdfFile(url: string) {
      try {
        // Tải file PDF
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/pdf',
          },
        });
        
        if (!response.ok) {
          throw new Error(`Lỗi HTTP! Trạng thái: ${response.status}`);
        }
        
        // Chuyển đổi thành blob
        const blob = await response.blob();
        
        // Tạo URL từ blob
        const blobUrl = URL.createObjectURL(blob);
        
        // Phân tích PDF
        const textItems = await readPdf(blobUrl);
        setTextItems(textItems);
      } catch (error) {
        console.error("Lỗi khi tải PDF:", error);
      }
    }
    
    loadPdfFile(fileUrl);
  }, [fileUrl]);

  return (
    <main className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-700">Công Cụ Phân Tích CV</h1>
          <p className="text-gray-600 mt-2">Kiểm tra xem CV của bạn có được hệ thống ATS đọc chính xác không</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Panel trái - PDF Viewer */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">
              <h2 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
                Xem Tài Liệu CV
              </h2>
              
              <div className="aspect-h-[9.5] aspect-w-7 rounded-lg shadow-md overflow-hidden">
                <iframe src={`${fileUrl}#navpanes=0`} className="h-full w-full" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">
              <h2 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Mẫu CV
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                {RESUME_EXAMPLES.map((example, idx) => (
                  <article
                    key={idx}
                    className={cx(
                      "cursor-pointer rounded-lg border-2 px-4 py-3 shadow-sm outline-none transition-all hover:bg-indigo-50 focus:bg-indigo-50",
                      example.fileUrl === fileUrl
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-gray-200"
                    )}
                    onClick={() => setFileUrl(example.fileUrl)}
                    onKeyDown={(e) => {
                      if (["Enter", " "].includes(e.key))
                        setFileUrl(example.fileUrl);
                    }}
                    tabIndex={0}
                  >
                    <h3 className="font-semibold text-indigo-800">Mẫu {idx + 1}</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {example.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">
              <h2 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                Tải Lên CV Của Bạn
              </h2>
              
              <ResumeDropzone
                onFileUrlChange={(fileUrl) =>
                  setFileUrl(fileUrl || defaultFileUrl)
                }
                playgroundView={true}
              />
              
              <p className="mt-4 text-sm text-gray-600 italic">
                Tải lên CV của bạn để đánh giá khả năng phân tích của hệ thống ATS.
                <br />Mọi dữ liệu chỉ được xử lý trên trình duyệt và không được lưu trữ.
              </p>
            </div>
          </div>

          {/* Panel phải - Kết quả phân tích */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">
              <h2 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                </svg>
                Kết Quả Phân Tích
              </h2>
              
              <div className="p-4 bg-indigo-50 rounded-lg mb-6 border border-indigo-100">
                <p className="text-gray-700">
                  <span className="font-semibold text-indigo-700">ATS (Hệ thống Theo dõi Ứng viên)</span> là 
                  phần mềm quản lý tuyển dụng tự động phân tích CV. Nếu hệ thống có thể trích xuất nhiều thông tin từ CV 
                  của bạn, điều đó cho thấy CV được định dạng tốt. Tối thiểu, các nhà tuyển dụng cần nhận diện được 
                  tên và email của bạn một cách chính xác.
                </p>
              </div>
              
              <div className="overflow-auto">
                <ResumeTable resume={resume} />
              </div>
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-xl shadow-md border border-indigo-100">
              <h2 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                Chi Tiết Phân Tích
              </h2>
              
              <ResumeParserAlgorithmArticle
                textItems={textItems}
                lines={lines}
                sections={sections}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
