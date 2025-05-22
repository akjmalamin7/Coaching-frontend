import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import { UseFormRegister } from "react-hook-form";
import { VerifyOTPSchema } from "../../schema/otp.schema";

interface OTPProps {
  register: UseFormRegister<VerifyOTPSchema>;
  errorMessage?: string;
  onSubmit?: () => void;
  loading?: boolean;
}

const SetOTP = ({ register, errorMessage, loading, onSubmit }: OTPProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="otp">
        <Input
          {...register("otp")}
          errorMessage={errorMessage}
          type="text"
          size="sm"
          bgColor="theme"
          label="OTP"
          placeholder="1 2 3 4 5 6"
        />
      </div>
      <Button type="button" width="full" size="size-3" onClick={onSubmit} disabled={loading}>
        Verify OTP
      </Button>
    </div>
  );
};

export default SetOTP;
