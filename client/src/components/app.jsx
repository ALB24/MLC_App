import React, { Component } from 'react';
import Nav from './Nav';
import Carousel from './Carousel';
import Collections from './Collections';
import AboutUs from './AboutUs';
import Trending from './Trending';
import SocialMedia from './SocialMedia';
import Footer from './Footer';

export default class App extends Component {
	render () {
		return (
			<div>
				<Nav />
				<Carousel />
				<Trending />
				<Collections />
				<AboutUs />
				<SocialMedia />
				<Footer />
			</div>
		);
	}
}