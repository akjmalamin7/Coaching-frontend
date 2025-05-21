import Card from "@/shared/ui/card";
import Text from "@/shared/ui/text";
import { useState } from "react";
import { Link } from "react-router-dom";
import OTPSend from "../otpSend";
import VerifyOTP from "../verifyOTP";

const RegistrationForm = () => {
  const [isSendOtp, setIsSendOtp] = useState(false);
  const [getEmail, setGetEmail] = useState<string>("");
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
            <div className="flex flex-col gap-3">
              <div className="mb-3">
                <Text element="h1" size="lg" fontWeight="medium">
                  Create an account
                </Text>
                <Text element="p" size="md" fontWeight="regular" color="theme-gray">
                  Create your account and stay with tuition
                </Text>
              </div>
              {!isSendOtp && <OTPSend onSuccess={setIsSendOtp} onGetEmail={setGetEmail} />}

              {isSendOtp && <VerifyOTP getEmail={getEmail} />}
              <div className="footer">
                <Text size="md" fontWeight="regular" color="theme-gray">
                  Already have an account yet?{" "}
                  <Link to={"/login"} className="text-blue-600">
                    Login
                  </Link>
                </Text>
              </div>
            </div>
          </Card.CardBody>
        </Card>
      </div>
    </div>
  );
};
export default RegistrationForm;
