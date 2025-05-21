import Cookies from "js-cookie";
import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    otpSend: builder.mutation({
      query: (data) => ({
        url: "/user-otp",
        method: "POST",
        body: data,
      }),
    }),
    otpVerifyAndCreate: builder.mutation({
      query: (data) => ({
        url: "/user/verify",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          Cookies.set(
            "auth",
            JSON.stringify({
              token: result?.data?.token,
              user: result?.data?.user,
            })
          );
          dispatch(
            userLoggedIn({
              token: result?.data?.token,
              user: result?.data?.user,
            })
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});
export const { useLoginMutation, useOtpSendMutation, useOtpVerifyAndCreateMutation } = authApi;
