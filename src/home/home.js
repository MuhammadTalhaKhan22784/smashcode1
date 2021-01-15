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

import slider_logo from '../assets/images/slider_logo.png';

import classes from './home.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';


class Home extends Component {
	render(){
		return (
			<>
				<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
				  <ol className="carousel-indicators">
				    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
				    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				  </ol>
				  <div className="carousel-inner">
				    <div className="carousel-item active">
				      <img src={slider1} className={"d-block w-100 " + classes.SliderImage} alt="slider1" />
				    </div>
				    <div className="carousel-item">
				      <img src={slider2} className={"d-block w-100 " + classes.SliderImage} alt="slider2" />
				    </div>
				    <div className="carousel-item">
				      <img src={slider3} className={"d-block w-100 " + classes.SliderImage} alt="slider3" />
				    </div>
				  </div>
				  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				    <span className="sr-only">Previous</span>
				  </a>
				  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				    <span className="carousel-control-next-icon" aria-hidden="true"></span>
				    <span className="sr-only">Next</span>
				  </a>
				  <h1 className={classes.SliderHeading}><strong>Together we can help!</strong><br/>Just look how simple it is...</h1>
				  <button className={classes.Button}>SUPP SOMEONE!</button>
				</div>


				<div className="container-fluid">

					<div className="row pt-5 pb-5 justify-content-center" style={{backgroundColor: '#f4f4f4'}}>
		    			<div className={"col-12 col-md-4 " + classes.CardSize}>
		    				<div className={"card text-center " + classes.CardBorder}>
		    					<div className="card-body">
									<h5 className={"card-title " + classes.CardTitle}>STEP 1</h5>
									<img src={card1} className={"card-img-top " + classes.CardImage} alt="card1" />
									<p className={"card-text " + classes.CardText}>Choose <strong>people</strong><br/>you want to support</p>
								</div>
		    				</div>
		    			</div>

		    			<div className={"col-12 col-md-4 " + classes.CardSize}>
		    				<div className={"card text-center " + classes.CardBorder}>
		    					<div className="card-body">
									<h5 className={"card-title " + classes.CardTitle}>STEP 2</h5>
									<img src={card2} className={"card-img-top " + classes.CardImage} alt="card2" />
									<p className={"card-text " + classes.CardText}>Choose your way<br/>of<strong> helping</strong></p>
								</div>
		    				</div>
		    			</div>

		    			<div className={"col-12 col-md-4 " + classes.CardSize}>
		    				<div className={"card text-center " + classes.CardBorder}>
		    					<div className="card-body">
									<h5 className={"card-title " + classes.CardTitle}>STEP 3</h5>
									<img src={card3} className={"card-img-top " + classes.CardImage} alt="card3" />
									<p className={"card-text " + classes.CardText}>Become<br/><strong>Supp</strong>erhero</p>
								</div>
		    				</div>
		    			</div>
		    		</div>


		    		<h2 className="text-center mt-5 mb-5"><strong>Last</strong> supports</h2>

		    		<div className="row mt-5 justify-content-center">
		    			<div className={"col-12 col-md-4 " + classes.CardSize}>
		    				<div className={"card text-center " + classes.CardBorder}>
		    					
									<img src={card11} className="card-img-top" alt="card1" />
								
		    				</div>
		    			</div>

		    			<div className={"col-12 col-md-4 " + classes.CardSize}>
		    				<div className={"card text-center " + classes.CardBorder}>
		    					
									<img src={card12} className="card-img-top" alt="card2" />
								
		    				</div>
		    			</div>

		    			<div className={"col-12 col-md-4 " + classes.CardSize}>
		    				<div className={"card text-center " + classes.CardBorder}>
		    					
									<img src={card13} className="card-img-top" alt="card3" />
								
		    				</div>
		    			</div>
		    		</div>



		    		<div className="row mt-4 mb-5 justify-content-center">
		    			<div className={"col-12 col-md-4 " + classes.CardSize}>
		    				<div className={"card " + classes.BlackCardBorder}>
		    					<div className="row justify-content-center">
	    							<div className="col-5">
										<p className={classes.CardTitle2} style={{color: '#09dbc6'}}>Martin</p>
									</div>

									<div className="col-7 text-right">
										<p style={{color: '#fff', fontSize: '15px', marginBottom: '0'}}><span style={{color: '#09dbc6'}}>350</span>/1000 $</p>
									</div>

									<div className={"col-10 p-1 mb-3 " + classes.Linear}></div>

								</div>
		    				</div>
		    			</div>

		    			<div className={"col-12 col-md-4 " + classes.CardSize}>
		    				<div className={"card " + classes.BlackCardBorder}>
		    					<div className="row justify-content-center">
	    							<div className="col-4">
										<p className={classes.CardTitle2} style={{color: '#09dbc6'}}>Ann</p>
									</div>

									<div className="col-8 text-right">
										<p style={{color: '#09dbc6', fontSize: '15px', marginBottom: '0'}}><span style={{fontWeight: 'bold'}}>100 000</span>/100 000 $</p>
									</div>

									<div className={"col-10 p-1 mb-3 " + classes.Linear2}></div>

								</div>
		    				</div>
		    			</div>

		    			<div className={"col-12 col-md-4 " + classes.CardSize}>
		    				<div className={"card " + classes.BlackCardBorder}>
		    					<div className="row justify-content-center">
	    							<div className="col-4">
										<p className={classes.CardTitle2} style={{color: '#09dbc6'}}>Kate</p>
									</div>

									<div className="col-8 text-right">
										<p style={{color: '#09dbc6', fontSize: '15px', marginBottom: '0'}}><span style={{fontWeight: 'bold'}}>100 000</span>/100 000 $</p>
									</div>

									<div className={"col-10 p-1 mb-3 " + classes.Linear2}></div>

								</div>
		    				</div>
		    			</div>
		    		</div>


		    		<div className="row pt-4 pb-5 justify-content-center" style={{backgroundColor: '#f4f4f4'}}>
		    			<div className="col-12 text-center pt-5 pb-5">
		    				<h2 className=""><strong>Partners</strong></h2>
		    			</div>

		    			<div className={"col-12 col-md-4 ml-auto mr-auto " + classes.CardSize}>
		    				<div className="card text-center">
		    					
									<img src={slider_logo} className="card-img-top" alt="card1" />
								
		    				</div>
		    			</div>

		    			<div className={"col-12 col-md-4 ml-auto mr-auto " + classes.CardSize}>
		    				<div className="card text-center">
		    					
									<img src={slider_logo} className="card-img-top" alt="card2" />
								
		    				</div>
		    			</div>

		    			<div className={"col-12 col-md-4 pb-5 ml-auto mr-auto " + classes.CardSize}>
		    				<div className="card text-center">
		    					
									<img src={slider_logo} className="card-img-top" alt="card3" />
								
		    				</div>
		    			</div>
		    		</div>

		    		{/*<section className="customer-logos slider mb-5">
				      <div className="slide"><img src={slider_logo} className={classes.LogoImage} /></div>
				      <div className="slide"><img src={slider_logo} className={classes.LogoImage} /></div>
				      <div className="slide"><img src={slider_logo} className={classes.LogoImage} /></div>
				      <div className="slide"><img src={slider_logo} className={classes.LogoImage} /></div>
				      <div className="slide"><img src={slider_logo} className={classes.LogoImage} /></div>
				      <div className="slide"><img src={slider_logo} className={classes.LogoImage} /></div>
				      <div className="slide"><img src={slider_logo} className={classes.LogoImage} /></div>
				      <div className="slide"><img src={slider_logo} className={classes.LogoImage} /></div>
				   </section>*/}


		    	</div>

    		</>
		);
	}
}

export default Home;