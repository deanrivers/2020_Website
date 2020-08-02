import React from 'react'
import {useSpring,animated} from 'react-spring'


const Coding = () =>{
    

    const fade = useSpring({
        from:{
            opacity:'0'
        },
        to:{
            opacity:'1'
        }
    })

    return(
        <animated.div className="page-container" style={fade}>
            <div className="title-container">
                <p className="title"><span className="red">/</span>Coding</p>
            </div>
            <div className="sub-categories">
                <p>Bots / Scripts / Web Development</p>
            </div>
        </animated.div>
    )
}

export default Coding