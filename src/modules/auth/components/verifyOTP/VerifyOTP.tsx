import { useOtpVerifyAndCreateMutation } from "@/shared/redux/features/auth/authApi";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import PasswordRules from "@/shared/ui/passwordRules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { VerifyOTPSchema, verifyOTPSchemaByYup } from "../../schema/otp.schema";
interface Props {
  getEmail: string | "";
}
const VerifyOTP = ({ getEmail }: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<VerifyOTPSchema>({
    resolver: yupResolver(verifyOTPSchemaByYup),
    mode: "onChange",
    defaultValues: {
      otp: "",
      role: "student",
      email: getEmail,
      password: "",
    },
  });
  const [otpSend, { isLoading }] = useOtpVerifyAndCreateMutation();
  const passwordWatch = watch("password");
  const onSubmit = async (data: VerifyOTPSchema) => {
    try {
      const result = await otpSend(data).unwrap();
      if (result.status === "success") {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setValue("email", getEmail);
  }, [getEmail, setValue]);

  return (
    <div className="send-otp">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="otp">
          <Input
            {...register("otp")}
            errorMessage={errors.otp?.message}
            type="text"
            size="sm"
            bgColor="theme"
            label="OTP"
            placeholder="1 2 3 4 5 6"
          />
        </div>
        <div className="role">
          <Input
            {...register("role")}
            errorMessage={errors.role?.message}
            type="text"
            size="sm"
            bgColor="theme"
            label="Your role"
            placeholder="Type your role"
          />
        </div>
        {/* <div className="email">
          <Input
            {...register("email")}
            errorMessage={errors.email?.message}
            type="email"
            size="sm"
            bgColor="theme"
            label="Your email"
            placeholder="example@gmail.com"
          />
        </div> */}
        <div className="email">
          <Input
            {...register("password")}
            errorMessage={errors.email?.message}
            type="password"
            size="sm"
            bgColor="theme"
            label="Your password"
            placeholder="********"
          />
        </div>
        {passwordWatch && passwordWatch.length > 0 && <PasswordRules password={passwordWatch} />}
        <div className="signin-button">
          <Button width="full" size="size-3" loading={isLoading} disabled={!isValid || isLoading} type="submit">
            {isLoading === true ? "Creating..." : "Create an account"}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default VerifyOTP;
