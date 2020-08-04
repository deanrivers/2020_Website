import React , {useState} from 'react'
import {useSpring,animated, useSprings} from 'react-spring'

//images
import apexImage from '../../assets/project-images/apex.jpg'

//language images
import pythonImage from '../../assets/program-icons/python.png'
import reactImage from '../../assets/program-icons/react.jpg'

const Coding = () =>{

    const cardObj = [
        {
            title:'Apex Legends Stats Bot',
            image:apexImage,
            description:'The Apex Legends Stats Twitter Bot provides player statistics based on information provided in a receieved tweet/mention. This bot currently lives on a Raspberry Pi and was built using Python & RESTful APIs.',
            link:'',
            languages:[pythonImage,reactImage]
        },
        {
            title:'Apex Legends Stats Bot',
            image:apexImage,
            description:'The Apex Legends Stats Twitter Bot provides player statistics based on information provided in a receieved tweet/mention. This bot currently lives on a Raspberry Pi and was built using Python & RESTful APIs.',
            link:'',
            languages:[]
        },
        {
            title:'Apex Legends Stats Bot',
            image:apexImage,
            description:'The Apex Legends Stats Twitter Bot provides player statistics based on information provided in a receieved tweet/mention. This bot currently lives on a Raspberry Pi and was built using Python & RESTful APIs.',
            link:'',
            languages:[]
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
                <p>Bots / Scripts / Web Development</p>
            </div>

            <div className="main-card-container">
                {cards.map( (item,index) => {
                    return(
                        <div className="card-child" key={index}>
                            <p style={{fontSize:'2rem',fontWeight:'600'}}>{item.title}</p>
                            <img src={item.image}/>
                            <br/>
                            <hr style={{color:'red'}}/>
                            <p>{item.description}</p>
                            <button>See More</button>
                            <div className="language-container">
                                {item.languages.map( (item,index) => {
                                    return(
                                        <img src={item} key={index} className="card-language-image"/>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}

            </div>

            
        </animated.div>
    )
}

export default Coding