import useDocumentTitle from "@/shared/hooks/useDocumentTitle";
import RegistrationForm from "../../components/registrationForm";

const Registration = () => {
  useDocumentTitle("Registration - Tuition");
  return (
    <div className="bg-gray-50 h-screen w-full flex items-center">
      <RegistrationForm />
    </div>
  );
};

export default Registration;
