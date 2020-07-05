import React from 'react';

import propTypes from 'prop-types';

export default function Pagination(props) {
	const renderPagination = () => {
		const arr = [];

		const pagesCount = Math.ceil(props.itemsCount / props.pageSize);

		if (pagesCount === 1) {
			return null;
		}

		for (let index = 1; index <= pagesCount; index++) {
			const classNames = props.currPage === index ? 'page-item active' : 'page-item';
			arr.push(
				<li key={index} className={classNames}>
					<a className="page-link" onClick={() => props.onPageChange(index)} href="#">
						{index}
					</a>
				</li>
			);
		}

		return arr;
	};

	return (
		<nav>
			<ul className="pagination">{renderPagination()}</ul>
		</nav>
	);
}

Pagination.propTypes = {
	itemsCount   : propTypes.number.isRequired,
	pageSize     : propTypes.number.isRequired,
	currPage     : propTypes.number.isRequired,
	onPageChange : propTypes.func.isRequired
};
