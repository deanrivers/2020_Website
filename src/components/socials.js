import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// let icons = ['youtube','twitch','github','instagram']


let icons =[
    {
        icon:'youtube',
        link:'https://www.youtube.com/user/dustierthunder/'
    },
    {
        icon:'twitch',
        link:'https://www.twitch.tv/deanrivers'
    },
    {
        icon:'github',
        link:'https://github.com/deanrivers/'
    },
    {
        icon:'instagram',
        link:'https://www.instagram.com/deanrivers.io/'
    }
]

const Social = () =>{

    return(
        <div id="social-container">
            {icons.map( (item,index)=>{
                return(
                    <div className="social-icon-child" key={index}>
                        <a href={item.link} target="_blank">
                            <FontAwesomeIcon icon={['fab', `${item.icon}`]} />
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default Social