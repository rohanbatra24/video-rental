import React, { useState, useEffect } from 'react';
import MoviesTable from './moviesTable';

import Pagination from './common/pagination';
import Filter from './common/filter';
import _ from 'lodash';

import { paginate } from '../utils/paginate';

import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

export default function Movies() {
	const [ movies, setMovies ] = useState([]);
	const [ genres, setGenres ] = useState([]);
	const [ pageSize, setPageSize ] = useState({ pageSize: 4 });
	const [ currPage, setCurrPage ] = useState(1);
	const [ selectedGenre, setSelectedGenre ] = useState('');
	const [ sortColumn, setSortColumn ] = useState({ column: 'title', order: 'asc' });

	useEffect(() => {
		const genres = [ { name: 'All Genres' }, ...getGenres() ];
		setGenres(genres);
		setMovies({ movieList: getMovies() });
	}, []);

	const handleSort = (columnObj) => {
		setSortColumn(columnObj);
	};

	const handleFilter = (genre) => {
		setCurrPage(1);
		setSelectedGenre(genre);
	};

	const handlePageChange = (page) => {
		setCurrPage(page);
	};

	const onDelete = (id) => {
		const filteredMovies = movies.movieList.filter((movie) => {
			return movie._id !== id;
		});

		setMovies({ movieList: filteredMovies });
	};

	const onLike = (movie) => {
		const moviesCopy = [ ...movies.movieList ];

		const index = moviesCopy.indexOf(movie);

		moviesCopy[index] = { ...moviesCopy[index] };

		moviesCopy[index].liked = !moviesCopy[index].liked;

		setMovies({ movieList: moviesCopy });
	};

	if (!movies.movieList || movies.movieList.length === 0) {
		return <p>There are no movies in the database.</p>;
	}

	const filtered =
		selectedGenre && selectedGenre._id
			? movies.movieList.filter((movie) => movie.genre.name === selectedGenre.name)
			: movies.movieList;

	const sorted = _.orderBy(filtered, [ sortColumn.column ], [ sortColumn.order ]);

	const moviesPaginated = paginate(sorted, pageSize.pageSize, currPage);

	return (
		<div className="row">
			<div className="col-3">
				<Filter onFilterClick={handleFilter} items={genres} selectedItem={selectedGenre} />
			</div>
			<div className="col">
				<h1>Showing {filtered.length} movies in the database</h1>
				<MoviesTable
					movies={moviesPaginated}
					onDelete={onDelete}
					onLike={onLike}
					onSort={handleSort}
					handleSort={handleSort}
					sortColumn={sortColumn}
				/>
				<Pagination
					itemsCount={filtered.length}
					pageSize={pageSize.pageSize}
					onPageChange={handlePageChange}
					currPage={currPage}
				/>
			</div>
		</div>
	);
}
