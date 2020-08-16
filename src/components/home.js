import React, { useState, useRef, useEffect } from 'react'
import {useSpring, animated, config} from 'react-spring'
import {NavLink} from 'react-router-dom'
import Social from './socials'

import Preloader from './preloader'



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

    const FadeInSection = (props) => {
        const [isVisible, setVisible] = React.useState(false);
        const domRef = React.useRef();
        React.useEffect(() => {
          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
          });
          observer.observe(domRef.current);
        }, []);
        return (
          <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
          >
            {props.children}
          </div>
        );
    }



    return([
 
        <animated.div className="page-container" style={fade}>
            
            <div className="row" id="header">
                <div className="title-container">
                    <div>
                        <p className="title">Dr<span className="dot-animation" style={{color:'#ff0044'}}>.</span>io</p>
                    </div>
                </div>
                
                <div id="about-container">
                    {/* <p>"Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries."
                    </p> */}
                    
                </div>
            </div>
            {/* <hr/> */}

            <div className="row" id="nav-container">
                <animated.div id="info" style={slideIn1}>
                    <div>
                        <NavLink to="/coding"><p className="link" id="red-hover">/Coding</p></NavLink>
                    </div>
                </animated.div>

                <animated.div id="art" className="nav-child" style={slideIn2}>
                    <div>
                        <NavLink to="/art"><p className="link" id="blue-hover">/Art</p></NavLink>                        
                    </div>
                </animated.div>

                <animated.div id="education" className="nav-child" style={slideIn3}>
                    <div>
                        <NavLink to="/education"><p className="link" id="yellow-hover">/Education</p></NavLink>
                
                        
                    </div>
                </animated.div>

                <animated.div id="contact" className="nav-child" style={slideIn4}> 
                    <div>
                        <NavLink to="/contact"><p className="link" id="green-hover">/Contact</p></NavLink>
                    </div>
                </animated.div>
            </div>

            <FadeInSection>
                <div>
                    <hr style={{border:'3px solid rgb(99, 99, 99)',opacity:'1'}}/>
                    <p id="page-break-text">Engineer. Creative.</p>
                    <hr style={{border:'3px solid rgb(99, 99, 99)',opacity:'1'}}/>
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="row">
                    <div>
                        <p>About</p>
                        <div className="sub-categories">
                            {/* <p>Me / What I'm Into</p> */}
                            {/* <hr style={{marginTop:'0'}}/> */}
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                                It has roots in a piece of classical Latin literature from 45 BC,
                                making it over 2000 years old. Richard McClintock, a Latin professor
                                at Hampden-Sydney College in Virginia, looked up one of the more obscure
                                Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                the cites of the word in classical literature, discovered the undoubtable
                                source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in
                                45 BC. This book is a treatise on the theory of ethics, very popular during
                                the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                                comes from a line in section 1.10.32.</p>
                        </div>
                    </div>

                    <div>
                        <p>Notable Stuff</p>
                        <div className="sub-categories">
                            {/* <p>Classes / Giving Back</p> */}
                            {/* <hr style={{marginTop:'0'}}/> */}
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                                It has roots in a piece of classical Latin literature from 45 BC,
                                making it over 2000 years old. Richard McClintock, a Latin professor
                                at Hampden-Sydney College in Virginia, looked up one of the more obscure
                                Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                the cites of the word in classical literature, discovered the undoubtable
                                source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in
                                45 BC. This book is a treatise on the theory of ethics, very popular during
                                the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                                comes from a line in section 1.10.32.</p>
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </animated.div>
    ])
}
export default Home