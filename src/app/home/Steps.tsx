import Link from 'next/link';

const STEPS = [
  { 
    title: "Tải lên CV dạng PDF", 
    text: "Hoặc tạo mới từ đầu với mẫu chuẩn quốc tế",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    )
  },
  { 
    title: "Chỉnh sửa và xem trước", 
    text: "Tuỳ chỉnh theo nhu cầu với giao diện trực quan",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  { 
    title: "Tải về CV chuyên nghiệp", 
    text: "Sẵn sàng ứng tuyển với CV đạt chuẩn ATS",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    )
  },
];

export const Steps = () => {
  return (
    <section className="pt-16 pb-20">
      <div className="mx-auto rounded-2xl bg-white shadow-lg px-6 py-14 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-indigo-700 to-indigo-500 inline-block text-transparent bg-clip-text mb-6">
            3 Bước Đơn Giản
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Chúng tôi đã đơn giản hóa quy trình để bạn có thể tạo CV chuyên nghiệp một cách nhanh chóng và hiệu quả
          </p>
        </div>
        
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 max-w-5xl mx-auto">
            {STEPS.map(({ title, text, icon }, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group transform transition-all duration-300 hover:scale-105">
                <div className="relative mb-6">
                  {/* Connector lines between steps */}
                  {idx < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-indigo-200 -translate-y-1/2"></div>
                  )}
                  
                  {/* Step number */}
                  <div className="bg-indigo-600 flex h-16 w-16 items-center justify-center rounded-full shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:bg-indigo-700">
                    {icon}
                    <span className="absolute -right-1 -top-1 bg-white h-8 w-8 rounded-full border-2 border-indigo-600 flex items-center justify-center text-indigo-700 font-bold">
                      {idx + 1}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 max-w-xs">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA button */}
        <div className="text-center mt-12">
          <Link 
            href="/resume-import" 
            className="inline-block px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:bg-indigo-700"
          >
            Bắt đầu ngay bây giờ
          </Link>
        </div>
      </div>
    </section>
  );
};
