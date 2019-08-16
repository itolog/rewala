export const validator = (values: any) => {
  const errors: any = {};
  // Email Validation
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Password Validation
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 7) {
    errors.password = 'min length 6';
  }
  // confirm password
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'confirm password not correct';
  }
  // fullname
  if (!values.fullname) {
    errors.fullname = 'Required';
  }
  // phone
  if (values.phone_number && isNaN(Number(values.phone_number))) {
    errors.phone_number = 'Must be a number';
  } else if (values.phone_number && values.phone_number.length < 7) {
    errors.phone_number = 'min lenght 7';
  }
  return errors;
};
