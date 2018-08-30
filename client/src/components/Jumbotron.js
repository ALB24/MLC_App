import React, { Component } from 'react';


export default class Jumbotron extends Component {
	render () {
		return (
			<div className="container-fluid">
      <div className="row jumbotron">
				<div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl10">
          <p className="lead">Writting something to fill this space out for now on the Jumbotron</p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
          <a href="#">
            <button type="button" className="btn btn-outline-secondary btn-lg"> Web Hosting btn</button>
          </a>
        </div>
      </div>
			</div>
		);
	}
}