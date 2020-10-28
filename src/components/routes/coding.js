import React , {useState} from 'react'
import {useSpring,animated, useSprings} from 'react-spring'
import {Gradient} from 'react-gradient'

//images
import apexImage from '../../assets/project-images/apex.jpg'
import localPitchImage from '../../assets/project-images/local_pitch.png'
import ninjaImage from '../../assets/project-images/ninja.png'
import rumImage from '../../assets/project-images/rum_and_beer.png'

//language images
import pythonImage from '../../assets/program-icons/python.png'
import reactImage from '../../assets/program-icons/react.jpg'

const Coding = () =>{

    const gradients = [
        ['#bd19d6', '#ea7d10'],
        ['#ff2121', '#25c668'],
    ];
    

    const technologies = [
        {
            name:'react',
            icon:''
        },

    ]

    const projectsInfo = [
        {
            title:'Apex Bot',
            image:apexImage,
            description:'The Apex Legends Stats Bot provides player statistics via the Apex Tracker Network API. This bot currently lives on a Raspberry Pi and was built using Python. Gice it a try!',
            link:'https://twitter.com/ApexLegendsBot',
            languages:[pythonImage]
        },
        {
            title:'Local Pitch',
            image:localPitchImage,
            description:"The Local Pitch mobile application (iOS) will be used to find nearby soccer fields based on the user's current device location. The application is currently in closed beta testing.",
            link:'',
            languages:[reactImage]
        },
        {
            title:'Decoded',
            image:ninjaImage,
            description:'Common misconception: "Coding is too hard for me to learn!" Decoded is dedicated in breaking that stigma with the use of engaging posts and online classes.',
            link:'https://decoded.ninja/',
            languages:[]
        },
        {
            title:'Rum & Beer',
            image:rumImage,
            description:'The Rum & Beer Draft League is a unique experience where players are drafted to a soccer team. Match standings, player stats and FUT Cards are all displayed on the league website.',
            link:'https://nydraft.com',
            languages:[reactImage]
        },
    ]

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
                {/* <p>Bots / Scripts / Web Development</p> */}
            </div>

            <div className="content-child">
                <p>Projects</p>
            </div>

            <div className="sub-categories">
                <p>Bots / Scripts / Web Development</p>
            </div>

            <div className="main-card-container">
                {projectsInfo.map( (item,index) => {
                    return(
                        <div className="card-child" key={index}>
                            <div className="card-title-container">
                                <p style={{fontSize:'3rem',fontWeight:'400'}}>{item.title}</p>
                            </div>
                            
                            <div className="card-image-container">
                                <a href={item.link} target="_blank">
                                    <img width="120px" height="120px"  src={item.image}/>
                                </a>
                            </div>
                            
                            {/* <hr style={{border:'1px solid #eaeade'}}/> */}
                            <div className="card-child-description-container">
                                <p style={{fontWeight:'300'}} className="card-child-description">{item.description}</p>    
                            </div>
                            
                        </div>
                    )
                })}
            </div>

            
                            

    

            
        </animated.div>
    )
}

export default Coding