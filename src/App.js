import React, {useState,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {useSpring,animated} from 'react-spring'
import $ from 'jquery'

import Home from './components/home'
import Art from './components/routes/art'
import Hamburger from './components/hamburger'
import Coding from './components/routes/coding'
import Contact from './components/routes/contact'
import Social from './components/socials'
import Footer from './components/footer'
import Preloader from './components/preloader'

const App = () => {

  const [preloaderActive,updatePreloader] = useState(true)
  const preLoaderRender = preloaderActive?<Preloader/>:null

  useEffect( () => {

      //scroll to top


      //set preloader to false after 3s
      setTimeout( ()=>{
        
        // console.log('reload')
        updatePreloader(false)
        window.scrollTo(0,0);

        document.getElementsByTagName('html')[0].style.overflow = 'scroll'
        
        //remove preloader from dom after 2s
        setTimeout(()=>{
          const elem = document.getElementById('preloader-container')
          elem.parentNode.removeChild(elem)
        },2000)
      },3000)
  },[])


  // const opacity = useSpring({opacity:preloaderActive?1:0})
  const opacity = useSpring({opacity:preloaderActive?1:0})

  

  

  return ([
    <animated.div id="preloader-container" style={opacity}>
      {preLoaderRender}
    </animated.div>,
    
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/home" component={Home}/>
        <Route path="/coding" component={Coding}/>
        <Route path="/art" component={Art}/>
        {/* <Route path="/education" component={Education}/> */}
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
