import React, { Component } from 'react';
import mlcLogo from '../imges/MLClogo.png';
import shopping_cart from '../imges/shoppingCart.png';
import account_icon from '../imges/accountPersonSmall.png';

export default class Nav extends Component {
	render () {
		return (
			<div>

				<nav className="navbar navbar-expand-md navbar-light bg-light scrolling-navbar sticky-top">
					<div className="container-fluid">

						<a className="navbar-brand" href="#"> 
							<img className="logoImg" src={mlcLogo} />
						</a>

						<div className="nav navbar-nav navbar-right">
							<span className="nav-item">Phone Orders: (888) 886-2342</span>
						</div>

					</div>
				</nav>

				<nav className="navbar navbar-expand-md navbar-light bg-light scrolling-navbar sticky-top">
					<div className="container-fluid">

						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarResponsive">
							<div className="nav navbar-nav navbar-left">

								<ul className="navbar-nav ml-auto">
									<li className="nav-item">
										<a className="nav-link" href="#">HOME</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">PRODUCTS</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">ABOUT US</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">CONTACT US</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">CORPORATE GIFTING</a>
									</li>
								</ul>

							</div>
						</div>

						<div className="nav navbar-nav navbar-right">

							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<span className="nav-top-link"><a className="nav-link" href="#"><img src={shopping_cart} /> Cart </ a></span>
								</li>
								<li className="nav-item">
									<span className="nav-top-link"><a className="nav-link" href="#"><img src={account_icon} /> Login </ a></span>
								</li>
							</ul>
							
						</div> 

					</div>
				</nav>

			</div>
		);
	}
}