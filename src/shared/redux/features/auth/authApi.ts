import Cookies from "js-cookie";
import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
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
          console.log({
            token: result?.data?.token,
            user: result?.data?.user,
          });
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});
export const { useLoginMutation } = authApi;
