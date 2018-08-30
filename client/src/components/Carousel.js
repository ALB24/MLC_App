import React, { Component } from 'react';
import Harvest1 from '../imges/Harvest1_600x.jpg';
import Harvest2 from '../imges/HarvestChocolates2_600x.png';
import YouRock from '../imges/you_rock.jpg';
import BlueRocks from '../imges/rocks.jpeg';
import account_icon from '../imges/accountPersonSmall.png';
import mlcLogo from '../imges/MLClogo.png';
import shopping_cart from '../imges/shoppingCart.png';


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
            <img className="d-block w-100" src={YouRock} />
            <div className="carousel-caption">
              <h1 className="display-2">Something to say</h1>
              <h3>Check it out</h3>
              <button type="button" className="btn btn-outline-secondary btn-lg">Click Here</button>
              <button type="button" className="btn btn-primary btn-lg">Lets Go</button>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={BlueRocks} />
          </div>
          <div className="carousel-item">
            <img className="img-responsive center-block" src={Harvest2} />
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