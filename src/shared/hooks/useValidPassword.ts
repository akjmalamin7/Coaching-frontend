// hooks/useValidPassword.ts

import { validatePassword } from "@/modules/auth/schema/passwordValidator.schema";

const useValidPassword = (password: string) => {
  return validatePassword(password);
};

export default useValidPassword;
