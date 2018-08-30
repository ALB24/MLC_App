import React, { Component } from 'react';

import YouRock from '../imges/you_rock.jpg';
import Rocks from '../imges/you-rock-chocolates.png';
import PinkRocks from'../imges/YouRockPinkwithLovebanner.jpg';
import MLCDesk from '../imges/MLCDesk.jpg';
import mlcLogo from '../imges/MLClogo.png';


export default class Carousel extends Component {
	render () {
		return (
			<div id="slides" className="carousel slide" data-ride="carousel">
        {/* <!-- Indicators --> */}
        <ul className="carousel-indicators">
          <li data-target="#slides" data-slide-to="0" className="active"></li>
          <li data-target="#slides" data-slide-to="1"></li>
          <li data-target="#slides" data-slide-to="2"></li>
        </ul>

        {/* <!-- Wrapper for slides --> */}
				<div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img className="col-12" src={MLCDesk} />
            <div className="carousel-caption">
              <h1 className="display-2">Legendary Austin Confections</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img className="col-6" src={PinkRocks} />
            <img className="col-6" src={YouRock} />
            <div className="carousel-caption">
              <h3>Pre-Order Now</h3>
              <button type="button" className="btn btn-info btn-lg">Click Here</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Rocks} />
            <div className="carousel-caption">
                <h3>Check Out Our Collections</h3>
            </div>
          </div>
        </div>

        {/* <!-- Left and right controls --> */}
        <a className="carousel-control-prev" href="#slides" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#slides" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

			</div>
		);
	}
}