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

	const renderSortIcon = (column) => {
		if (column.path !== sortColumn.column) {
			return null;
		}

		if (sortColumn.order === 'asc') {
			return <i className="fa fa-sort-asc" />;
		}
		else {
			return <i className="fa fa-sort-desc" />;
		}
	};

	return (
		<thead>
			<tr>
				{columns.map((column) => {
					return (
						<th
							className="clickable"
							key={column.path || column.key}
							onClick={() => raiseSort(column.path)}
						>
							{column.label} {renderSortIcon(column)}
						</th>
					);
				})}
			</tr>
		</thead>
	);
}
