import { useOtpSendMutation } from "@/shared/redux/features/auth/authApi";
import Button from "@/shared/ui/button";
import ApiErrorMessage from "@/shared/ui/errorMessage";
import Input from "@/shared/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SendOTPSchema, sendOTPSchemaByYup } from "../../schema/otp.schema";
interface Props {
  onSuccess: (otp: boolean) => void;
  onGetEmail: (email: string) => void;
}
const OTPSend = ({ onSuccess, onGetEmail }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SendOTPSchema>({
    resolver: yupResolver(sendOTPSchemaByYup),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });
  const [otpSend, { isError, error, isLoading }] = useOtpSendMutation();
  const onSubmit = async (data: SendOTPSchema) => {
    try {
      const result = await otpSend(data).unwrap();
      console.log(result);
      if (result.status === "success") {
        onGetEmail(data.email);
        onSuccess(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="send-otp">
      <ApiErrorMessage isError={isError} error={error} />
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="email">
          <Input
            {...register("email")}
            errorMessage={errors.email?.message}
            type="email"
            size="sm"
            bgColor="theme"
            label="Your email"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="signin-button">
          <Button width="full" size="size-3" loading={isLoading} disabled={!isValid || isLoading} type="submit">
            {isLoading === true ? "Sending..." : "Send OTP"}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default OTPSend;
