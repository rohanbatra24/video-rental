import React from 'react';

export default function TableHeader() {
	return (
		<thead>
			<tr>
				{props.columns.map((column) => {
					return <th>{column.label}</th>;
				})}
			</tr>
		</thead>
	);
}
