import React from 'react';

export default function Input(props) {
	return (
		<div className="form-group">
			<label htmlFor={props.name}>{props.label}</label>
			<input
				value={props.value}
				name={props.name}
				id={props.name}
				className="form-control"
				onChange={props.onChange}
				type={props.type}
			/>
			{props.errors && <div className="alert alert-danger">{props.errors}</div>}
		</div>
	);
}
