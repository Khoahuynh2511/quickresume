import Image from "next/image";
import featureFreeSrc from "public/assets/feature-free.svg";
import featureUSSrc from "public/assets/feature-us.svg";
import featurePrivacySrc from "public/assets/feature-privacy.svg";
import featureOpenSourceSrc from "public/assets/feature-open-source.svg";
import { Link } from "components/documentation";

const FEATURES = [
  {
    src: featureFreeSrc,
    title: "Miễn Phí Mãi Mãi",
    text: "QuickResume được tạo ra với niềm tin rằng mọi người đều nên được tiếp cận miễn phí và dễ dàng với thiết kế CV chuyên nghiệp hiện đại",
  },
  {
    src: featureUSSrc,
    title: "Chuẩn Quốc Tế",
    text: "QuickResume được xây dựng dựa trên những quy tắc tốt nhất cho thị trường việc làm toàn cầu và hoạt động tốt với các nền tảng ATS hàng đầu như Greenhouse và Lever",
  },
  {
    src: featurePrivacySrc,
    title: "Bảo Mật Thông Tin",
    text: "QuickResume lưu trữ dữ liệu cục bộ trong trình duyệt của bạn, đảm bảo chỉ bạn mới có quyền truy cập vào dữ liệu và kiểm soát hoàn toàn",
  },
  {
    src: featureOpenSourceSrc,
    title: "Mã Nguồn Mở",
    text: (
      <>
        QuickResume là một dự án mã nguồn mở, và mã nguồn của nó có thể được xem
        bởi bất kỳ ai trên{" "}
        <Link href="https://github.com/Khoahuynh2511">
          kho lưu trữ GitHub
        </Link>
      </>
    ),
  },
];

export const Features = () => {
  return (
    <section className="py-16 lg:py-36">
      <div className="mx-auto lg:max-w-4xl">
        <dl className="grid grid-cols-1 justify-items-center gap-y-8 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-16">
          {FEATURES.map(({ src, title, text }) => (
            <div className="px-2 transform transition-transform duration-300 hover:scale-105" key={title}>
              <div className="relative w-96 self-center pl-16 rounded-lg p-4 hover:bg-indigo-50 transition-colors duration-300">
                <dt className="text-2xl font-bold text-indigo-800">
                  <Image
                    src={src}
                    className="absolute left-0 top-1 h-12 w-12"
                    alt="Biểu tượng tính năng"
                  />
                  {title}
                </dt>
                <dd className="mt-2 text-gray-600">{text}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
