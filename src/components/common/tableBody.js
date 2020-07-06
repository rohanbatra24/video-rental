import React from 'react';
import Like from './like';

export default function TableHeader({ movies, onLike, onDelete }) {
	return (
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
	);
}
