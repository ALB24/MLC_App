import React, { Component } from 'react';

import mlcLogo from '../imges/MLClogo.png';

export default class Footer extends Component {
	render () {
		return (
      <footer>
        <div className="container-fluid padding">
        <div className="row text-center">

          <hr className="dark"/>

          <div className="col-md-4">
            <hr className="dark" />
            <h5>Our Hours</h5>
            <hr className="dark" />
            <p> Monday-Friday: 9am to 5pm</p>
            <p> Saturday and Sunday: Closed</p>
            <p> * For Holiday Hours Check our Calander</p>
            <hr className="dark" />
            <h5>Location</h5>
            <hr className="dark" />
            <p>1017 East 6th Street</p>
            <p>Austin, Texas 78702</p>
          </div>

          <div className="col-md-4">
            <hr className="dark" />
            <h5>Links</h5>
            <hr className="dark" />
            <p><a href="#">About</a></p>
            <p><a href="#">Help / FAQ</a></p>
            <p><a href="#">Privacy Policy</a></p>
            <p><a href="#">Terms and Conditions</a></p>
            <p><a href="#">Press + Media</a></p>
            <p><a href="#">Wholesale</a></p>
            <p><a href="#">Contact Us</a></p>
          </div>

          <div className="col-md-4">
            <hr className="dark" />
            <h5>Newsletter</h5>
            <hr className="dark" />
            <p className="text-left">Become an insider and be the first to know about new collections, special events, unique promotions and more. </p>
            <form>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                </div>
                <input type="text" className="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required />
                <div className="invalid-tooltip">
                  Please choose a unique and valid username.
                </div>
              </div>
              <button type="submit" className="btn btn-outline-secondary">Submit</button>
            </form>
          </div>
          <div className="col-12">
            <hr className="dark" />
            <h5>&copy; <img className="logoImg" src={mlcLogo} /> & <strong>ALB</strong></h5>
          
          </div>
        </div>	
        </div>

      </footer>
		);
	}
}