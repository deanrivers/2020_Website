import React, { useState, useRef, useEffect } from 'react'
import {useSpring, animated, config} from 'react-spring'
import {NavLink} from 'react-router-dom'
import Social from './socials'
import Youtube from './youtube'
import Twitch from './twitch'

import Preloader from './preloader'

import FadeInSection from './common/fadeInSection'



const Home = () =>{

    const fade = useSpring({
        from:{
            opacity:'0'
        },
        to:{
            opacity:'1'
        }
    })

    const slideIn1 = useSpring({
        from:{
            transform: 'translateX(200%)'
        },
        to:{
            transform: 'translateX(0%)'
        },
        config:{
            easing:'ease',
            tension:300,
            mass:1,
            clamp:false,
            precision:0.01,
            velocity:10
        }
    })
    const slideIn2 = useSpring({
        from:{
            transform: 'translateX(200%)'
        },
        to:{
            transform: 'translateX(0%)'
        },
        config:{
            easing:'ease',
            tension:300,
            mass:1,
            clamp:false,
            precision:0.01,
            velocity:10
        },
        delay:200
    })
    const slideIn3 = useSpring({
        from:{
            transform: 'translateX(200%)'
        },
        to:{
            transform: 'translateX(0%)'
        },
        config:{
            easing:'ease',
            tension:300,
            mass:1,
            clamp:false,
            precision:0.01,
            velocity:10
        },
        delay:300
    })
    const slideIn4 = useSpring({
        from:{
            transform: 'translateX(200%)'
        },
        to:{
            transform: 'translateX(0%)'
        },
        config:{
            easing:'ease',
            tension:300,
            mass:1,
            clamp:false,
            precision:0.01,
            velocity:10
        },
        delay:400
    })
    
    return([
 
        <animated.div className="page-container" style={fade}>
            <div className="row" id="header">
                <div className="title-container">
                    <div>
                        <p className="title">Dr<span className="dot-animation" style={{color:'#ff0044'}}>.</span>io</p>
                    </div>
                </div>
            </div>
            {/* <hr/> */}

            <div className="row" id="nav-container">
                <animated.div id="coding" style={slideIn1}>
                    <div>
                        <NavLink to="/coding"><p className="link" id="red-hover">/Coding</p></NavLink>
                    </div>
                </animated.div>

                <animated.div id="art" className="nav-child" style={slideIn2}>
                    <div>
                        <NavLink to="/art"><p className="link" id="green-hover">/Art</p></NavLink>                        
                    </div>
                </animated.div>

                <animated.div id="contact" className="nav-child" style={slideIn4}> 
                    <div>
                        <NavLink to="/contact"><p className="link" id="blue-hover">/Contact</p></NavLink>
                    </div>
                </animated.div>
            </div>

            {/* <FadeInSection>
                <div>
                    <hr style={{border:'3px solid rgb(99, 99, 99)',opacity:'1'}}/>
                    <p id="page-break-text">Engineer<span className="dot-animation" style={{color:'#ff0044'}}>.</span> Creative<span className="dot-animation" style={{color:'#ff0044'}}>.</span></p>
                    <hr style={{border:'3px solid rgb(99, 99, 99)',opacity:'1'}}/>
                </div>
            </FadeInSection> */}
            
            {/* <FadeInSection>
                <div className="row">
                    <div>
                        <p>About</p>
                        <div className="sub-categories">
                            <p>I am a Front End Engineer based in the NYC area with 4+ years experience, graduate of Stevens, and lover of all things technology.
                                <br/>
                                <br/>
                                I spend my time learning new technilogies, designing cool looking stuff and teaching others what I know whenever I get the chance.
                                I use a plethora of tools and technologies to deliver a great user experience.</p>
                        </div>
                    </div>
                </div>
            </FadeInSection> */}
            {/* <FadeInSection>
                <div className="row">
                    <div>
                        <p>Youtube</p>
                    </div>
                </div>
                <Youtube/>
            </FadeInSection>

            <FadeInSection>
                <div className="row">
                    <div>
                        <p>Twitch</p>
                    </div>
                </div>
                <Twitch/>
            </FadeInSection> */}
        </animated.div>
    ])
}
export default Home