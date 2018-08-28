import React, { Component } from 'react';


export default class Carousel extends Component {
	render () {
		return (
			<div id="slides" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#slides" data-slide-to="0" className="active"></li>
          <li data-target="#slides" data-slide-to="1"></li>
          <li data-target="#slides" data-slide-to="2"></li>
        </ul>
				<div className="carousel-inner">
          <div className="carousel-item active">
            {/* <img src={} /> */}
          </div>
          <div className="carousel-item">
            {/* <img src={} /> */}
          </div>
          <div className="carousel-item">
            {/* <img src={} /> */}
          </div>
        </div>
			</div>
		);
	}
}