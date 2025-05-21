import Text from "@/shared/ui/text";
import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React from "react";

interface ApiErrorMessageProps {
  isError: boolean;
  error: FetchBaseQueryError | SerializedError | null | undefined;
}

interface ErrorData {
  message?: string;
}

const ApiErrorMessage: React.FC<ApiErrorMessageProps> = ({ isError, error }) => {
  if (!isError || !error) return null;

  let message: string | null = null;

  // Handle FetchBaseQueryError
  if ("data" in error) {
    const data = error.data;
    if (typeof data === "string") {
      message = data;
    } else if (data && typeof data === "object" && "message" in data) {
      message = (data as ErrorData).message ?? "Something went wrong.";
    }
  }

  // Handle SerializedError
  if (!message && "message" in error && error.message) {
    message = error.message;
  }

  if (!message) return null;

  return (
    <div className="bg-red-200 p-2 rounded mb-3">
      <Text element="p" size="sm" fontWeight="medium" className="text-red-500">
        {message}
      </Text>
    </div>
  );
};

export default ApiErrorMessage;
