import useApiErrorByToast from "@/shared/hooks/useApiErrorByToast";
import { useLoginMutation } from "@/shared/redux/features/auth/authApi";
import Button from "@/shared/ui/button";
import Checkbox from "@/shared/ui/checkbox";
import Input from "@/shared/ui/input";
import PasswordRules from "@/shared/ui/passwordRules";
import Text from "@/shared/ui/text";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormValues, schema } from "../../schema/loginForm.schema";
import AuthCard from "../authCard/AuthCard";
const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [login, { isError, error, isLoading }] = useLoginMutation();
  const passwordWatch = watch("password");
  const onSubmit = async (data: FormValues) => {
    try {
      const result = await login(data).unwrap();
      if (result.status === "success") {
        toast.success("Successfully Login.");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useApiErrorByToast({ isError, error });
  return (
    <AuthCard formTitle="Sign in to your account">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          {...register("email")}
          errorMessage={errors.email?.message}
          type="email"
          size="sm"
          bgColor="theme"
          label="Your email"
          placeholder="example@gmail.com"
          disabled={isLoading}
        />
        <Input
          {...register("password")}
          errorMessage={errors.password?.message}
          type="password"
          size="sm"
          bgColor="theme"
          label="Password"
          placeholder="******"
          disabled={isLoading}
        />
        {passwordWatch && passwordWatch.length > 0 && <PasswordRules password={passwordWatch} />}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Checkbox label="Remember me" disabled />
          </div>
          <div className="forgot-password">
            <Text size="md" fontWeight="regular" color="primary">
              <Link to={"/forgot"}>Forgot password?</Link>
            </Text>
          </div>
        </div>
        <div className="signin-button">
          <Button width="full" size="size-3" loading={isLoading} disabled={!isValid || isLoading} type="submit">
            {isLoading === true ? "Submitting..." : "Sign in your account"}
          </Button>
        </div>
      </form>
    </AuthCard>
  );
};
export default LoginForm;
