import { useLoginMutation } from "@/shared/redux/features/auth/authApi";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import Checkbox from "@/shared/ui/checkbox";
import Input from "@/shared/ui/input";
import PasswordRules from "@/shared/ui/passwordRules";
import Text from "@/shared/ui/text";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FormValues, schema } from "../../schema/loginForm.schema";
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
  const [login, { isLoading }] = useLoginMutation();
  const passwordWatch = watch("password");
  const onSubmit = async (data: FormValues) => {
    try {
      await login(data).unwrap();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-[360px] lg:max-w-[400px] w-[100%] mx-auto">
      <div className="mb-[20px]">
        <Text element="h1" size="xl" fontWeight="semiBold" className="uppercase" textAlign="center">
          {/* Welcome to CMS */}
        </Text>
      </div>
      <div>
        <Card bgColor="white" className="!bg-white" radius="md">
          <Card.CardBody className="!bg-white !p-7">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <div className="mb-1">
                <Text element="h3" size="lg" fontWeight="medium">
                  Sign in to your account
                </Text>
              </div>
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
              <div className="password">
                <Input
                  {...register("password")}
                  errorMessage={errors.password?.message}
                  type="password"
                  size="sm"
                  bgColor="theme"
                  label="Password"
                  placeholder="******"
                />
              </div>
              {passwordWatch && passwordWatch.length > 0 && (
                <PasswordRules password={passwordWatch} />
              )}
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
                <Button
                  width="full"
                  size="size-3"
                  loading={isLoading}
                  disabled={!isValid || isLoading}
                  type="submit"
                >
                  {isLoading === true ? "Submitting..." : "Sign in your account"}
                </Button>
              </div>
              <div className="signup">
                <Text size="md" fontWeight="regular" color="theme-gray">
                  Don’t have an account yet?{" "}
                  <Link to={"/signup"} className="text-blue-600">
                    Sign up
                  </Link>
                </Text>
              </div>
            </form>
          </Card.CardBody>
        </Card>
      </div>
    </div>
  );
};
export default LoginForm;
