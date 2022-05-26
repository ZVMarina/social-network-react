export const validateLoginForm = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if
    (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length <= 6) {
        errors.password = 'Must be longer than 6 characters';
    }
    return errors;
};

export const validateProfileDataForm = values => {
    const errors = {};
    if (!values.fullName) {
        errors.fullName = 'Required';
    }
    return errors;
};