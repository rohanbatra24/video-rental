import React, { useState, useEffect } from 'react';
import Input from './common/input';
import Joi from 'joi-browser';
import { getMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

export default function NewMovieForm(props) {
	const [ movieDetails, setMovieDetails ] = useState({ title: '', genre: '', numberInStock: 0, rate: 0 });
	const [ genres, setGenres ] = useState([]);
	const [ errors, setErrors ] = useState({});

	const movieId = props.match.params.id;

	useEffect(
		() => {
			if (movieId !== 'new') {
				const movie = getMovie(movieId);
				if (!movie) {
					return props.history.replace('/not-found');
				}
				setMovieDetails(movie);
				console.log('movie', movie);
			}
			setGenres(getGenres());
		},
		[ movieId ]
	);

	const schema = {
		title         : Joi.string().required().label('Title'),
		genre         : Joi.string().min(5).required().label('Genre'),
		numberInStock : Joi.number().min(0).max(100).required().label('Number in Stock'),
		rate          : Joi.number().required().min(0).max(10).label('Rate')
	};

	const validate = () => {
		const result = Joi.validate(movieDetails, schema, { abortEarly: false });
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

		props.history.push('/movies');

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

		const movieDetailsCopy = { ...movieDetails };

		movieDetailsCopy[e.currentTarget.name] = e.currentTarget.value;

		setErrors(errorsCopy || {});
		setMovieDetails(movieDetailsCopy);

		//call server
	};

	return (
		<div>
			<h1>Movie Form</h1>

			<form onSubmit={(event) => handleSubmit(event)}>
				<Input
					value={movieDetails.title}
					name="title"
					label="Title"
					onChange={handleChange}
					errors={errors.title}
					type="text"
				/>
				<div className="form-group">
					<label htmlFor="genre">Genre</label>
					<select
						className="form-control"
						value={movieDetails.genre.name}
						name="genre"
						label="Genre"
						onChange={handleChange}
						errors={errors.genre}
						type="text"
					>
						{genres.map((genre) => <option value={genre.name}>{genre.name}</option>)}
					</select>
					{errors.length && <div className="alert alert-danger">{errors[0]}</div>}
				</div>

				<Input
					value={movieDetails.numberInStock}
					name="numberInStock"
					label="Number in Stock"
					onChange={handleChange}
					errors={errors.numberInStock}
					type="number"
				/>
				<Input
					value={movieDetails.rate}
					name="rate"
					label="Rate"
					onChange={handleChange}
					errors={errors.rate}
					type="number"
				/>
				<button disabled={validate()} className="btn btn-primary">
					Save
				</button>
			</form>
		</div>
	);
}
