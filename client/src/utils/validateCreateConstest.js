export const validateCreateConstest = (values) => {
	const errors = {};
	console.log('line 3', values)
	if (!values.name) {
        errors.name = 'Required';
    }
	if (!values.type || values.type.length == 0) {
        errors.type = 'Required';
    };
	if (!values.cost || values.cost.length == 0) {
        errors.cost = 'Required';
    } else if (isNaN(values.cost)) {
        errors.cost = 'Cost requires a number.';
    }
	if (!values.max_contenstants || values.max_contenstants.length == 0) {
        errors.max_contenstants = 'Required';
    } else if (isNaN(values.max_contenstants)) {
        errors.max_contenstants = 'Max contestants requires a number.';
    }


	if (values.is_private !== false && values.is_private !== true) {
        errors.is_private = 'Required';
    };

	if(values.terms !== true) {
		errors.terms = "Please agree to terms."
	}
	console.log(errors)
	return errors

}