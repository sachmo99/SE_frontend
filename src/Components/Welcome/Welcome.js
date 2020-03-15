import React, { Component } from 'react';
import './Welcome.css';

import cookie from 'react-cookies';
import HomePage from './HomePage/HomePage';
import Signin from './Signin/Signin';
import Register from './Register/Register';
// import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

class App extends Component {

	state = {
		isLoggedin: false,
		ifSignupPage: false,
	}

	onRegisterhandler = () => {
		this.setState({
			ifSignupPage: true,
		})
	}



	render = () => {
		//var ipaddress1 = '127.0.0.1'
		var ipaddress2 = 'https://lit-headland-82372.herokuapp.com/'
		//var ipaddress3 = '172.28.1.3'
		cookie.save('ipaddress', ipaddress2, { path: '/sequizapp' });
		var username = cookie.load('username', { path: '/sequizapp' })
		if (username !== undefined) {
			window.location.href = window.location.origin + '/sequizapp/#/dashboard'
		}

		return (
			<div class="background">
				{
					this.state.isLoggedin ?
						null :
						<div>
							<HomePage />
							<div>
								{
									this.state.ifSignupPage ?
										<Register /> :
										<div >
											<Signin />
											<div id="signupDiv">
												<p>Don't have Account ?  <br></br>
												</p>
												<button id="toSignupPageButton" onClick={this.onRegisterhandler}
													className="btn-lg btn btn-dark">Sign Up for Quiz App</button>
											</div>
										</div>
								}
							</div>
						</div>
				}
			</div>
		);
	}
}


export default App;
