import React from 'react';

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
					<a className="page-link" onClick={() => props.onPageChange(index)}>
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
