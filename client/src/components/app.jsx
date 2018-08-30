import React, { Component } from 'react';
import Nav from './Nav';
import Carousel from './Carousel';
import Jumbotron from './Jumbotron';
import AboutUs from './AboutUs';
import Trending from './Trending';

export default class App extends Component {
	render () {
		return (
			<div>
				<Nav />
				<Carousel />
				<Trending />
				<Jumbotron />
				<AboutUs />
			</div>
		);
	}
}