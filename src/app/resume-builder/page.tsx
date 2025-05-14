"use client";
import { Provider } from "react-redux";
import { store } from "lib/redux/store";
import { ResumeForm } from "components/ResumeForm";
import { Resume } from "components/Resume";

export default function Create() {
  return (
    <Provider store={store}>
      <main className="relative h-full w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <div className="py-4 text-center">
          <h1 className="text-2xl font-bold text-indigo-700">Tạo CV Chuyên Nghiệp</h1>
          <p className="text-gray-600 text-sm mt-1">Điền thông tin bên trái và xem kết quả trực tiếp bên phải</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 px-4 pb-4">
          <div className="col-span-1 lg:col-span-2 bg-white rounded-lg shadow-md p-4 border border-indigo-100 md:h-[calc(100vh-8rem)] md:overflow-y-auto">
            <ResumeForm />
          </div>
          
          <div className="col-span-1 lg:col-span-3 bg-white rounded-lg shadow-md p-4 border border-indigo-100 md:h-[calc(100vh-8rem)] md:overflow-y-auto">
            <div className="flex justify-center">
              <Resume />
            </div>
          </div>
        </div>
      </main>
    </Provider>
  );
}
