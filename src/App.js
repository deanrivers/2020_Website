import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {useSpring,animated} from 'react-spring'
import $ from 'jquery'


import Home from './components/home'
import Art from './components/routes/art'
import Hamburger from './components/hamburger'
import Coding from './components/routes/coding'
import Contact from './components/routes/contact'
import Education from './components/routes/education'
import Social from './components/socials'
import YouTube from './components/youtube'
import Footer from './components/footer'
import Preloader from './components/preloader'


const App = () => {

  useState(()=>{
    console.log('hi')
  },[])

  const [preloaderActive,updatePreloader] = useState(true)

  const preLoaderRender = preloaderActive?<Preloader/>:null

  useEffect( () => {
      setTimeout( ()=>{
          // updatePreloader(false)
          // document.getElementById('preloader-container').classList.add('preloader-hide')
          const el = $('#preloader-container')
          const elem = document.getElementById('preloader-container')
          
          //fade element away
          // el.classList.add('preloader-hide')
          el.fadeOut('fast')
          
          
          


          
          // elem.parentNode.removeChild(elem)
      },3000)
  },[])

  const opacity = useSpring({opacity:1})

  

  return ([
    <animated.div id="preloader-container">
      {preLoaderRender}
    </animated.div>,
    
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
