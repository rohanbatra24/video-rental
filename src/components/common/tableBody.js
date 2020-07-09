import React from 'react';
import Like from './like';
import { Link } from 'react-router-dom';

export default function TableHeader({ data, onLike, onDelete }) {
	return (
		<tbody>
			{data.map((item) => {
				return (
					<tr key={item._id}>
						<th scope="row">
							<Link to={`/movies/${item._id}`}>{item.title}</Link>
						</th>
						<td>{item.genre.name}</td>
						<td>{item.numberInStock}</td>
						<td>{item.dailyRentalRate}</td>
						<td>
							<Like liked={item.liked} onLike={onLike} item={item} />
						</td>

						<td>
							<button onClick={() => onDelete(item._id)} key={item._id} className="btn btn-danger btn-sm">
								Delete
							</button>
						</td>
					</tr>
				);
			})}
		</tbody>
	);
}
