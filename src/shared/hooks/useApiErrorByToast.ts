import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useEffect } from "react";
import { toast } from "react-toastify";
interface ApiErrorMessageProps {
  isError: boolean;
  error: FetchBaseQueryError | SerializedError | null | undefined;
}
const useApiErrorByToast = ({ isError, error }: ApiErrorMessageProps) => {
  useEffect(() => {
    if (isError && error && typeof error === "object") {
      let errorMessage = "Something went wrong.";

      if ("data" in error) {
        const data = error.data;
        if (typeof data === "string") {
          errorMessage = data;
        } else if (data && typeof data === "object" && "message" in data) {
          errorMessage = (data as { message?: string }).message || errorMessage;
        }
      } else if ("message" in error && error.message) {
        errorMessage = error.message;
      }

      toast.error(errorMessage);
    }
  }, [isError, error]);
};
export default useApiErrorByToast;
