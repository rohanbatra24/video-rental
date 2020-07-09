import React from 'react';

export default function MovieForm(props) {
	return (
		<div>
			<h1>Movie Form</h1>
			<h2>{props.match.params.id}</h2>

			<button className="btn btn-primary" onClick={() => props.history.push('/movies')}>
				Save
			</button>
		</div>
	);
}
