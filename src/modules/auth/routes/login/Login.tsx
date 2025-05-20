import useDocumentTitle from "@/shared/hooks/useDocumentTitle";
import LoginForm from "../../components/loginForm";

const Login = () => {
  useDocumentTitle("Login - Tuition");
  return (
    <div className="bg-gray-50 h-screen w-full flex items-center">
      <LoginForm />
    </div>
  );
};

export default Login;
