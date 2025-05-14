"use client";

import Link from "next/link";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Giả lập đăng ký thành công
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-indigo-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold">QuickResume</h2>
            <p className="mt-4 text-indigo-200">
              Công cụ tạo và phân tích CV miễn phí, giúp bạn tạo CV chuyên nghiệp và kiểm tra khả năng đọc của hệ thống ATS.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100014737263014" className="text-indigo-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://github.com/Khoahuynh2511" className="text-indigo-300 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/hu%E1%BB%B3nh-%C4%91%C4%83ng-khoa-846786218/" className="text-indigo-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
            <div>
              <p className="font-medium text-white">Công cụ</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-indigo-200">
                <Link href="/resume-builder" className="hover:text-white">Tạo CV</Link>
                <Link href="/resume-parser" className="hover:text-white">Phân tích CV</Link>
                <Link href="/resume-import" className="hover:text-white">Nhập CV</Link>
              </nav>
            </div>
            <div>
              <p className="font-medium text-white">Đăng ký nhận thông tin</p>
              <div className="mt-4">
                {!subscribed ? (
                  <form onSubmit={handleSubscribe} className="sm:flex sm:max-w-md">
                    <label htmlFor="email-address" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      required
                      className="w-full min-w-0 appearance-none rounded-md border border-indigo-700 bg-indigo-800 px-4 py-2 text-base text-white placeholder-indigo-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-900"
                      placeholder="Nhập email của bạn"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-indigo-900"
                      >
                        Đăng ký
                      </button>
                    </div>
                  </form>
                ) : (
                  <p className="text-green-300">Cảm ơn bạn đã đăng ký!</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-indigo-800 pt-8">
          <p className="text-center text-xs text-indigo-300">
            &copy; {new Date().getFullYear()} QuickResume. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}; 