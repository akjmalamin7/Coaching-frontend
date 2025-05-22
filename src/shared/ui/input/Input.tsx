import { forwardRef } from "react";
import Text from "../text";
import { InputProps } from "./input.model";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      value,
      type = "text",
      size = "lg",
      radius = "sm",

      bgColor = "transparent",
      placeholder = "",
      isLoading = false,
      className = "",
      errorMessage,
      disabled,
      readonly,
      onChange,
      onInput,
      onBlur,
      onFocus,
      onClear,
      onKeyDown,
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "h-[30px] xl:h-[38px] text-[14px]",
      md: "h-[36px] xl:h-[44px] text-[14px]",
      lg: "h-[40px] xl:h-[50px] text-[14px]",
    }[size];
    const roundClasses = {
      sm: "rounded-[8px]",
      md: "rounded-[10px]",
      lg: "rounded-[12px]",
    }[radius];
    const bgClasses = {
      dark: "bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 ",
      light: "bg-gray-50 border border-gray-300 text-gray-900 ",
      transparent: "",
      theme:
        " bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white dark:placeholder:text-gray-400 focus:border focus:border-blue-700  dark:focus:border-gray-100",
    }[bgColor];
    const finalInputClasses = `outline-none w-full px-[10px] text-gray-100 ${roundClasses} ${sizeClasses} ${bgClasses} ${className}`;
    return (
      <div className="w-full">
        {label && (
          <Text className="mb-[8px]">
            <label htmlFor={name}>{label}</label>
          </Text>
        )}
        <div className="relative w-full">
          <input
            id={name}
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readonly}
            onChange={onChange}
            onInput={onInput}
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            ref={ref}
            className={finalInputClasses}
          />
          {onClear && (
            <button
              type="button"
              className="absolute top-1/2 right-[10px] transform -translate-y-1/2 text-[#74788D] hover:text-red-500"
              onClick={onClear}
            >
              ✕
            </button>
          )}
          {errorMessage && (
            <Text size="sm" className="text-red-500 mt-1 ml-1">
              {errorMessage}
            </Text>
          )}
        </div>
        {isLoading && <p className="mt-2 text-sm text-gray-500">Loading...</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
