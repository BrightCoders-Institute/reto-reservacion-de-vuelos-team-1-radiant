export const firstNameValidation = (firstName, setErrorFirstName) => {
  if (!firstName) {
    setErrorFirstName('First Name is required');
    return false;
  } else {
    setErrorFirstName('');
    return true;
  }
};

export const emailValidation = (email, setErrorEmail) => {
  if (!email) {
    setErrorEmail('Email is required');
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    setErrorEmail('Please enter a valid email address');
    return false;
  }

  setErrorEmail('');
  return true;
};

export const passwordValidation = (password, setErrorPassword) => {
  if (!password) {
    setErrorPassword('Password is required');
    return false;
  }

  const passwordPattern =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,}$/;
  if (!passwordPattern.test(password)) {
    setErrorPassword('Password format invalid');
    return false;
  }
  //Rest of password validations

  setErrorPassword('');
  return true;
};

export const agree1Validation = (agree1, setErrorAgree1) => {
  if (!agree1) {
    setErrorAgree1('You must agree to the Terms and Privacy Policy');
    return false;
  }

  setErrorAgree1('');
  return true;
};
