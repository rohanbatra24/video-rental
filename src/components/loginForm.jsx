import React, { useState, useEffect } from 'react';
import Input from './common/input';

export default function LoginForm() {
	const [ user, setUser ] = useState({ username: '', password: '' });
	const [ errors, setErrors ] = useState({});

	const validate = () => {
		const errors = {};

		if (user.username.trim() === '') {
			errors.username = 'Username is required.';
		}

		if (user.password.trim() === '') {
			errors.password = 'Password is required.';
		}

		return Object.values(errors).length === 0 ? null : errors;
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const errors = validate();

		console.log('errors', errors);

		setErrors(errors);

		if (errors) return;

		//call server
		// console.log(user);
	};

	return (
		<div>
			<h1>Login</h1>

			<form onSubmit={handleSubmit}>
				<Input
					value={user.username}
					name="username"
					label="Username"
					onChange={(event) => setUser({ ...user, username: event.target.value })}
					errors={errors.username}
				/>

				<Input
					value={user.password}
					name="password"
					label="Password"
					onChange={(event) => setUser({ ...user, password: event.target.value })}
					errors={errors.password}
				/>
				<button className="btn btn-primary">Login</button>
			</form>
		</div>
	);
}
