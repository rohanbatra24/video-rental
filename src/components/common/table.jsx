import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

export default function Table({ handleSort, columns, sortColumn, data, onLike, onDelete }) {
	return (
		<table className="table">
			<TableHeader handleSort={handleSort} columns={columns} sortColumn={sortColumn} />
			<TableBody data={data} onLike={onLike} onDelete={onDelete} />
		</table>
	);
}
