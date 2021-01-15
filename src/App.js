import React, {Component} from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from './home/home';
import Fundraising from './fundraising/fundraising';
import UserProfile from './userProfile/userProfile';
import Auction from './auction/auction';

class App extends Component {

  render() {

    return (
      <BrowserRouter>      
        <div className="Content">
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/fundraising" component={Fundraising} />
              <Route path="/userProfile" component={UserProfile} />
              <Route path="/auction" component={Auction} />
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
  
  
}

export default App;