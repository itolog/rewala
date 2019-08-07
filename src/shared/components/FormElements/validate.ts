export const loginValidator = (values: any) => {
    const errors: any = {};
    // Email Validation
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.resetPasswordEmail) {
        errors.resetPasswordEmail = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.resetPasswordEmail)) {
        errors.resetPasswordEmail = 'Invalid email address'
    }


    // Password Validation
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 7) {
        errors.password = 'min length 6'
    }

    return errors;
};

export const changePasswordValidation = (values: any) => {
    const errors: any = {};
    // Password Validation
    if (!values.oldPassword) {
        errors.oldPassword = 'Required';
    }

    if (!values.newPassword) {
        errors.newPassword = 'Required';
    } else if (values.newPassword.length < 7) {
        errors.newPassword = 'min length 6'
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required';
    } else if (values.newPassword !== values.confirmPassword) {
        errors.confirmPassword = 'confirm password not correct';
    }

    return errors;
};
export const confirmCodeValidation = (values: any) => {
    const errors: any = {};
    if (!values.confirmPasswordCode) {
        errors.confirmPasswordCode = 'Required';
    }

    return errors;
};
