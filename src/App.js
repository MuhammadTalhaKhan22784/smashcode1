import React, {Component} from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
// import { BrowserRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './home/home';
import Fundraising from './fundraising/fundraising';
import UserProfile from './userProfile/userProfile';
import Auction from './auction/auction';

class App extends Component {

  render() {
      // const HomePage = () => {
      //   return (
      //     <Home />
      //   );
      // }

      // const FundraisingPage = () => {
      //   return (
      //     <Fundraising />
      //   );
      // }

      // const UserProfilePage = () => {
      //   return (
      //     <UserProfile />
      //   );
      // }

      // const AuctionPage = () => {
      //   return (
      //     <Auction />
      //   );
      // }

    return (
      <Router>      
        <div className="Content">
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/fundraising" component={Fundraising} />
              <Route exact path="/userProfile" component={UserProfile} />
              <Route exact path="/auction" component={Auction} />
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
  
  
}

export default App;