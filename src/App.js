import React, { Fragment } from 'react';
import './App.css';
import Movies from './components/movies';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/common/navBar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import MovieForm from './components/movieForm';

import NotFound from './components/common/notFound';

function App() {
	return (
		<Fragment>
			<NavBar />
			<main className="container">
				<Switch>
					<Route path="/customers" component={Customers} />
					<Route path="/rentals" component={Rentals} />
					<Route path="/movies/:id" component={MovieForm} />
					<Route path="/movies" exact component={Movies} />
					<Route path="/not-found" component={NotFound} />
					<Redirect from="/" exact to="/movies" />
					<Redirect to="/not-found" />
				</Switch>
			</main>
		</Fragment>
	);
}

export default App;
