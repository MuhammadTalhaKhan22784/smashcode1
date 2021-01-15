import React, {Component} from 'react';
import logo from '../assets/images/logo.png';
import classes from './navbar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import user from '../assets/images/user.jpg';

import { NavLink } from "react-router-dom";

class Navbar extends Component {
	render(){

		return (			
			<header className={classes.Toolbar}>
				<div className={classes.DrawerToggle}>
					<div></div>
					<div></div>
					<div></div>
				</div>
				
				<nav className={classes.DesktopOnly}>
					<ul>
						<NavLink to="/" className={classes.Logo}><img src={logo} alt="logo" style={{width: '180px'}} /></NavLink>
						<li>
							<NavLink to="/fundraising">browse fundraising <FontAwesomeIcon icon={faChevronDown} /></NavLink>
						</li>
						<li>
							<NavLink to="/auction">auction house</NavLink>
						</li>
						<li>
							<NavLink to="#">tokens</NavLink>
						</li>


						<li>
							<button className={classes.Button}>RAISE MONEY</button>
						</li>
						
						<li>
							{/*<a href="#">log in</a>*/}
							<NavLink to="#"><FontAwesomeIcon icon={faBell} className={classes.FaBell}/></NavLink>
						</li>
						
						<li>
							<NavLink to="/userProfile"><img src={user} alt="user" className={classes.User} /></NavLink>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Navbar;