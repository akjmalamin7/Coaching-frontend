import { ChangeEvent, FocusEvent, KeyboardEvent } from "react";

export interface InputProps {
  label?: string;
  name?: string;
  value?: string;
  type?: "text" | "email" | "password" | "number" | "file";
  radius?: "sm" | "md" | "lg";
  color?: "dark" | "light";
  bgColor?: "dark" | "light" | "transparent" | "theme";
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  className?: string;
  errorMessage?: string;
  disabled?: boolean;
  readonly?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}
