import React from "react";
import Text from "../text";

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  id = "checkbox",
  name,
  value,
}) => {
  return (
    <div className="inline-flex items-center space-x-2">
      <label htmlFor={id} className="relative flex items-center cursor-pointer">
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={`peer h-5 w-5 cursor-pointer appearance-none rounded border transition-all duration-200 
            ${
              disabled
                ? "border-gray-300 bg-gray-200 cursor-not-allowed"
                : "border-slate-300 hover:shadow-md"
            } 
            checked:bg-blue-600 checked:border-blue-600`}
        />
        <span className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            />
          </svg>
        </span>
      </label>
      {label && (
        <label
          htmlFor={id}
          className={`select-none ${disabled ? "text-gray-400" : "text-slate-800"}`}
        >
          <Text
            size="md"
            fontWeight="regular"
            color="theme-gray"
            className={`${disabled ? "opacity-65" : "opacity-100"}`}
          >
            {label}
          </Text>
        </label>
      )}
    </div>
  );
};

export default Checkbox;
