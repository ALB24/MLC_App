import React, { Component } from 'react';


export default class Collections extends Component {
	render () {
		return (
			<div className="container-fluid">
      <div className="row welcome text-center padding">
        <div className="col-12">
          <hr className="dark" />
          <h1 className="display-4"> Collections </h1>
          <hr className="dark"/>
        </div>
        <div className="col-6">
          {/* <img src={} className="img-fluid" /> */}
        </div>
				<div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl10">
          <p className="lead">Writting something to fill this space out for now on the Jumbotron</p>
        </div>
      </div>
			</div>
		);
	}
}