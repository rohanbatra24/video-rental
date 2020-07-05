import React, { Fragment, useState } from 'react';
import Like from './common/like';
import Pagination from './common/pagination';

import { paginate } from '../utils/paginate';

import { getMovies } from '../services/fakeMovieService';

export default function Movies() {
	const [ movies, setMovies ] = useState({ movieList: getMovies() });
	const [ pageSize, setPageSize ] = useState({ pageSize: 4 });
	const [ currPage, setCurrPage ] = useState(1);

	const handlePageChange = (page) => {
		setCurrPage(page);
	};

	const onDelete = (id) => {
		const filteredMovies = movies.movieList.filter((movie) => {
			return movie._id !== id;
		});

		setMovies({ movieList: filteredMovies });
	};

	const onLike = (movie) => {
		const moviesCopy = [ ...movies.movieList ];

		const index = moviesCopy.indexOf(movie);

		moviesCopy[index] = { ...moviesCopy[index] };

		moviesCopy[index].liked = !moviesCopy[index].liked;

		setMovies({ movieList: moviesCopy });
	};

	if (movies.movieList.length === 0) {
		return <p>There are no movies in the database.</p>;
	}

	return (
		<Fragment>
			<h1>Showing {movies.length} movies in the database</h1>

			<table className="table">
				<thead>
					<tr>
						<th scope="col">Title</th>
						<th scope="col">Genre</th>
						<th scope="col">Stock</th>
						<th scope="col">Rate</th>
						<th scope="col" />
						<th scope="col" />
					</tr>
				</thead>
				<tbody>
					{paginate(movies.movieList, pageSize.pageSize, currPage).map((movie) => {
						return (
							<tr key={movie._id}>
								<th scope="row">{movie.title}</th>
								<td>{movie.genre.name}</td>
								<td>{movie.numberInStock}</td>
								<td>@{movie.dailyRentalRate}</td>
								<td>
									<Like liked={movie.liked} onLike={onLike} movie={movie} />
								</td>

								<td>
									<button
										onClick={() => onDelete(movie._id)}
										key={movie._id}
										className="btn btn-danger btn-sm"
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<Pagination
				itemsCount={movies.movieList.length}
				pageSize={pageSize.pageSize}
				onPageChange={handlePageChange}
				currPage={currPage}
			/>
		</Fragment>
	);
}
