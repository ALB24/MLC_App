import React, { Component } from 'react';

import NutsAndBolts from '../imges/nutsAndBolts.jpg';
import GatherBundle from '../imges/GatherBundle.png';
import TxBoots from '../imges/boot_scootin_texasyall_300x.jpg';
import Jewels from '../imges/ChocolateJewels2_300x.png';

export default class Trending extends Component {
	render () {
		return (
			<div className="container-fluid padding">
      <div className="row welcome text-center padding">

        <div className="col-12">
          <hr className="dark" />
          <h1 className="display-4"> Trending </h1>
          <hr className="dark" />
        </div>

        <div className="col-md-6 col-xl-3">
          <div className="card">
            <div className="card-header">
              <img src={NutsAndBolts} />
            </div>
            <div className="card-body">
              <h5>Nuts & Bolts</h5>
              <p><strong>$25.00</strong></p>
            </div>
            <div className="card-body">
              <a href="#" className="btn btn-outline-secondary">Shop</a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3">
          <div className="card">
            <div className="card-header">
              <img src={GatherBundle}/>
            </div>
            <div className="card-body">
              <h5>Gather Together Bundle</h5>
              <p><strong>$65.00</strong></p>
            </div>
            <div className="card-body">
              <a href="#" className="btn btn-outline-secondary">Shop</a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3">
          <div className="card">
            <div className="card-header">
              <img src={TxBoots}/>
            </div>
            <div className="card-body">
              <h5>Boot Scootin' Sweets</h5>
              <p><strong>$38.00</strong></p>
            </div>
            <div className="card-body">
              <a href="#" className="btn btn-outline-secondary">Shop</a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3">
          <div className="card">
            <div className="card-header">
              <img src={Jewels}/>
            </div>
            <div className="card-body">
              <h5>Chocolate Jewels</h5>
              <p><strong>$25.00</strong></p>
            </div>
            <div className="card-body">
              <a href="#" className="btn btn-outline-secondary">Shop</a>
            </div>
          </div>
        </div>

      </div>
			</div>
		);
	}
}