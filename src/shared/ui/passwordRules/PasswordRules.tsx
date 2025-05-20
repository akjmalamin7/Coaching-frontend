// PasswordRules.tsx

import useValidPassword from "@/shared/hooks/useValidPassword";

interface Props {
  password?: string;
}

const PasswordRules = ({ password = "" }: Props) => {
  const { hasCapital, hasMinLength, hasNumber, hasSpecialChar } = useValidPassword(password);
  const checkMark = (valid: boolean) =>
    valid ? <span className="text-green-600">✓</span> : <span className="text-red-500">✗</span>;

  return (
    <div className="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
      <p className="font-semibold">Password Requirement</p>
      <ul className="list-disc list-inside space-y-0.5 mt-2">
        <li className="text-[12px]">
          {checkMark(hasSpecialChar)} One special character (
          <code>! @ # $ % ^ & * ( ) - _ = +</code>)
        </li>
        <li className="text-[12px]">{checkMark(hasMinLength)} Minimum 8 characters</li>
        <li className="text-[12px]">{checkMark(hasNumber)} At least 1 number</li>
        <li className="text-[12px]">{checkMark(hasCapital)} At least 1 capital letter</li>
        <li className="text-[12px]">
          <span className="text-green-600">✓</span> Change it often
        </li>
      </ul>
    </div>
  );
};

export default PasswordRules;
