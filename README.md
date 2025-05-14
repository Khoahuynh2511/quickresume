# QuickResume

QuickResume là công cụ tạo và phân tích CV mạnh mẽ.

Mục tiêu của QuickResume là cung cấp cho mọi người quyền truy cập miễn phí vào thiết kế CV chuyên nghiệp hiện đại và cho phép mọi người tự tin ứng tuyển việc làm.

Trang chính thức: [https://quick-resume.netlify.app](https://quick-resume.netlify.app)

## ⚒️ Công cụ tạo CV

Công cụ tạo CV của QuickResume cho phép người dùng dễ dàng tạo CV chuyên nghiệp hiện đại.

![Demo tạo CV](https://i.ibb.co/jzcrrt8/resume-builder-demo-optimize.gif)

Có 5 tính năng cốt lõi:
| <div style="width:285px">**Tính năng**</div> | **Mô tả** |
|---|---|
| **1. Cập nhật UI theo thời gian thực** | PDF CV được cập nhật theo thời gian thực khi bạn nhập thông tin CV, vì vậy bạn có thể dễ dàng xem kết quả cuối cùng. |
| **2. Thiết kế CV chuyên nghiệp hiện đại** | PDF CV có thiết kế chuyên nghiệp hiện đại tuân theo các phương pháp hay nhất của Hoa Kỳ và thân thiện với ATS đối với các nền tảng ATS hàng đầu như Greenhouse và Lever. Nó tự động định dạng phông chữ, kích thước, lề, dấu đầu dòng để đảm bảo tính nhất quán và tránh lỗi của con người. |
| **3. Tập trung vào quyền riêng tư** | Ứng dụng chỉ chạy cục bộ trên trình duyệt của bạn, nghĩa là không cần đăng ký và không có dữ liệu nào rời khỏi trình duyệt của bạn, mang lại cho bạn sự yên tâm về dữ liệu cá nhân. (Thông tin thú vị: Chạy chỉ cục bộ có nghĩa là ứng dụng vẫn hoạt động ngay cả khi bạn ngắt kết nối internet.) |
| **4. Nhập từ PDF CV hiện có** | Nếu bạn đã có sẵn PDF CV, bạn có thể nhập trực tiếp, vì vậy bạn có thể cập nhật thiết kế CV của mình thành thiết kế chuyên nghiệp hiện đại chỉ trong vài giây. |
| **5. Thành tích thành công** | Người dùng QuickResume đã nhận được phỏng vấn và lời mời từ các công ty hàng đầu, chẳng hạn như Dropbox, Google, Meta chỉ để kể tên một vài. Nó đã được chứng minh là hiệu quả và được nhà tuyển dụng và người quản lý tuyển dụng đánh giá cao. |

## 🔍 Công cụ phân tích CV

Thành phần thứ hai của QuickResume là công cụ phân tích CV. Đối với những người đã có CV, công cụ phân tích CV có thể giúp kiểm tra và xác nhận khả năng đọc ATS của nó.

![Demo phân tích CV](https://i.ibb.co/JvSVwNk/resume-parser-demo-optimize.gif)

Bạn có thể tìm hiểu thêm về thuật toán phân tích CV trong ["Phần phân tích chi tiết thuật toán phân tích CV"](https://quick-resume.netlify.app/resume-parser).

## 📚 Công nghệ sử dụng

| <div style="width:140px">**Danh mục**</div> | <div style="width:100px">**Lựa chọn**</div> | **Mô tả** |
|---|---|---|
| **Ngôn ngữ** | [TypeScript](https://github.com/microsoft/TypeScript) | TypeScript là JavaScript với kiểm tra kiểu tĩnh và giúp bắt nhiều lỗi ngớ ngẩn tại thời điểm code. |
| **Thư viện UI** | [React](https://github.com/facebook/react) | Cú pháp khai báo của React và kiến trúc dựa trên component giúp đơn giản hóa việc phát triển các component tái sử dụng. |
| **Quản lý trạng thái** | [Redux Toolkit](https://github.com/reduxjs/redux-toolkit) | Redux toolkit giảm boilerplate để thiết lập và cập nhật redux store trung tâm, được sử dụng để quản lý trạng thái CV phức tạp. |
| **Framework CSS** | [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) | Tailwind tăng tốc phát triển bằng cách cung cấp các tiện ích css hữu ích và loại bỏ nhu cầu chuyển đổi ngữ cảnh giữa các file tsx và css. |
| **Framework Web** | [NextJS](https://github.com/vercel/next.js) | Next.js hỗ trợ tạo trang tĩnh và giúp xây dựng các trang web React hiệu quả hỗ trợ SEO. |
| **PDF Reader** | [PDF.js](https://github.com/mozilla/pdf.js) | PDF.js đọc nội dung từ các file PDF và được sử dụng bởi công cụ phân tích CV ở bước đầu tiên để đọc nội dung PDF CV. |
| **PDF Renderer** | [React-pdf](https://github.com/diegomura/react-pdf) | React-pdf tạo các file PDF và được sử dụng bởi công cụ tạo CV để tạo file PDF có thể tải xuống. |
| **Hosting** | [Netlify](https://www.netlify.com/) | Netlify cung cấp hosting nhanh chóng, bảo mật và miễn phí cho ứng dụng web tĩnh. |

## 📁 Cấu trúc dự án

QuickResume được tạo bằng framework web NextJS và tuân theo cấu trúc dự án của nó. Mã nguồn có thể được tìm thấy trong `src/app`. Có tổng cộng 3 tuyến đường trang như trong bảng dưới đây. (Đường dẫn code tương đối với `src/app`)

| <div style="width:115px">**Tuyến đường trang**</div> | **Đường dẫn code** | **Mô tả** |
|---|---|---|
| / | /page.tsx | Trang chủ chứa hero, auto typing resume, steps, testimonials, logo cloud, v.v. |
| /resume-import | /resume-import/page.tsx | Trang nhập CV, nơi bạn có thể chọn nhập dữ liệu từ PDF CV hiện có. Thành phần chính được sử dụng là `ResumeDropzone` (`/components/ResumeDropzone.tsx`) |
| /resume-builder | /resume-builder/page.tsx | Trang tạo CV để xây dựng và tải xuống PDF CV. Các thành phần chính được sử dụng là `ResumeForm` (`/components/ResumeForm`) và `Resume` (`/components/Resume`) |
| /resume-parser | /resume-parser/page.tsx | Trang phân tích CV để kiểm tra khả năng đọc AST của CV. Tiện ích thư viện chính được sử dụng là `parseResumeFromPdf` (`/lib/parse-resume-from-pdf`) |

## 💻 Phát triển cục bộ

### Phương pháp 1: npm

1. Tải repo `git clone https://github.com/Khoahuynh2511/quickresume.git`
2. Thay đổi thư mục `cd quickresume`
3. Cài đặt các phụ thuộc `npm install`
4. Bắt đầu server phát triển `npm run dev`
5. Mở trình duyệt của bạn và truy cập [http://localhost:3000](http://localhost:3000) để xem QuickResume trực tiếp

### Phương pháp 2: Docker

1. Tải repo `git clone https://github.com/Khoahuynh2511/quickresume.git`
2. Thay đổi thư mục `cd quickresume`
3. Xây dựng container `docker build -t quick-resume .`
4. Bắt đầu container `docker run -p 3000:3000 quick-resume`
5. Mở trình duyệt của bạn và truy cập [http://localhost:3000](http://localhost:3000) để xem QuickResume trực tiếp

## 🚀 Triển khai

Dự án này được cấu hình để triển khai trên Netlify. Bạn có thể triển khai phiên bản của riêng mình bằng cách:

1. Fork repo này
2. Đăng nhập vào Netlify và tạo dự án mới từ GitHub repo của bạn
3. Netlify sẽ tự động phát hiện cấu hình NextJS và triển khai trang web

Hoặc sử dụng nút triển khai nhanh:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Khoahuynh2511/quickresume)
