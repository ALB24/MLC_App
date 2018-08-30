import React, { Component } from 'react';


export default class AboutUs extends Component {
	render () {
		return (
			<div className="container-fluid padding">
      <div className="row welcome text-center">
        <div className="col-12">
          <h1 className="display-4"> About Us </h1>
        </div>
        <hr/>
        <div className="col-12">
          <p className="lead">
            Handcrafted confections combining nostalgic flavors, modern design, and meaningful bespoke details. Made in Austin and packed with personality, our gourmet chocolates and candies are gifting perfection.
          </p>
        </div>
      </div>	
			</div>
		);
	}
}