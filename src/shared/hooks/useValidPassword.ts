// hooks/useValidPassword.ts

import { validatePassword } from "@/shared/utils/passwordValidator.schema";

const useValidPassword = (password: string) => {
  return validatePassword(password);
};

export default useValidPassword;
