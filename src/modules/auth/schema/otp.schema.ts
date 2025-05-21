import * as yup from "yup";
import { validatePassword } from "./passwordValidator.schema";
export interface SendOTPSchema {
  email: string;
}
export interface VerifyOTPSchema {
  otp: string;
  role: string;
  email: string;
  password: string;
}
export const sendOTPSchemaByYup = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});
export const verifyOTPSchemaByYup = yup.object().shape({
  otp: yup.string().required("OTP is required"),
  role: yup.string().required("Role is required").default("student"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .test("is-strong", "Password is not strong enough", (value) => {
      const result = validatePassword(value);
      return result.isValid;
    }),
});
