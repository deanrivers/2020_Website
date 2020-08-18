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
                        <NavLink to="/art"><p className="link" id="green-hover">/Art</p></NavLink>                        
                    </div>
                </animated.div>

                {/* <animated.div id="education" className="nav-child" style={slideIn3}>
                    <div>
                        <NavLink to="/education"><p className="link" id="yellow-hover">/Education</p></NavLink>
                
                        
                    </div>
                </animated.div> */}

                <animated.div id="contact" className="nav-child" style={slideIn4}> 
                    <div>
                        <NavLink to="/contact"><p className="link" id="blue-hover">/Contact</p></NavLink>
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
                            <p>As a natural thinker and asker of questions, I have always been fascinated with the idea of
                                <span className="keyword">technology</span> and humans harmoniously coexisting in a fast-paced, increasingly-digital world.
                                Throughout my life I have always been enamored with engineering, design and development;
                                all of which have helped shape me into the <span className="keyword">creative-engineer-designer-artsy</span> human being I am today.
                                Discovering new ways to do everyday things is my hobby, implementing them and watching something I
                                have created being used by others in a positive way is part of my <span className="keyword">passion</span>.</p>
                            <br/>
                            <p>I am a <span className="keyword">front end</span> developer/programmer, designer and innovative creator with a BE in Mechanical
                                Engineering from the <span className="keyword">Stevens Institute of Technology</span> located in the heart of Hoboken, NJ. I also
                                enjoy playing soccer, making music and creating cool animations.</p>

                            <p>Everyday is an <span className="keyword">opportunity</span> for me to develop and build on my knowledge of front-end metgodologies and
                                techniques while also fine-tuning my soft skills as a people-person. Both of these elements go hand-in-hand
                                and are crucial for sustainable improvement and <span className="keyword">self-growth</span>.
                            </p>
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