import { BaseForm } from "components/ResumeForm/Form";
import { Input, Textarea } from "components/ResumeForm/Form/InputGroup";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { changeProfile, selectProfile } from "lib/redux/resumeSlice";
import { ResumeProfile } from "lib/redux/types";

export const ProfileForm = () => {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const { name, email, phone, url, summary, location } = profile;

  const handleProfileChange = (field: keyof ResumeProfile, value: string) => {
    dispatch(changeProfile({ field, value }));
  };

  return (
    <BaseForm>
      <div className="grid grid-cols-6 gap-3">
        <Input
          label="Họ tên"
          labelClassName="col-span-full"
          name="name"
          placeholder="Nguyễn Văn A"
          value={name}
          onChange={handleProfileChange}
        />
        <Textarea
          label="Mục tiêu nghề nghiệp"
          labelClassName="col-span-full"
          name="summary"
          placeholder="Kỹ sư phần mềm đam mê xây dựng các sản phẩm xuất sắc mà mọi người yêu thích"
          value={summary}
          onChange={handleProfileChange}
        />
        <Input
          label="Email"
          labelClassName="col-span-4"
          name="email"
          placeholder="hello@example.com"
          value={email}
          onChange={handleProfileChange}
        />
        <Input
          label="Điện thoại"
          labelClassName="col-span-2"
          name="phone"
          placeholder="0987654321"
          value={phone}
          onChange={handleProfileChange}
        />
        <Input
          label="Website"
          labelClassName="col-span-4"
          name="url"
          placeholder="linkedin.com/in/nguyenvana"
          value={url}
          onChange={handleProfileChange}
        />
        <Input
          label="Địa điểm"
          labelClassName="col-span-2"
          name="location"
          placeholder="TP.HCM, Việt Nam"
          value={location}
          onChange={handleProfileChange}
        />
      </div>
    </BaseForm>
  );
};
