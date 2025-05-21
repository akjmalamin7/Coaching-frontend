// utils/validatePassword.ts
export const validatePassword = (password: string = "") => {
  const hasSpecialChar = /[!@#$%^&*()\-_+=]/.test(password);
  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasCapital = /[A-Z]/.test(password);

  return {
    hasSpecialChar,
    hasMinLength,
    hasNumber,
    hasCapital,
    isValid: hasSpecialChar && hasMinLength && hasNumber && hasCapital,
  };
};
