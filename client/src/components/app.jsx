import React, { Component } from 'react';
import Nav from './Nav';
import Carousel from './Carousel';

export default class App extends Component {
	render () {
		return (
			<div>
				<Nav />
				<Carousel />
			</div>
		);
	}
}