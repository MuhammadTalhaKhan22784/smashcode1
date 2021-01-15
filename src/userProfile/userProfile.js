import React, {Component} from 'react';

import slider1 from '../assets/images/slider1.jpg';
import slider2 from '../assets/images/slider2.jpg';
import slider3 from '../assets/images/slider3.jpg';

import card1 from '../assets/images/card1.jpg';
import card2 from '../assets/images/card2.jpg';
import card3 from '../assets/images/card3.jpg';

import card11 from '../assets/images/11.JPG';
import card12 from '../assets/images/12.JPG';
import card13 from '../assets/images/13.JPG';

import card111 from '../assets/images/111.png';
import card112 from '../assets/images/112.png';
import card113 from '../assets/images/113.png';

import world from '../assets/images/world.svg';

import slider_logo from '../assets/images/slider_logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faHome, faWallet, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt, faHeart, faUser, faComment } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebook, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

import classes from './userProfile.module.css';

import {withRouter} from 'react-router-dom';

class UserProfile extends Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	render(){
		return (
			<>

				<div className={"container-fluid " + classes.SideBar}>
					<a href="#" className={classes.SideBarActive}><FontAwesomeIcon icon={faHome} className={classes.FaHome} /></a>
					<a href="#"><FontAwesomeIcon icon={faUser} /></a>
					<a href="#"><FontAwesomeIcon icon={faWallet} /></a>
					<a href="#"><FontAwesomeIcon icon={faDollarSign} /></a>
					<a href="#"><FontAwesomeIcon icon={faComment} /></a>
				</div>




				<div className={"container-fluid " + classes.CardDisplay}>				

		    		<div className="row pb-3">
		    			
		    			<div className="col-12 col-md-2">
		    				<div className={"card " + classes.CardBorder2}>
								<h5><strong>Profile</strong></h5>
								<span className={classes.CardTitleSpan}>Experienced</span>
								<p className={classes.CardText2 + " pt-3 pb-2"}><strong>ID</strong><br/>SUPP2455</p>
								<p className={classes.CardText2 + " pt-2 pb-2"}><strong>Created</strong><br/>22 Dec 2013</p>
								<p className={classes.ReadMore + " pt-5"}>Download Overall Report</p>
		    				</div>
		    			</div>

		    			<div className="col-12 col-md-9">
		    				<div className={"card " + classes.CardBorder2}>
								<h5 className="w-50"><strong>Funding history</strong></h5>
								<span className={classes.CardTitleSpan}>
									<select className={"custom-select " + classes.Select}>
									  <option selected>All time</option>
									  <option value="1">One</option>
									  <option value="2">Two</option>
									  <option value="3">Three</option>
									</select>
								</span>
								{/*<p className={classes.CardText2 + " pt-2 pb-2"}><strong>ID</strong><br/>SUPP2455</p>
								<p className={classes.CardText2 + " pt-2 pb-2"}><strong>Created</strong><br/>22 Dec 2013</p>
								<p className={classes.ReadMore + " pt-3"}>Download Overall Report</p>*/}
								{/*<canvas id="myChart" ref={this.myRef} width="400" height="200" style={{backgroundColor: '#f4f4f4', maxWidth: '80%'}}></canvas>*/}
								{/*<div id="chartContainer" style={{height: '100%', maxWidth: '80%'}}></div>*/}

								<div className="row" style={{height: '100%', maxWidth: '100%'}}>
									<div className="col-12 col-md-10" id="chartContainer">
									</div>
									<div className="col-12 col-md-2 pl-5 pt-5">
										<p style={{color: '#09dbc6'}}>Gross balance</p>
										<p>Net balance</p>
										<p style={{color: '#ccc'}}>Withdrawals</p>										
									</div>
								</div>
		    				</div>
		    			</div>

		    		</div>


		    		<div className="row">
		    			
		    			<div className="col-12 col-md-2">
		    				<div className={"card " + classes.CardBorder2}>
								<h5><strong>Wallet</strong></h5>
								<p className={classes.ReadMore + " pt-3"} style={{fontSize:'22px'}} >1163 supp</p>
								<p className="pb-3" style={{fontSize:'18px'}} >(2345.00 USD)</p>
								{/*<span className={classes.CardTitleSpan}>Experienced</span>*/}
								<p className={classes.CardText2 + " pt-2 pb-2"}><strong>Your address</strong><br/>aaa4555555a55555</p>
								{/*<p className={classes.CardText2 + " pt-2 pb-2"}><strong>Created</strong><br/>22 Dec 2013</p>*/}
								<input type="text" placeholder="Enter your withdrawal address" style={{fontSize:'12px', margin: '17% 0 10% 0', border: 'solid', borderRadius: '5px', borderColor: '#e8e8e8', borderWidth: '2px', padding: '3%'}} />
								<button className={classes.Button}>WITHDRAW</button>
		    				</div>
		    			</div>

		    			<div className="col-12 col-md-9">
		    				<div className={"card " + classes.CardBorder2}>
								<h5 className="w-50"><strong>Funding details</strong></h5>
								<span className={classes.CardTitleSpan}>
									<select className={"custom-select " + classes.Select}>
									  <option selected>Geo</option>
									  <option value="1">One</option>
									  <option value="2">Two</option>
									  <option value="3">Three</option>
									</select>
								</span>
								{/*<p className={classes.CardText2 + " pt-2 pb-2"}><strong>ID</strong><br/>SUPP2455</p>
								<p className={classes.CardText2 + " pt-2 pb-2"}><strong>Created</strong><br/>22 Dec 2013</p>
								<p className={classes.ReadMore + " pt-3"}>Download Overall Report</p>*/}
								{/*<canvas id="myChart" ref={this.myRef} width="400" height="200" style={{backgroundColor: '#f4f4f4', maxWidth: '80%'}}></canvas>*/}
								
								<div className="row" style={{height: '100%', maxWidth: '100%'}}>
									<div className="col-12 col-md-5">
										<img src={world} style={{height: '100%', width: '100%', objectFit: 'contain'}} />
									</div>
									<div className="col-12 col-md-5" id="chartDonut">
									</div>
									<div className="col-12 col-md-2 pl-5 pt-5">
										<h5 className="pb-3">Europe</h5>
										<p><strong>Qty</strong><br/>45%</p>
										<p><strong>Val</strong><br/>72.80 $</p>

										<h5>Profit</h5>
										<p style={{color: '#09dbc6', fontSize: '1.4rem', fontWeight: '600'}}>+35.2%</p>
									</div>
								</div>
		    				</div>
		    			</div>

		    		</div>

		    	</div>

    		</>
		);
	}
}

export default withRouter(UserProfile);