import React, {Component} from 'react';
import logo from '../assets/images/logo.png';
import classes from './navbar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import user from '../assets/images/user.jpg';

import { BrowserRouter as Router, Link } from "react-router-dom";

// import Home from '../home/home';
// import Fundraising from '../fundraising/fundraising';

class Navbar extends Component {
	render(){
		




		return (
			<Router>
				<header className={classes.Toolbar}>
					<div className={classes.DrawerToggle}>
						<div></div>
						<div></div>
						<div></div>
					</div>
					
					<nav className={classes.DesktopOnly}>
						<ul>
							<a href="/" className={classes.Logo}><img src={logo} alt="logo" style={{width: '180px'}} /></a>
							<li>
								<Link to="/fundraising">browse fundraising <FontAwesomeIcon icon={faChevronDown} /></Link>
							</li>
							<li>
								<Link to="/auction">auction house</Link>
							</li>
							<li>
								<a href="#">tokens</a>
							</li>


							<li>
								<button className={classes.Button}>RAISE MONEY</button>
							</li>
							<li>
								<a href="#"><i className='fa fa-home'></i></a>
							</li>
							<li>
								{/*<a href="#">log in</a>*/}
								<a href="#"><FontAwesomeIcon icon={faBell} className={classes.FaBell}/></a>
							</li>
							
							<li>
								<Link to="/userProfile"><img src={user} alt="user" className={classes.User} /></Link>
							</li>
						</ul>
					</nav>
				</header>

				{/*<Switch>
					<Route path="/" component={HomePage} >
						<HomePage />
					</Route>
					<Route path="/fundraising" component={FundraisingPage} >
						<FundraisingPage />
					</Route>
				</Switch>*/}
			</Router>
			
			
		);
	}
}

export default Navbar;