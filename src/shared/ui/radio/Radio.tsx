import clsx from "clsx";
import React from "react";
import Text from "../text";

interface RadioProps {
  label: string;
  name: string;
  id: string;
  value?: string | number;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

const Radio: React.FC<RadioProps> = ({
  label,
  name,
  id,
  value,
  checked,
  onChange,
  disabled,
  className,
}) => {
  return (
    <div className="inline-flex items-center">
      <label className="relative flex items-center cursor-pointer" htmlFor={id}>
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={clsx(
            "peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300",
            "checked:border-slate-400 transition-all",
            disabled && "cursor-not-allowed opacity-50",
            className
          )}
        />
        <span
          className={clsx(
            "absolute bg-slate-800 w-3 h-3 rounded-full opacity-0",
            "peer-checked:opacity-100 transition-opacity duration-200",
            "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          )}
        />
      </label>
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
    </div>
  );
};

export default Radio;
