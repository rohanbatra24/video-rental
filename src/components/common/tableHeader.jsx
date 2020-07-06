import React from 'react';

export default function TableHeader({ handleSort, columns, sortColumn }) {
	const raiseSort = (column) => {
		if (column === sortColumn.column && sortColumn.order === 'asc') {
			handleSort({ column, order: 'desc' });
		}
		else {
			handleSort({ column, order: 'asc' });
		}
	};

	return (
		<thead>
			<tr>
				{columns.map((column) => {
					return (
						<th key={column.path || column.key} onClick={() => raiseSort(column.path)}>
							{column.label}
						</th>
					);
				})}
			</tr>
		</thead>
	);
}
