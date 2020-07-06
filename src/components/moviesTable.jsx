import React from 'react';

import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';

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
			<TableHeader handleSort={handleSort} columns={columns} sortColumn={sortColumn} />
			<TableBody data={movies} onLike={onLike} onDelete={onDelete} />
		</table>
	);
}
