export const validateUserRegistration = (values) => {
	const errors = {};
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	console.log('line 4', values)
	if (!values.username) {
        errors.username = 'Required';
    } else if (!re.test(values.username)) {
		errors.username = 'Provide a valid email.';
	};

	if (!values.first_name || values.first_name.length == 0) {
        errors.first_name = 'Required';
    };
	if (!values.last_name || values.last_name.length == 0) {
        errors.last_name = 'Required';
    };
	if (!values.password) {
        errors.password = 'Required';
    };
	if (!values.password2) {
        errors.password2 = 'Required';
	};
	if (values.password && values.password2 &&  values.password != values.password2) {
		errors.password2 = 'Retype Password must match Passowrd';
	}

	if(!values.toggle) {
		errors.terms = "Required"
	}
	console.log(errors)
	return errors

}