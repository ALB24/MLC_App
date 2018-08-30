import React, { Component } from 'react';

import BackToSchool from '../imges/backtoschool_600x.jpg';
import GatherBundle from '../imges/GatherBundle.png';
import TxBoots from '../imges/boot_scootin_texasyall_300x.jpg';
import Jewels from '../imges/ChocolateJewels2_300x.png';

export default class Trending extends Component {
	render () {
		return (
			<div className="container-fluid padding">
      <div className="row welcome text-center jumbotronpadding">

        <div className="col-12">
          <hr className="dark" />
          <h1 className="display-4"> Trending </h1>
          <hr className="dark" />
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="card">
            <img src={BackToSchool} />
            <div className="card-body">
              <h5>Back to School</h5>
              <p><strong>$25.00</strong></p>
              <a href="#" className="btn btn-outline-secondary">Shop</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card">
            <img src={GatherBundle}/>
            <div className="card-body">
              <h5>Gather Together Bundle</h5>
              <p><strong>$65.00</strong></p>
              <a href="#" className="btn btn-outline-secondary">Shop</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card">
            <img src={TxBoots}/>
            <div className="card-body">
              <h5>Boot Scootin' Sweets</h5>
              <p><strong>$38.00</strong></p>
              <a href="#" className="btn btn-outline-secondary">Shop</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card">
            <img src={Jewels}/>
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