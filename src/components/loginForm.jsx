import React, { useState, useEffect } from 'react';
import Input from './common/input';
import Joi from 'joi-browser';

export default function LoginForm() {
	const [ user, setUser ] = useState({ username: '', password: '' });
	const [ errors, setErrors ] = useState({});

	const schema = {
		username : Joi.string().required().label('Username'),
		password : Joi.string().required().label('Password')
	};

	const validate = () => {
		const result = Joi.validate(user, schema, { abortEarly: false });
		const errors = {};

		if (!result.error) return null;

		for (let error of result.error.details) {
			errors[error.path[0]] = error.message;
		}

		return errors;
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const errors = validate();

		setErrors(errors || {});

		if (errors) return;

		//call server
	};

	const validateProperty = (name, value) => {
		const obj = { [name]: value };

		const subSchema = {
			[name] : schema[name]
		};

		const error = Joi.validate(obj, subSchema);

		if (!error.error) return null;
		return error.error.details[0].message;
	};

	const handleChange = (e) => {
		const errorsCopy = { ...errors };

		const errorMessage = validateProperty(e.currentTarget.name, e.currentTarget.value);

		if (errorMessage) {
			errorsCopy[e.currentTarget.name] = errorMessage;
		}
		else delete errorsCopy[e.currentTarget.name];

		const userCopy = { ...user };

		userCopy[e.currentTarget.name] = e.currentTarget.value;

		setErrors(errorsCopy || {});
		setUser(userCopy);

		//call server
	};

	return (
		<div>
			<h1>Login</h1>

			<form onSubmit={(event) => handleSubmit(event)}>
				<Input
					value={user.username}
					name="username"
					label="Username"
					onChange={handleChange}
					errors={errors.username}
				/>

				<Input
					value={user.password}
					name="password"
					label="Password"
					onChange={handleChange}
					errors={errors.password}
				/>
				<button disabled={validate()} className="btn btn-primary">
					Login
				</button>
			</form>
		</div>
	);
}
