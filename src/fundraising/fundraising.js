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

import prod1 from '../assets/images/prod1.png';
import prod2 from '../assets/images/prod2.png';
import prod3 from '../assets/images/prod3.png';

import slider_logo from '../assets/images/slider_logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebook, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

import classes from './fundraising.module.css';



import anonymous from '../assets/images/fund/anonymous.PNG';
import boy from '../assets/images/fund/boy.PNG';
import hannah from '../assets/images/fund/hannah.PNG';
import medal from '../assets/images/fund/medal.PNG';
import piano from '../assets/images/fund/piano.PNG';
import shirt from '../assets/images/fund/shirt.PNG';
import shoe from '../assets/images/fund/shoe.PNG';
import tom from '../assets/images/fund/tom.PNG';

import Carousel from 'react-elastic-carousel';
import Item from "../Item";

class Fundraising extends Component {
	render(){
		return (
			<>
				<div className={"container-fluid pt-5 " + classes.CardDisplay}>				

		    		<div className="row justify-content-center">
		    			
		    			<div className={"col-12 col-md-2 "+classes.CardSize}>
		    				<div className={"card " + classes.CardBorder}>
		    					<img src={card11} className="card-img-top" alt="card1" />					
		    				</div>
		    			</div>

		    			<div className={classes.CardSize2}>
		    				<h2><strong>Martin</strong>&nbsp; <FontAwesomeIcon icon={faCommentAlt} className={classes.FaCommentAlt} /> <FontAwesomeIcon icon={faHeart} className={classes.FaHeart} /></h2>
		    				
		    				<br/>
		    				
		    				<h5><strong>Title stating why does he need money</strong></h5>

		    				<p className={classes.ParaFontSize}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		    				<p className={classes.ReadMore}>Read More</p>


		    			</div>

		    			{/*<div className={"mt-5 " + classes.CardSize3}>*/}

		    				<div className={"card mt-5 " + classes.CardBorder2}>
								<h5 className={classes.CardTitle2}>Latest Supp</h5>
								<p className={classes.CardText2}>Anonymous - <strong>100 $</strong></p>
								<p className={classes.ReadMore}>Read More</p>
		    				</div>

		    			</div>

	    				<div className="row justify-content-center">

	    					<div className="col-3 mt-5">
	    						<div className="row">
	    							{/*<FontAwesomeIcon icon={faChevronLeft} style={{color: '#09dbc6', fontSize: '30px', marginTop: '2rem'}} />
	    							<div className="col-3">
	    								<img src={prod1} className="card-img-top" alt="card1" />
	    							</div>
	    							<div className="col-3">
	    								<img src={prod2} className="card-img-top" alt="card1" />
	    							</div>
	    							<div className="col-3">
	    								<img src={prod3} className="card-img-top" alt="card1" />
	    							</div>
	    							<FontAwesomeIcon icon={faChevronRight} style={{color: '#09dbc6', fontSize: '30px', marginTop: '2rem'}} />*/}
	    							<Carousel itemsToShow={3}>
									  <Item><img src={prod1} className="card-img-top" alt="card1" /></Item>
									  <Item><img src={prod2} className="card-img-top" alt="card1" /></Item>
									  <Item><img src={prod3} className="card-img-top" alt="card1" /></Item>
									  <Item><img src={prod1} className="card-img-top" alt="card1" /></Item>
									  <Item><img src={prod2} className="card-img-top" alt="card1" /></Item>
									  <Item><img src={prod3} className="card-img-top" alt="card1" /></Item>
									</Carousel>
	    						</div>
			    			</div>

	    					<div className="col-7 mt-5">

		    					<div className={"card " + classes.BlackCardBorder}>

		    						<div className="row justify-content-center">
		    							<div className="col-4">
											<p className={classes.CardTitle2} style={{color: '#09dbc6'}}>37% donations</p>
										</div>

										<div className="col-4 text-center">
											<p className={classes.CardText2} style={{color: '#d4fffb'}}>41% ads</p>
										</div>

										<div className="col-4 text-right">
											<p style={{color: '#fff', fontSize: '20px', marginBottom: '0'}}><span style={{color: '#09dbc6'}}>780</span>/1000 $</p>
										</div>

										<div className={"col-12 p-1 " + classes.Linear}></div>

										<div className="col-12 text-right">
											<p style={{color: '#09dbc6', fontSize: '20px', marginBottom: '0'}}>78% completed</p>
										</div>

									</div>
			    				</div>
			    			</div>
		    			</div>


		    			<div className="row justify-content-center">
							<div className="offset-lg-3 col-7 mt-3">
	    						<div className={"card " + classes.CardBorder3}>
									<div className="row justify-content-center">
										<div className="col-4">
											<button style={{backgroundColor: '#09dbc6', color:'#fff', padding: '1rem 2rem', borderRadius: '10px'}}>DONATE</button>
										</div>
										<div className="col-4">
											<button style={{backgroundColor: '#fff', color:'#09dbc6', padding: '1rem 2rem', border: 'solid', borderColor: '#09dbc6', borderWidth: '1px', borderRadius: '10px'}}>WATCH AD</button>
										</div>
										<div className="col-4">
											<button style={{backgroundColor: '#fff', color:'#000', padding: '1rem 2rem', border: 'solid', borderColor: '#000', borderWidth: '1px', borderRadius: '10px'}}>SHARE</button>
										</div>

										<div className="col-12 pt-1">
											<p style={{fontSize: '0.8rem'}}>app. 0.4$ per AD</p>
										</div>
									</div>
			    				</div>
			    			</div>
			    		</div>
		    				
		    			{/*</div>*/}

		    		{/*</div>*/}



		    		{/*<div className="row mt-4 mb-5 justify-content-center">
		    			<div className={"col-12 col-md-4 " + classes.CardSize}>
		    				<div className={"card text-center " + classes.CardBorder}>
		    					
									<img src={card111} className="card-img-top" alt="card1" />
								
		    				</div>
		    			</div>

		    			<div className={"col-12 col-md-4 " + classes.CardSize}>
		    				<div className={"card text-center " + classes.CardBorder}>
		    					
									<img src={card112} className="card-img-top" alt="card2" />
								
		    				</div>
		    			</div>

		    			<div className={"col-12 col-md-4 " + classes.CardSize}>
		    				<div className={"card text-center " + classes.CardBorder}>
		    					
									<img src={card113} className="card-img-top" alt="card3" />
								
		    				</div>
		    			</div>
		    		</div>*/}



		    		{/*<h2 className="text-center mt-5"><strong>Partners</strong></h2>
		    		<section className="customer-logos slider mb-5">
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


















	<div class="container-fluid" style={{padding: '50px', backgroundColor:'#f5f5f5'}}>
      <h3 style={{textAlign: 'center', paddingBottom: '20px'}}> <strong>Related</strong> auctions</h3>
      <div class="row">
        <div class="col-md-4">
          <div class="box">
            <div>
              <div class="row">
                <div class="col-md-4">
                  <img src={shoe}/>
                </div>
                <div class="col-md-8">
                  <h5>Shoes auction title</h5>
              <p style={{fontSize: '14px'}}>Highest bid: <strong>18 $ / 30 SUPP</strong></p>
              <p style={{marginTop: '-18px', fontSize: '14px'}}>3 biddings</p>
              <p style={{fontSize: '14px'}}>Ends in 2 days</p>
            </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="col-md-4">
        <div class="box">
          <div>
            <div class="row">
              <div class="col-md-4">
                <img src={piano}/>
              </div>
              <div class="col-md-8">
                <h5>Piano auction title</h5>
            <p style={{fontSize: '14px'}}>Highest bid: <strong>188 $ / 300 SUPP</strong></p>
            <p style={{fontSize: '14px', marginTop: '-18px'}}>11 biddings</p>
            <p style={{fontSize: '14px'}}>Ends in 1 days</p>
          </div>
          </div>
        </div>
      </div>
      
      </div>
      <div class="col-md-4">
          <div class="box">
            <div>
              <div class="row">
                <div class="col-md-4">
                  <img src={medal}/>
                </div>
                <div class="col-md-8">
                  <h5>Medal auction title</h5>
              <p style={{fontSize: '14px'}}>Highest bid: <strong>18 $ / 30 SUPP</strong></p>
              <p style={{marginTop: '-18px', fontSize: '14px'}}>11 biddings</p>
              <p style={{color: 'aqua'}}>Ends in 16 hours</p>
            </div>
            </div>
          </div>
        </div>
        
      </div>
      </div>
    </div>


    <div class="container-fluid" style={{padding: '50px', backgroundColor:'white'}}>
      <h3 style={{textAlign: 'center', paddingBottom: '20px'}}> <strong>Related</strong> donors activites</h3>
    <div class="container">
      <div class="row">
        <div class="boxes" style={{padding: '30px'}}>All: <strong>350</strong></div>
        <div class="boxes" style={{padding: '30px', boxShadow: '-1px -1px 2px 0px'}}>Donates: <strong>13</strong></div>
        <div class="boxes" style={{padding: '30px'}}>Adds Watches: <strong>198</strong></div>
        <div class="boxes" style={{padding: '30px'}}>Shares: <strong>139</strong></div>
      </div>
      <div style={{border: '1px solid silver',padding: '50px', paddingBottom: '10px',borderRadius: '10px'}}>
      <div class="row"style={{paddingTop:'20px'}}>
        
          <div class="col-md-4">
            <div class="row">
            <img src={anonymous}/> <p style={{margin: '10px'}}>Anonymous -<strong>12$</strong> </p>
          </div>
          </div>
          <div class="col-md-4">
            <div class="row">
            <img src={anonymous}/> <p style={{margin: '10px'}}>Anonymous -<strong>500$</strong> </p>
          </div>
          </div>
          <div class="col-md-4">
            <div class="row">
            <img src={anonymous}/> <p style={{margin: '10px'}}>Anonymous -<strong>10$</strong> </p>
          </div>
          </div>
      </div>
      <div class="row"style={{paddingTop:'20px'}}>
        
        <div class="col-md-4">
          <div class="row">
          <img src={anonymous}/> <p style={{margin: '10px'}}>Anonymous -<strong>5$</strong> </p>
        </div>
        </div>
        <div class="col-md-4">
          <div class="row">
          <img src={anonymous}/> <p style={{margin: '10px'}}>Anonymous -<strong>5$</strong> </p>
        </div>
        </div>
        <div class="col-md-4">
          <div class="row">
          <img src={anonymous}/> <p style={{margin: '10px'}}>Anonymous -<strong>5$</strong> </p>
        </div>
        </div>
    </div>
    <div class="row"style={{paddingTop:'20px'}}>
        
      <div class="col-md-4">
        <div class="row">
        <img src={boy}/> <p style={{margin: '10px'}}>Wiktor -<strong>5$</strong> </p>
      </div>
      </div>
      <div class="col-md-4">
        <div class="row">
        <img src={tom}/> <p style={{margin: '10px'}}>Tom -<strong>100$</strong> </p>
      </div>
      </div>
      <div class="col-md-4">
        <div class="row">
        <img src={hannah}/> <p style={{margin: '10px'}}>Hannah -<strong>5$</strong> </p>
      </div>
      </div>
  </div>
  <center>
  <div class="btn btn-default" style={{textAlign: 'center !important', marginTop: '20px',color: 'aqua'}}>See More </div>
</center></div>  
    </div>
  </div>

    		</>
		);
	}
}

export default Fundraising;