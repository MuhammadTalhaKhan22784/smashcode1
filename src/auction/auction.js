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

import classes from './auction.module.css';

import anonymous from '../assets/images/fund/anonymous.PNG';
import boy from '../assets/images/fund/boy.PNG';
import hannah from '../assets/images/fund/hannah.PNG';
import medal from '../assets/images/fund/medal.PNG';
import piano from '../assets/images/fund/piano.PNG';
import shirt from '../assets/images/fund/shirt.PNG';
import shoe from '../assets/images/fund/shoe.PNG';
import tom from '../assets/images/fund/tom.PNG';

import {withRouter} from 'react-router-dom';

class Auction extends Component {
	render(){
		return (
			<>
				<div className="container" style={{marginTop: '10%', marginBottom: '5%'}}>
    <div className="row">
      <div className="col-md-4">
        <div className={classes.box1}>
          <div className={classes.search}>
            <input type="text" className={classes.InputBox} placeholder="Search"/>
            <i className="fa fa-search" aria-hidden="true"></i>
            
          </div>
         <div className="container">
          <h6>Sort By</h6>
          <div className="row">
                 
         <div className="container">    
          <div className="container"> 
          <form>
            <input type="checkbox" style={{marginRight: '0.5rem'}} id="price" name="price" value="#"/>
            <label for="price"> Price</label><br/>
            <input type="checkbox" style={{marginRight: '0.5rem'}} id="Popularity" name="Popularity" value="#"/>
            <label for="Popularity"> Popularity</label><br/>
            <input type="checkbox" style={{marginRight: '0.5rem'}} id="Date" name="Date" value="#"/>
            <label for="Date"> Date</label>
          </form>
          </div>
          </div>
          </div>
         </div>
         <div className="container"><br/>
          <h6>Filtered By</h6>
          <div className="row">
                 
         <div className="container">    
          <div className="container"> 
          <form>
            <label for="Categories"> Categories</label><br/>
            <label for="Price"> Price</label><br/>
            <div className="row">
            <div className={"col-md-4 " + classes.auction}>
              <div className="search">
                <input type="text" className={classes.InputBox} placeholder=""/>
                <i className="fa fa-search" aria-hidden="true"></i>
                
              </div>
            </div>
            <div className={"col-md-4 " + classes.auction}>
              <div className="search">
                <input type="text" className={classes.InputBox} placeholder=""/>
                <i className="fa fa-search" aria-hidden="true"></i>
                
              </div>
            </div>
          </div>


          <label for="Categories"> Location</label><br/>
           
          <div className="search">
            <input type="text" className={classes.InputBox} placeholder="Search"/>
            <i className="fa fa-search" aria-hidden="true"></i>
            
          </div>
           
          </form>
          </div>
          </div>
          </div>
         </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className={classes.box2}>
          <div className="box-sec">
            <div className="row">
              <div className="col-md-2">
                
                <img src={shoe}/>
           
              </div>
              <div className={"col-md-5 " + classes.auction}>
                <h6><strong>
                  Shoes auction title
                </strong></h6>
                <p>
                  Highest bid: <b>18 $ / 30 SUPP</b>
                </p>
                <p>Ends in: 2 days &nbsp;&nbsp;&nbsp;
                   
                  3 biddings </p>
              </div>
              <div className="col-md-5">
                <div className="row" style={{padding: '0 0 0 22%'}}>
                  <div className="col-md-4" style={{display: 'flex', height: '2.3rem'}}>
                  <input type="number" style={{'border-top-left-radius' : '8px', 'border-bottom-left-radius' : '8px', maxWidth: '70px'}}/>
                  
                  </div>
                  <div className="col-md-4" style={{display: 'flex', height: '2.3rem'}}>
                    <select style={{width: '130px', 'border-top-right-radius' : '8px', 'border-bottom-right-radius' : '8px', maxWidth: '70px'}}>
                      <option>$</option>
                      <option>$</option>
                      <option>$</option>
                    </select>
                
               
                  </div>
                  <div className="col-md-4" style={{display: 'flex'}}>
                    <div className="btn btn-default" style={{ marginLeft: '-1px', border:'1px solid black',borderRadius: '10px', padding: '5px',maxWidth: '70px', color: '#09dbc6', borderColor: '#09dbc6'}}>BID</div>
                  </div>
                </div>
                
                <br/>
                
                <div className="row">
                  <div className="col-md-4 btn btn-default obs" style={{border:'1px solid black',padding: '5px', minWidth:'200px', margin: '0 10% 0 auto'}}> OBSERVE</div>
                </div>

              </div>
              
              
            </div>
            
            </div>
            
          </div>
          <div className={classes.box2}>
            <div className="box-sec">
              <div className="row">
                <div className="col-md-2">
                  
                  <img src={piano}/>
             
                </div>
                <div className={"col-md-5 " + classes.auction}>
                  <h6><strong>
                    Piano auction title
                  </strong></h6>
                  <p>
                    Highest bid: <b>188 $ / 300 SUPP</b>
                  </p>
                  <p>Ends in: 1 days &nbsp;&nbsp;&nbsp;
                     
                    11 biddings </p>
                </div>
                <div className="col-md-5">
                  <div className="row" style={{padding: '0 0 0 22%'}}>
                    <div className="col-md-4" style={{display: 'flex', height: '2.3rem'}}>
                    <input type="number" style={{'border-top-left-radius' : '8px', 'border-bottom-left-radius' : '8px', maxWidth: '70px'}}/>
                    
                    </div>
                    <div className="col-md-4" style={{display: 'flex', height: '2.3rem'}}>
                    <select style={{width: '130px', 'border-top-right-radius' : '8px', 'border-bottom-right-radius' : '8px', maxWidth: '70px'}}>
                      <option>$</option>
                      <option>$</option>
                      <option>$</option>
                    </select>
                  
                 
                  </div>
                  <div className="col-md-4" style={{display: 'flex'}}>
                    <div className="btn btn-default" style={{ marginLeft: '-1px',border:'1px solid black',borderRadius: '10px', padding: '5px',maxWidth: '70px', color: '#09dbc6', borderColor: '#09dbc6'}}>BID</div>
                  </div>
                 </div>
                <br/>
                <div className="row">
                  <div className="col-md-4 btn btn-default obs" style={{border:'1px solid black',padding: '5px', minWidth:'200px', margin: '0 10% 0 auto'}}> OBSERVE</div>
                </div>
                </div>
                
                
              </div>
              </div>
            </div>
  
  
  
            <div className={classes.box2}>
              <div className="box-sec">
                <div className="row">
                  <div className="col-md-2">
                    <img src={medal}/>
                  
                  </div>
                  <div className={"col-md-5 " + classes.auction}>
                    <h6><strong>
                      Medal auction title
                    </strong></h6>
                    <p>
                      Highest bid: <b>18 $ / 30 SUPP</b>
                    </p>
                    <p>Ends in: <span style={{color: '#09dbc6', fontWeight: 'bold'}}>16 hours</span> &nbsp;&nbsp;&nbsp;
                       
                      3 biddings </p>
                  </div>
                  <div className="col-md-5">
                    <div className="row" style={{padding: '0 0 0 22%'}}>
                      <div className="col-md-4" style={{display: 'flex', height: '2.3rem'}}>
                      <input type="number" style={{'border-top-left-radius' : '8px','border-bottom-left-radius' : '8px', maxWidth: '70px'}}/>
                      
                      </div>
                      <div className="col-md-4" style={{display: 'flex', height: '2.3rem'}}>
                      <select style={{width: '130px', 'border-top-right-radius' : '8px', 'border-bottom-right-radius' : '8px', maxWidth: '70px'}}>
                        <option>$</option>
                        <option>$</option>
                        <option>$</option>
                      </select>
                    
                   
                    </div>
                    <div className="col-md-4" style={{display: 'flex'}}>
                      <div className="btn btn-default" style={{ marginLeft: '-1px',border:'1px solid black',borderRadius: '10px', padding: '5px',maxWidth: '70px', color: '#09dbc6', borderColor: '#09dbc6'}}>BID</div>
                    </div>
                   </div>
                  <br/>
                    <div className="row">
                      <div className="col-md-4 btn btn-default obs" style={{border:'1px solid black',padding: '5px', minWidth:'200px', margin: '0 10% 0 auto', backgroundColor: '#09dbc6', color: '#fff', opacity: '0.4', border: 'none'}}> OBSERVING</div>
                    </div>
                  </div>
                  
                  
                </div>
                </div>
              </div>
    
    
    
    
    
    
              <div className={classes.box2}>
                <div className="box-sec">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={shirt}/>
                    </div>
                    <div className={"col-md-5 " + classes.auction}>
                      <h6><strong>
                        Shirt auction title
                      </strong></h6>
                      <p>
                        Highest bid: <b>8 $ / 14SUPP</b>
                      </p>
                      <p>Ends in: 2 days &nbsp;&nbsp;&nbsp;
                         
                        3 biddings </p>
                    </div>
                    <div className="col-md-5">
                      <div className="row" style={{padding: '0 0 0 22%'}}>
                        <div className="col-md-4" style={{display: 'flex', height: '2.3rem'}}>
                        <input type="number" style={{'border-top-left-radius' : '8px', 'border-bottom-left-radius' : '8px', maxWidth: '70px'}}/>
                        
                        </div>
                        <div className="col-md-4" style={{display: 'flex', height: '2.3rem'}}>
                        <select style={{width: '130px', 'border-top-right-radius' : '8px', 'border-bottom-right-radius' : '8px', maxWidth: '70px'}}>
                          <option>$</option>
                          <option>$</option>
                          <option>$</option>
                        </select>
                      
                     
                      </div>
                      <div className="col-md-4" style={{display: 'flex'}}>
                        <div className="btn btn-default" style={{ marginLeft: '-1px',border:'1px solid black',borderRadius: '10px', padding: '5px',maxWidth: '70px', color: '#09dbc6', borderColor: '#09dbc6'}}>BID</div>
                      </div>
                     </div>
                    <br/>
                      <div className="row">
                        <div className="col-md-4 btn btn-default obs" style={{border:'1px solid black',padding: '5px', minWidth:'200px', margin: '0 10% 0 auto'}}> OBSERVE</div>
                      </div>
                    </div>
                    
                    
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

export default withRouter(Auction);