import React, { Component } from 'react';
import mlcLogo from '../imges/MLClogo.png';
import shopping_cart from '../imges/shoppingCart.png';
import account_icon from '../imges/accountPersonSmall.png';

export default class Nav extends Component {
	render () {
		return (
			<div>

				<nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
					<div className="container-fluid">
						<a className="navbar-brand" href="#"> 
							{/* <strong>MAGGIE</strong> LOUISE <strong>CONFECTIONS</strong> */}
							<img className="logoImg" src={mlcLogo} />
						</a>
						<div className="nav navbar-nav navbar-right">
							<span className="nav-item">PHONE ORDERS: (888) 886-2342</span>
							{/* <ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<span clsssName="nav-top-link"><a className="nav-link" href="#"><img src={shopping_cart} /> Cart</ a></span>
								</li>
								<li className="nav-item">
									<span clsssName="nav-top-link"><a className="nav-link" href="#"><img src={account_icon} /> Your Account</ a></span>
								</li>
							</ul> */}
						</div>
					</div>
				</nav>

				<nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
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

									{/* <li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Seasonal</a>
										<div className="dropdown-menu" x-placement="bottom-start">
											<a className="dropdown-item" href="#">Autumn</a>
											<a className="dropdown-item" href="#">Back to School</a>
											<a className="dropdown-item" href="#">Holloween</a>
											<a className="dropdown-item" href="#">Thanksgiving</a>
										</div>
									</li>
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Moments</a>
										<div className="dropdown-menu" x-placement="bottom-start">
											<a className="dropdown-item" href="#">Birthdays</a>
											<a className="dropdown-item" href="#">Congrats</a>
											<a className="dropdown-item" href="#">Something else here</a>
										</div>
									</li>
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">A Gift For</a>
										<div className="dropdown-menu" x-placement="bottom-start">
											<a className="dropdown-item" href="#">Action</a>
											<a className="dropdown-item" href="#">Another action</a>
											<a className="dropdown-item" href="#">Something else here</a>
										</div>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">Corporate Gifting</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">Shop All</a>
									</li> */}
								</ul>
							</div>
						</div>

						<div className="nav navbar-nav navbar-right">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<span clsssName="nav-top-link"><a className="nav-link" href="#"><img src={shopping_cart} /> Cart </ a></span>
								</li>
								<li className="nav-item">
									<span clsssName="nav-top-link"><a className="nav-link" href="#"><img src={account_icon} /> Login </ a></span>
								</li>
							</ul>
						</div> 

					</div>
				</nav>

			</div>
		);
	}
}