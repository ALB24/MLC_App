import React, { Component } from 'react';

export default class SocialMedia extends Component {
	render () {
		return (
			<div className="container-fluid padding">
      <div className="row text-center padding">
        <div className="col-12">
          <hr className="dark" />
          <h2 className="display-4"> Follow Us </h2>
          <hr className="dark" />
        </div>
        <hr />
        <div className="col-12 social padding">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-pinterest"></i></a>
        </div>
      </div>	
			</div>
		);
	}
}