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

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab,faCoffee)


require('dotenv').config()



const App = () => {

  const [preloaderActive,updatePreloader] = useState(true)
  const preLoaderRender = preloaderActive?<Preloader/>:null

  useEffect( () => {
      //set preloader to false after 3s
      setTimeout( ()=>{
        
        // console.log('reload')
        updatePreloader(false)
        window.scrollTo(0,0);

        document.getElementsByTagName('html')[0].style.overflow = 'scroll'
        
        const elem = document.getElementById('preloader-container')
        elem.parentNode.removeChild(elem)

        //remove preloader from dom after 2s
        setTimeout(()=>{
          // const elem = document.getElementById('preloader-container')
          // elem.parentNode.removeChild(elem)
        },2000)
      },3000)
  },[])

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
        <Route path="/contact" component={Contact}/>
        <Route path="" component={Home}/>

        <Route exact path="/2020_Website">
          <Redirect to="/" />
        </Route>
        
      </Switch>
      <Hamburger/>
    </Router>,
    // <Footer/>
    



  ]);
}



export default App;
