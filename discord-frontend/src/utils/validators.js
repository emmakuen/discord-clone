export const validateLoginForm = ({ email, password }) => {
  return validateEmail(email) && validatePassword(password);
};

export const validateRegisterForm = ({ email, username, password }) => {
  return (
    validateEmail(email) &&
    validatePassword(password) &&
    validateUsername(username)
  );
};

export const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

const validatePassword = (password) => {
  return password.length >= 6 && password.length <= 20;
};

const validateUsername = (username) => {
  return username.length >= 3 && username.length <= 12;
};
