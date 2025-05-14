import { Fragment } from "react";
import type { Resume } from "lib/redux/types";
import { initialEducation, initialWorkExperience } from "lib/redux/resumeSlice";
import { deepClone } from "lib/deep-clone";
import { cx } from "lib/cx";

const TableRowHeader = ({ children }: { children: React.ReactNode }) => (
  <tr className="divide-x bg-indigo-50">
    <th className="px-4 py-3 font-semibold text-indigo-800 rounded-t" scope="colgroup" colSpan={2}>
      {children}
    </th>
  </tr>
);

const TableRow = ({
  label,
  value,
  className,
}: {
  label: string;
  value: string | string[];
  className?: string | false;
}) => (
  <tr className={cx("divide-x hover:bg-gray-50 transition-colors", className)}>
    <th className="px-4 py-3 font-medium text-gray-700 w-1/4" scope="row">
      {label}
    </th>
    <td className="w-full px-4 py-3 text-gray-800">
      {typeof value === "string"
        ? value
        : value.map((x, idx) => (
            <Fragment key={idx}>
              • {x}
              <br />
            </Fragment>
          ))}
    </td>
  </tr>
);

export const ResumeTable = ({ resume }: { resume: Resume }) => {
  const educations =
    resume.educations.length === 0
      ? [deepClone(initialEducation)]
      : resume.educations;
  const workExperiences =
    resume.workExperiences.length === 0
      ? [deepClone(initialWorkExperience)]
      : resume.workExperiences;
  const skills = [...resume.skills.descriptions];
  const featuredSkills = resume.skills.featuredSkills
    .filter((item) => item.skill.trim())
    .map((item) => item.skill)
    .join(", ")
    .trim();
  if (featuredSkills) {
    skills.unshift(featuredSkills);
  }
  return (
    <table className="mt-4 w-full border border-gray-200 rounded-lg text-sm shadow-sm overflow-hidden">
      <tbody className="divide-y text-left align-top">
        <TableRowHeader>Thông Tin Cá Nhân</TableRowHeader>
        <TableRow label="Họ và Tên" value={resume.profile.name} />
        <TableRow label="Email" value={resume.profile.email} />
        <TableRow label="Số Điện Thoại" value={resume.profile.phone} />
        <TableRow label="Địa Chỉ" value={resume.profile.location} />
        <TableRow label="Liên Kết" value={resume.profile.url} />
        <TableRow label="Giới Thiệu" value={resume.profile.summary} />
        <TableRowHeader>Học Vấn</TableRowHeader>
        {educations.map((education, idx) => (
          <Fragment key={idx}>
            <TableRow label="Trường Học" value={education.school} />
            <TableRow label="Bằng Cấp" value={education.degree} />
            <TableRow label="Điểm GPA" value={education.gpa} />
            <TableRow label="Thời Gian" value={education.date} />
            <TableRow
              label="Mô Tả Chi Tiết"
              value={education.descriptions}
              className={
                educations.length - 1 !== 0 &&
                idx !== educations.length - 1 &&
                "!border-b-4 border-b-indigo-100"
              }
            />
          </Fragment>
        ))}
        <TableRowHeader>Kinh Nghiệm Làm Việc</TableRowHeader>
        {workExperiences.map((workExperience, idx) => (
          <Fragment key={idx}>
            <TableRow label="Công Ty" value={workExperience.company} />
            <TableRow label="Vị Trí" value={workExperience.jobTitle} />
            <TableRow label="Thời Gian" value={workExperience.date} />
            <TableRow
              label="Mô Tả Chi Tiết"
              value={workExperience.descriptions}
              className={
                workExperiences.length - 1 !== 0 &&
                idx !== workExperiences.length - 1 &&
                "!border-b-4 border-b-indigo-100"
              }
            />
          </Fragment>
        ))}
        {resume.projects.length > 0 && (
          <TableRowHeader>Dự Án</TableRowHeader>
        )}
        {resume.projects.map((project, idx) => (
          <Fragment key={idx}>
            <TableRow label="Tên Dự Án" value={project.project} />
            <TableRow label="Thời Gian" value={project.date} />
            <TableRow
              label="Mô Tả Chi Tiết"
              value={project.descriptions}
              className={
                resume.projects.length - 1 !== 0 &&
                idx !== resume.projects.length - 1 &&
                "!border-b-4 border-b-indigo-100"
              }
            />
          </Fragment>
        ))}
        <TableRowHeader>Kỹ Năng</TableRowHeader>
        <TableRow label="Các Kỹ Năng" value={skills} />
      </tbody>
    </table>
  );
};
