import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "lib/redux/resumeSlice";
import type { Resume } from "lib/redux/types";
import { deepClone } from "lib/deep-clone";

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "Nguyễn Văn A",
    summary:
      "Kỹ sư phần mềm đam mê xây dựng các sản phẩm xuất sắc mà mọi người yêu thích",
    email: "hello@quick-resume.com",
    phone: "098-765-4321",
    location: "TP.HCM, Việt Nam",
    url: "linkedin.com/in/nguyen-van-a",
  },
  workExperiences: [
    {
      company: "Công ty ABC",
      jobTitle: "Kỹ sư phần mềm",
      date: "Tháng 5 2025 - Hiện tại",
      descriptions: [
        "Dẫn dắt nhóm 5 kỹ sư đa chức năng trong việc phát triển thanh tìm kiếm, giúp hàng nghìn người dùng hoạt động hàng ngày tìm kiếm nội dung trên toàn bộ nền tảng",
        "Tạo hoạt ảnh demo sản phẩm trang chủ ấn tượng giúp tăng tỷ lệ đăng ký lên 20%",
        "Viết mã sạch, mô-đun hóa và dễ bảo trì đồng thời đảm bảo độ phủ kiểm thử 100%",
      ],
    },
    {
      company: "Tổ chức DEF",
      jobTitle: "Thực tập sinh kỹ sư phần mềm",
      date: "Mùa hè 2024",
      descriptions: [
        "Thiết kế lại trình soạn thảo nội dung hiện có để tương thích với thiết bị di động, dẫn đến sự tăng 10% tương tác của người dùng di động",
        "Tạo thanh tiến trình để giúp người dùng theo dõi tiến độ, giúp tăng 15% tỷ lệ giữ chân người dùng",
        "Phát hiện và sửa 5 lỗi trong mã nguồn hiện có để nâng cao trải nghiệm người dùng",
      ],
    },
    {
      company: "Đại học XYZ",
      jobTitle: "Trợ lý nghiên cứu",
      date: "Mùa hè 2023",
      descriptions: [
        "Phát triển thuật toán NLP mới trong phân loại văn bản giúp tăng 10% độ chính xác",
        "Tổng hợp và trình bày kết quả nghiên cứu cho nhóm hơn 20 giảng viên và sinh viên",
      ],
    },
  ],
  educations: [
    {
      school: "Đại học XYZ",
      degree: "Cử nhân Khoa học Máy tính",
      date: "Tháng 9 2019 - Tháng 5 2023",
      gpa: "3.8",
      descriptions: [
        "Đạt giải nhất tại Hackathon Giáo dục 2022, giải nhì tại Cuộc thi Công nghệ Y tế 2023",
        "Trợ giảng môn Lập trình Web (2022 - 2023)",
        "Các môn học: Lập trình hướng đối tượng (A+), Lập trình Web (A+), Điện toán Đám mây (A), Nhập môn Học máy (A-), Phân tích Thuật toán (A-)",
      ],
    },
  ],
  projects: [
    {
      project: "QuickResume",
      date: "Xuân 2025",
      descriptions: [
        "Tạo và ra mắt ứng dụng web tạo CV miễn phí giúp hàng nghìn người dùng dễ dàng tạo CV chuyên nghiệp và đạt được công việc mơ ước",
      ],
    },
  ],
  skills: {
    featuredSkills: [
      { skill: "HTML", rating: 4 },
      { skill: "CSS", rating: 4 },
      { skill: "Python", rating: 3 },
      { skill: "TypeScript", rating: 3 },
      { skill: "React", rating: 3 },
      { skill: "C++", rating: 2 },
    ],
    descriptions: [
      "Kỹ thuật: React Hooks, GraphQL, Node.js, SQL, Postgres, NoSql, Redis, REST API, Git",
      "Kỹ năng mềm: Làm việc nhóm, Giải quyết vấn đề sáng tạo, Giao tiếp, Tư duy học tập, Agile",
    ],
  },
  custom: {
    descriptions: [],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
  custom: {
    descriptions: [],
  },
};
