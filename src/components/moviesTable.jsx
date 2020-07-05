import React from 'react';
import Like from './common/like';

export default function MoviesTable({ movies, onLike, onDelete, onSort }) {
	return (
		<table className="table">
			<thead>
				<tr>
					<th onClick={() => onSort('title')} scope="col">
						Title
					</th>
					<th onClick={() => onSort('genre.name')} scope="col">
						Genre
					</th>
					<th onClick={() => onSort('numberInStock')} scope="col">
						Stock
					</th>
					<th onClick={() => onSort('dailyRentalRate')} scope="col">
						Rate
					</th>
					<th scope="col" />
					<th scope="col" />
				</tr>
			</thead>
			<tbody>
				{movies.map((movie) => {
					return (
						<tr key={movie._id}>
							<th scope="row">{movie.title}</th>
							<td>{movie.genre.name}</td>
							<td>{movie.numberInStock}</td>
							<td>{movie.dailyRentalRate}</td>
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
	);
}
