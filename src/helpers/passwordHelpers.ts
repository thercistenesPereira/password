export const validPassword = 'valid-password-check';
const invalidPassword = 'invalid-password-check';

export const getPasswordLengthClassName = (senha: string): string => {
  const lengthString = senha.trim().length;
  return lengthString >= 8 && lengthString <= 16 ? validPassword : invalidPassword;
};

export const getPasswordCharactersClassName = (senha: string): string => {
  const containsLettersAndNumbers = /^(?=.*[A-Za-z])(?=.*\d)/.test(senha);
  return containsLettersAndNumbers ? validPassword : invalidPassword;
};

export const getPasswordSpecialCharacterClassName = (senha: string): string => {
  const containsSpecialCharacter = /[@$!%*#?&]/.test(senha);
  return containsSpecialCharacter ? validPassword : invalidPassword;
};
