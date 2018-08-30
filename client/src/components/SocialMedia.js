import React, { Component } from 'react';

export default class SocialMedia extends Component {
	render () {
		return (
			<div className="container-fluid padding">
      <div className="row welcome text-center padding">
        
        <div className="col-12">
          <hr className="dark"/>
          <h1 className="display-4"> Follow Us </h1>
          <hr className="dark"/>
        </div>

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