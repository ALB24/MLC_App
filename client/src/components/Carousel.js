import React, { Component } from 'react';
// import Harvest1 from '../imges/Harvest1_600x.jpg';
// import Harvest2 from '../imges/HarvestChocolates2_600x.png';
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
          <li data-target="#slides" data-slide-to="3"></li>
          <li data-target="#slides" data-slide-to="4"></li>
        </ul>

        {/* <!-- Wrapper for slides --> */}
				<div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img src={`http://prettypinktulips.com/wp-content/uploads/2017/01/you_rock_blue_500x500_inbox.jpg`} />
            <div className="carousel-caption">
              <h1 className="display-2">Something to say</h1>
              <h3>Check it out</h3>
              <button type="button" className="btn btn-outline-secondary btn-lg">Click Here</button>
              <button type="button" className="btn btn-primary btn-lg">Lets Go</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={`http://prettypinktulips.com/wp-content/uploads/2017/01/popchampagne_retouch_500x500.jpg`} />
          </div>
          <div className="carousel-item">
            <img src={`http://prettypinktulips.com/wp-content/uploads/2017/01/youre_the_bomb_500x500_1_.jpg`} />
          </div>
          <div className="carousel-item">
            <img src={`http://prettypinktulips.com/wp-content/uploads/2017/01/youre_the_bomb_500x500_1_.jpg`} />
          </div>
          <div className="carousel-item">
            <img src={`http://prettypinktulips.com/wp-content/uploads/2017/01/youre_the_bomb_500x500_1_.jpg`} />
          </div>
        </div>

        {/* <!-- Left and right controls --> */}
        <a class="left carousel-control" href="#slides" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#slides" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>

			</div>
		);
	}
}