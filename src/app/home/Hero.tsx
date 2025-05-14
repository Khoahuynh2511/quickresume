import Link from "next/link";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { AutoTypingResume } from "home/AutoTypingResume";

export const Hero = () => {
  return (
    <section className="relative pb-10 pt-16 lg:pt-20">
      <div className="lg:flex lg:items-center lg:justify-between">
        <FlexboxSpacer maxWidth={50} minWidth={0} className="hidden lg:block" />
        
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:grow lg:text-left">
          <h1 className="bg-gradient-to-r from-indigo-700 to-indigo-500 inline-block text-transparent bg-clip-text pb-2 text-5xl font-bold lg:text-6xl">
            Tạo CV chuyên nghiệp
            <br />
            một cách dễ dàng
          </h1>
          
          <p className="mt-4 text-lg text-gray-700 lg:mt-6 lg:text-xl max-w-lg">
            Với công cụ tạo CV miễn phí, mã nguồn mở và mạnh mẽ, được thiết kế để tối ưu hóa cơ hội việc làm của bạn
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/resume-import" 
              className="btn-indigo w-full sm:w-auto px-8 py-4 rounded-lg bg-indigo-600 text-white font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:bg-indigo-700 text-center">
              Tạo CV ngay <span aria-hidden="true" className="ml-2">→</span>
            </Link>
            
            <Link 
              href="/resume-parser" 
              className="w-full sm:w-auto px-8 py-4 rounded-lg border border-gray-300 text-gray-700 font-medium transition-all duration-300 hover:shadow-md hover:border-indigo-300 hover:text-indigo-600 text-center">
              Phân tích CV
            </Link>
          </div>
          
          <p className="mt-4 text-sm text-gray-600">
            <span className="inline-flex items-center">
              <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Hoàn toàn miễn phí, không cần đăng ký
            </span>
          </p>
        </div>
        
        <FlexboxSpacer maxWidth={75} minWidth={50} className="hidden lg:block" />
        
        <div className="mt-10 lg:mt-0 flex justify-center lg:block lg:grow relative">
          <div className="relative z-10 transform transition-all duration-500 hover:scale-105 hover:rotate-1">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-400 opacity-30 blur"></div>
            <div className="relative">
              <AutoTypingResume />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
