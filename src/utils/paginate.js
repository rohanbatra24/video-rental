export const paginate = (data, pageSize, currPage) => {
	const filtered = data.filter((movie, i) => {
		return i < currPage * pageSize && i >= (currPage - 1) * pageSize;
	});

	return filtered;
};
