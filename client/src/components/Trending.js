import React, { Component } from 'react';

export default class Trending extends Component {
	render () {
		return (
			<div className="container-fluid padding">
      <div className="row welcome text-center padding">

        <div className="col-12">
          <h1 className="display-4"> Trending </h1>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="card">
            <image src={`https://cdn.shopify.com/s/files/1/0026/3245/0118/products/backtoschool_600x.jpg?v=1535495772`}/>
            <div className="card-body">
              <h5>Back to School</h5>
              <p><strong>$25.00</strong></p>
              <a href="#" className="btn btn-outline-secondary">Shop</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card">
            <image src={`https://cdn.shopify.com/s/files/1/0026/3245/0118/products/Screen_Shot_2018-08-24_at_4.17.20_PM_300x.png?v=1535145555`}/>
            <div className="card-body">
              <h5>Gather Together Bundle</h5>
              <p><strong>$65.00</strong></p>
              <a href="#" className="btn btn-outline-secondary">Shop</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card">
            <image src={`https://cdn.shopify.com/s/files/1/0026/3245/0118/products/boot_scootin_texasyall_png-_2_300x.jpg?v=1534360090`}/>
            <div className="card-body">
              <h5>Boot Scootin' Sweets</h5>
              <p><strong>$38.00</strong></p>
              <a href="#" className="btn btn-outline-secondary">Shop</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card">
            <image src={`https://cdn.shopify.com/s/files/1/0026/3245/0118/products/jewels_300x.jpg?v=1535495848`}/>
            <div className="card-body">
              <h5>Chocolate Jewels</h5>
              <p><strong>$25.00</strong></p>
              <a href="#" className="btn btn-outline-secondary">Shop</a>
            </div>
          </div>
        </div>
      </div>
			</div>
		);
	}
}