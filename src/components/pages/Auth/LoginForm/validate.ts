const loginValidator = (values: any) => {
    const errors: any = {};
    // Email Validation
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    // Password Validation
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 7) {
        errors.password = 'min length 6'
    }

    return errors;
};

export default loginValidator;