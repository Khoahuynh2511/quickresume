import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Footer } from "components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QuickResume - Công cụ tạo và phân tích CV miễn phí",
  description:
    "QuickResume là công cụ tạo CV miễn phí, mã nguồn mở và mạnh mẽ giúp bạn tạo CV chuyên nghiệp hiện đại chỉ trong 3 bước đơn giản. Đối với những người đã có CV, QuickResume cũng cung cấp công cụ phân tích CV để kiểm tra khả năng đọc của hệ thống ATS.",
  keywords: ["resume builder", "cv builder", "resume parser", "ats friendly", "job application", "quick resume"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Company",
  metadataBase: new URL("https://your-domain.com"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
      'vi-VN': '/vi-VN',
    },
  },
  openGraph: {
    title: "QuickResume - Công cụ tạo và phân tích CV miễn phí",
    description: "Tạo CV chuyên nghiệp miễn phí và kiểm tra khả năng đọc của hệ thống ATS",
    url: "https://your-domain.com",
    siteName: "QuickResume",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickResume - Công cụ tạo và phân tích CV miễn phí",
    description: "Tạo CV chuyên nghiệp miễn phí và kiểm tra khả năng đọc của hệ thống ATS",
    creator: "@yourhandle",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-indigo-50 font-sans antialiased">
        <TopNavBar />
        <div className="flex-grow">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
