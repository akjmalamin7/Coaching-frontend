import useApiErrorByToast from "@/shared/hooks/useApiErrorByToast";
import { useOtpVerifyAndCreateMutation } from "@/shared/redux/features/auth/authApi";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import PasswordRules from "@/shared/ui/passwordRules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { VerifyOTPSchema, verifyOTPSchemaByYup } from "../../schema/otp.schema";
import SetOTP from "../setOTP";

interface Props {
  getEmail: string | "";
}

const VerifyOTP = ({ getEmail }: Props) => {
  const navigate = useNavigate();
  const [otpStep, setOtpStep] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    trigger,
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

  const [otpSend, { isError, error, isLoading }] = useOtpVerifyAndCreateMutation();
  const passwordWatch = watch("password");

  const handleOtpSubmit = async () => {
    const isOtpValid = await trigger("otp");
    if (isOtpValid) {
      setOtpStep(true);
    }
  };

  const onSubmit = async (data: VerifyOTPSchema) => {
    try {
      const result = await otpSend(data).unwrap();
      if (result.status === "success") {
        toast.success("Account create successful");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setValue("email", getEmail);
  }, [getEmail, setValue]);

  useApiErrorByToast({ isError, error });

  return (
    <div className="send-otp">
      {!otpStep ? (
        <SetOTP
          register={register}
          loading={isLoading}
          errorMessage={errors.otp?.message}
          onSubmit={handleOtpSubmit}
        />
      ) : (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
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
          <div className="email">
            <Input
              {...register("password")}
              errorMessage={errors.password?.message}
              type="password"
              size="sm"
              bgColor="theme"
              label="Your password"
              placeholder="********"
            />
          </div>
          {passwordWatch && passwordWatch.length > 0 && <PasswordRules password={passwordWatch} />}
          <div className="signin-button">
            <Button
              width="full"
              size="size-3"
              loading={isLoading}
              disabled={!isValid || isLoading}
              type="submit"
            >
              {isLoading ? "Creating..." : "Create an account"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default VerifyOTP;
