import useValidPassword from "@/shared/hooks/useValidPassword";
import { useEffect, useState } from "react";

interface Props {
  password?: string;
  viewMode?: "list" | "range";
}

const PasswordRules = ({ password = "", viewMode = "range" }: Props) => {
  const { hasCapital, hasMinLength, hasNumber, hasSpecialChar, isValid } = useValidPassword(password);
  const validCount = [hasCapital, hasMinLength, hasNumber, hasSpecialChar].filter(Boolean).length;

  const [strengthArray, setStrengthArray] = useState<number[]>([]);

  useEffect(() => {
    if (validCount === 0) {
      setStrengthArray([]);
    } else {
      setStrengthArray((prev) => {
        const newArr = [...prev];
        newArr[validCount - 1] = validCount;
        return newArr.slice(0, validCount);
      });
    }
  }, [validCount]);

  // If all rules are satisfied, do not render anything
  if (isValid) return null;
  const checkMark = (valid: boolean) =>
    valid ? <span className="text-green-600">✓</span> : <span className="text-red-500">✗</span>;
  let view;
  switch (viewMode) {
    case "range":
      return (view = (
        <div className="grid grid-cols-4 bg-gray-50 rounded-2xl overflow-hidden">
          {[1, 2, 3, 4].map((count, index) => (
            <div key={index}>
              <div
                className={`h-[4px] transition-all duration-300 ${
                  strengthArray[index] ? "w-[100%] bg-green-700" : "w-[0px]"
                }`}
              ></div>
            </div>
          ))}
        </div>
      ));
    case "list":
      return (view = (
        <div className="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
          <p className="font-semibold">Password Requirement</p>
          <ul className="list-disc list-inside space-y-0.5 mt-2">
            <li className="text-[12px]">
              {checkMark(hasSpecialChar)} One special character (<code>! @ # $ % ^ & * ( ) - _ = +</code>)
            </li>
            <li className="text-[12px]">{checkMark(hasMinLength)} Minimum 8 characters</li>
            <li className="text-[12px]">{checkMark(hasNumber)} At least 1 number</li>
            <li className="text-[12px]">{checkMark(hasCapital)} At least 1 capital letter</li>
          </ul>
        </div>
      ));
    default:
      return (view = (
        <div className="grid grid-cols-4 bg-gray-50 rounded-2xl overflow-hidden">
          {[1, 2, 3, 4].map((count, index) => (
            <div key={index}>
              <div
                className={`h-[4px] transition-all duration-300 ${
                  strengthArray[index] ? "w-[100%] bg-green-700" : "w-[0px]"
                }`}
              ></div>
            </div>
          ))}
        </div>
      ));
  }

  return <>{view}</>;
};

export default PasswordRules;
