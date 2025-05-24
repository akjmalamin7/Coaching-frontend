import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import AuthCard from "../../components/authCard/AuthCard";

const Forgot = () => {
  return (
    <div className="bg-gray-50 h-screen w-full flex items-center">
      <AuthCard formTitle="Forgot password">
        <Input size="sm" label="Email" bgColor="light" />
        <Button size="size-3">Send</Button>
      </AuthCard>
    </div>
  );
};

export default Forgot;
