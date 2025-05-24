import Card from "@/shared/ui/card";
import Text from "@/shared/ui/text";
import { Link } from "react-router-dom";

interface Props {
  heading?: string;
  formTitle?: string;
  formSubTitle?: string;
  children?: React.ReactNode;
  formType?: "signin" | "registration" | "forgot";
}

const AuthCard = ({ heading, formTitle, formSubTitle, children, formType = "signin" }: Props) => {
  let footerContent;

  switch (formType) {
    case "signin":
      footerContent = (
        <Text size="md" fontWeight="regular" color="theme-gray">
          Don't have an account?{" "}
          <Link to="/registration" className="text-blue-600">
            Sign up
          </Link>
        </Text>
      );
      break;
    case "registration":
      footerContent = (
        <Text size="md" fontWeight="regular" color="theme-gray">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Sign in
          </Link>
        </Text>
      );
      break;
    case "forgot":
      footerContent = (
        <Text size="md" fontWeight="regular" color="theme-gray">
          Remembered your password?{" "}
          <Link to="/forgot" className="text-blue-600">
            Sign in
          </Link>
        </Text>
      );
      break;
    default:
      footerContent = (
        <Text size="md" fontWeight="regular" color="theme-gray">
          Don't have an account?{" "}
          <Link to="/registration" className="text-blue-600">
            Sign up
          </Link>
        </Text>
      );
      break;
  }

  return (
    <div className="max-w-[360px] lg:max-w-[400px] w-full mx-auto">
      {heading && (
        <div className="mb-[20px]">
          <Text element="h1" size="xl" fontWeight="semiBold" className="uppercase" textAlign="center">
            {heading}
          </Text>
        </div>
      )}

      <div>
        <Card bgColor="white" className="!bg-white" radius="md">
          <Card.CardBody className="!bg-white !p-7">
            <div className="flex flex-col gap-4">
              {formTitle && (
                <div className="mb-1">
                  <Text element="h3" size="lg" fontWeight="medium">
                    {formTitle}
                  </Text>
                  {formSubTitle && (
                    <Text element="p" size="md" fontWeight="regular" color="theme-gray">
                      {formSubTitle}
                    </Text>
                  )}
                </div>
              )}
              {children}
              <div className="signup">{footerContent}</div>
            </div>
          </Card.CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AuthCard;
