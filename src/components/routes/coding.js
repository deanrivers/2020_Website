import React , {useState} from 'react'
import {useSpring,animated, useSprings} from 'react-spring'

//images
import apexImage from '../../assets/project-images/apex.jpg'
import localPitchImage from '../../assets/project-images/local_pitch.png'

//language images
import pythonImage from '../../assets/program-icons/python.png'
import reactImage from '../../assets/program-icons/react.jpg'


const Coding = () =>{

    const cardObj = [
        {
            title:'Apex Stats Bot',
            image:apexImage,
            description:'The Apex Legends Stats Twitter Bot provides player statistics based on information provided in a receieved tweet/mention. This bot currently lives on a Raspberry Pi and was built using Python & RESTful APIs.',
            link:'',
            languages:[pythonImage]
        },
        {
            title:'Local Pitch',
            image:localPitchImage,
            description:"The Local Pitch mobile application (iOS) will be used to find nearby soccer fields based on the user's current device location. The application is currently in closed beta testing. Please feel free to reach out if you are interested in downloading this application.",
            link:'',
            languages:[reactImage]
        },
        {
            title:'Apex Legends Bot',
            image:apexImage,
            description:'The Apex Legends Stats Twitter Bot provides player statistics based on information provided in a receieved tweet/mention. This bot currently lives on a Raspberry Pi and was built using Python & RESTful APIs.',
            link:'',
            languages:[pythonImage,reactImage]
        },
]

    const [cards,updateCards] = useState(cardObj)

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
                
                {cards.map( (item,index) => {
                    return(
                        <div className="card-child" key={index}>
                            <p style={{fontSize:'2rem',fontWeight:'600'}}>{item.title}</p>
                            <img src={item.image}/>
                            <br/>
                            <hr style={{border:' 1px solid #eaeade'}}/>
                            <p className="card-child-description">{item.description}</p>
                            
                            <div className="language-container">
                                {item.languages.map( (item,index) => {
                                    return(
                                        <img src={item} key={index} className="card-language-image"/>
                                    )
                                })}
                            </div>
                            <button className="card-button">See More</button>
                        </div>
                    )
                })}
            </div>

    

            
        </animated.div>
    )
}

export default Coding