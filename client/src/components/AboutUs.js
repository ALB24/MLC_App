import React, { Component } from 'react';

import Entrance from '../imges/entrance.jpeg';


export default class AboutUs extends Component {
	render () {
		return (
			<div className="container-fluid padding">
      <div className="row jumbotron welcome text-center padding">
        <div className="col-12">
          <hr className="dark" />
          <h1 className="display-4"> About Us </h1>
          <hr className="dark"/>
        </div>
        <hr />
        <div className="col-6">
          <img src={Entrance} className="img-fluid" />
        </div>
        <div className="col-6">
          <p className="lead text-left">
            Handcrafted confections combining nostalgic flavors, modern design, and meaningful bespoke details. Made in Austin and packed with personality, our gourmet chocolates and candies are gifting perfection.
          </p>
          <br />
          <a href="#" className="btn btn-primary">More...</a>
        </div>
      </div>	
			</div>
		);
	}
}