export interface UserSchema {
  email: string;
  role: string;
  _id: string;
}
export interface LoginData {
  email?: string;
  password?: string;
}
export interface AuthState {
  token: string | null;
  user: UserSchema | null;
}

export const AUTH_INITIAL_STATE: AuthState = {
  token: null,
  user: {} as UserSchema,
};
export interface SendOTPSchema {
  email: string;
}
export interface OTPVerifySchema {
  otp: string;
  role: string;
  email: string;
  password: string;
}
