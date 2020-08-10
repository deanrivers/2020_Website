import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from './components/home'
import Art from './components/routes/art'
import Hamburger from './components/hamburger'
import Coding from './components/routes/coding'
import Contact from './components/routes/contact'
import Education from './components/routes/education'
import Social from './components/socials'
import YouTube from './components/youtube'
import Footer from './components/footer'


const App = () => {

  useState(()=>{
    console.log('hi')
  },[])

  return ([
    
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/home" component={Home}/>
        <Route path="/coding" component={Coding}/>
        <Route path="/art" component={Art}/>
        <Route path="/education" component={Education}/>
        <Route path="/contact" component={Contact}/>

        <Route exact path="/2020_Website">
          <Redirect to="/" />
        </Route>
        
      </Switch>
      <Hamburger/>
    </Router>,
    <Footer/>
    



  ]);
}



export default App;
