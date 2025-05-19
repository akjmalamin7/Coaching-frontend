import React, { ChangeEvent, FocusEvent } from "react";
import Text from "../text";
export interface SelectOption {
  value: string;
  label: string;
}
export interface SelectProps {
  label?: string;
  name?: string;
  value?: string;
  radius?: "sm" | "md" | "lg";
  color?: "dark" | "light";
  bgColor?: "dark" | "light" | "transparent" | "theme";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  onFocus?: (event: FocusEvent<HTMLSelectElement>) => void;
  options?: SelectOption[];
}

const Select = (
  {
    bgColor = "transparent",
    className,
    color = "dark",
    isLoading,
    label,
    name,
    onChange,
    onFocus,
    radius = "sm",
    size = "lg",
    value,
    options = [],
  }: SelectProps,
  ref: React.Ref<HTMLSelectElement>
) => {
  const colorClasses = {
    dark: "text-gray-900",
    light: "h-[30px] xl:h-[38px] text-[14px]",
  }[color];

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
    dark: "bg-gray-700 border-gray-600 text-white ",
    light: "bg-gray-50 border border-gray-300 text-gray-900 ",
    transparent: "",
    theme:
      "bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white  ",
  }[bgColor];

  const finalSelectClasses = `w-full px-[10px] outline-none ${roundClasses} ${sizeClasses} ${bgClasses} ${colorClasses} ${className}`;

  return (
    <div className="w-full">
      {label && (
        <Text className="mb-[8px]">
          <label htmlFor={name}>{label}</label>
        </Text>
      )}
      <div className="relative w-full">
        <select
          id={name}
          name={name}
          value={value}
          disabled={isLoading}
          onChange={onChange}
          onFocus={onFocus}
          ref={ref}
          className={finalSelectClasses}
        >
          {options.map((opt) => (
            <option className="text-gray-950" key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

Select.displayName = "Select";

export default React.forwardRef(Select);
