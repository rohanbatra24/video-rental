import React from 'react';
import Like from './like';

export default function TableHeader({ data, onLike, onDelete }) {
	return (
		<tbody>
			{data.map((item) => {
				return (
					<tr key={item._id}>
						<th scope="row">{item.title}</th>
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
