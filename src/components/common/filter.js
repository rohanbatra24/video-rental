import React from 'react';

export default function Filter({ onFilterClick, items, textProperty, valueProperty, selectedItem }) {
	const itemList = items.map((item) => {
		return (
			<li
				type="button"
				className={item.name === selectedItem ? 'list-group-item active' : 'list-group-item'}
				key={item[textProperty]}
				onClick={() => onFilterClick(item)}
			>
				{item[textProperty]}
			</li>
		);
	});

	return <ul className="list-group">{itemList}</ul>;
}

Filter.defaultProps = {
	textProperty  : 'name',
	valueProperty : '_id'
};
