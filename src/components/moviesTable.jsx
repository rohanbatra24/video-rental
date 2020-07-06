import React from 'react';
import Like from './common/like';

export default function MoviesTable({ movies, sortColumn, onLike, onDelete, onSort, handleSort }) {
	const raiseSort = (column) => {
		if (column === sortColumn.column && sortColumn.order === 'asc') {
			handleSort({ column, order: 'desc' });
		}
		else {
			handleSort({ column, order: 'asc' });
		}
	};

	return (
		<table className="table">
			<thead>
				<tr>
					<th onClick={() => raiseSort('title')} scope="col">
						Title
					</th>
					<th onClick={() => raiseSort('genre.name')} scope="col">
						Genre
					</th>
					<th onClick={() => raiseSort('numberInStock')} scope="col">
						Stock
					</th>
					<th onClick={() => raiseSort('dailyRentalRate')} scope="col">
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
