import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import Checkbox from "@/shared/ui/checkbox";
import Input from "@/shared/ui/input";
import Text from "@/shared/ui/text";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="max-w-[430px] w-[100%] mx-auto">
      <div className="mb-[20px]">
        <Text element="h1" size="xl" fontWeight="bold" className="uppercase" textAlign="center">
          {/* Coaching */}
        </Text>
      </div>
      <div>
        <Card bgColor="white" className="!bg-white" radius="md">
          <Card.CardBody className="!bg-white !p-7">
            <form className="flex flex-col gap-5">
              <div className="mb-1">
                <Text element="h3" size="lg" fontWeight="medium">
                  Sign in to your account
                </Text>
              </div>
              <div className="email">
                <Input type="email" size="sm" bgColor="theme" label="Your email" placeholder="example@gmail.com" />
              </div>
              <div className="password">
                <Input type="password" size="sm" bgColor="theme" label="Password" placeholder="******" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Checkbox label="Remember me" />
                </div>
                <div className="forgot-password">
                  <Text size="md" fontWeight="regular" color="primary">
                    <Link to={"/forgot"}>Forgot password?</Link>
                  </Text>
                </div>
              </div>
              <div className="signin-button">
                <Button width="full" size="size-3">
                  Sign in
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
