import React from 'react'
import {useSpring,animated} from 'react-spring'
import { renderIntoDocument } from 'react-dom/test-utils'

const Education = () =>{
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
                <p className="title"><span className="yellow">/</span>Education</p>
            </div>
        </animated.div>
    )
}

export default Education