import * as yup from "yup";
import { validatePassword } from "../../../shared/utils/passwordValidator.schema";

export interface FormValues {
  email: string;
  password: string;
}

export const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .test("is-strong", "Password is not strong enough", (value) => {
      const result = validatePassword(value);
      return result.isValid;
    }),
});
