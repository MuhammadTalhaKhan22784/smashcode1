import React, {Component} from 'react';
import logo from '../assets/images/logo.png';
import classes from './footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';


class Footer extends Component {
	render(){
		return (
			<footer className={classes.Footer}>
				<nav className={classes.DesktopOnly}>
					<h3 className={classes.Heading3}>Site map</h3>
					<ul>
						<li>
							<a href="#">Non-profit</a>
						</li>
						<li>
							<a href="#">Crowdfunding</a>
						</li>
						<li>
							<a href="#">Auction House</a>
						</li>

						<li>
							<a href="#">Token</a>
						</li>
					</ul>
				</nav>

				<nav className={classes.DesktopOnly}>
					<h3 className={classes.Heading3}>Links</h3>
					<ul>
						<li>
							<a href="#">Privacy policy</a>
						</li>
						<li>
							<a href="#">Terms & Conditions</a>
						</li>
						<li>
							<a href="#">Fees</a>
						</li>

						<li>
							<a href="#">Press</a>
						</li>
					</ul>
				</nav>

				<nav className={classes.DesktopOnly}>
					<h3 className={classes.Heading3}>Contact</h3>
					<ul>
						<li>
							<a href="#" className={classes.Li_a}>contact@supp.network</a>
						</li>
						<li>
							<a href="#" className={classes.Li_a}>business@supp.network</a>
						</li>
						<li>
							<a href="#"><FontAwesomeIcon icon={faTwitter} className={classes.FaTwitter} /></a>
							<a href="#"><FontAwesomeIcon icon={faFacebook} className={classes.FaFacebook} /></a>
							<a href="#"><FontAwesomeIcon icon={faLinkedin} className={classes.FaLinkedin} /></a>
							<a href="#"><FontAwesomeIcon icon={faTelegram} className={classes.FaTelegram} /></a>
						</li>
					</ul>
				</nav>

				<nav className={classes.DesktopOnly}>
					<h3 className={classes.Heading3}>Newsletter</h3>
					<ul>
						<li>
							<input type="text" name="newsletter" placeholder="Enter your e-mail"/>
							<button>OK</button>
						</li>
					</ul>
				</nav>
			</footer>
		);
	}
}

export default Footer;