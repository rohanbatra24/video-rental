import React from 'react';

import Table from './common/table';

export default function MoviesTable({ movies, sortColumn, onLike, onDelete, handleSort }) {
	const columns = [
		{ path: 'title', label: 'Title' },
		{ path: 'genre.name', label: 'Genre' },
		{ path: 'numberInStock', label: 'Stock' },
		{ path: 'dailyRentalRate', label: 'Rate' },
		{ key: 'like' },
		{ key: 'delete' }
	];

	return (
		<table className="table">
			<Table
				handleSort={handleSort}
				columns={columns}
				sortColumn={sortColumn}
				data={movies}
				onLike={onLike}
				onDelete={onDelete}
			/>
		</table>
	);
}
