import React from 'react'
import Gallery from 'react-photo-gallery'
import { useSpring,animated } from 'react-spring'
import { Carousel } from 'react-responsive-carousel'

import 'pure-react-carousel/dist/react-carousel.es.css';
 

const Art = () => {

    const fade = useSpring({
        from:{
            opacity:'0'
        },
        to:{
            opacity:'1'
        }
    })

    const photos = [
        {
            src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
            width: 5,
            height: 3
          },
          {
            src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
            width: 1,
            height: 1
          },
          {
            src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
            width: 3,
            height: 4
          },
          {
            src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
            width: 3,
            height: 4
          },
          {
            src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
            width: 3,
            height: 4
          },
          {
            src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
            width: 4,
            height: 3
          },

      
          
      ];

      const musicPlayers = [{
          artist:'rvsl',
          title:'What Day Is It',
          src:'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/857454568&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
          profileURL:'https://soundcloud.com/rvsl',
          songURL:'https://soundcloud.com/rvsl/what-day-is-it'
      },
      {
        artist:'rvsl',
        title:'voicemail',
        src:'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/318995829&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
        profileURL:'https://soundcloud.com/rvsl',
        songURL:'https://soundcloud.com/rvsl/voicemail'
      },
    
    ]
    return(
        <animated.div className="page-container" style={fade}>
            <div className="title-container">
                <p className="title"><span className="blue">/</span>Art</p>
            </div>
            <div className="sub-categories">
                <p>Visuals / Photography / Music</p>
            </div>

            

            <div className="master-content-container">

                <div id="photo-container">
                    <div className="content-child">
                        <p>Photography</p>
                    </div>

                    <div className="sub-categories">
                        <a href="https://instagram.com/your.vue" target="_blank"><p>Follow on Instagram</p></a>
                    </div>
                    <hr/>
                    <Gallery photos={photos} direction="row"/>
                </div>

                

                

                <div id="master-music-container">
                    <div className="content-child">
                        <p>Music</p>
                    </div>

                    <div className="sub-categories">
                        <a href="https://instagram.com/rvslmusic" target="_blank"><p>Follow on Instagram</p></a>
                    </div>
                    <hr/>

                    <div className="carousel-container">
                        {/* <Carousel> */}
                            {musicPlayers.map( (data,index) =>{
                                return(
                                    
                                    <div index={index}>
                                        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src={data.src}></iframe>
                                        <div className="sc-player">
                                            <a href={data.profileURL} title={data.arist} target="_blank">rvsl -</a> 
                                            <a href={data.songURL} title={data.title} target="_blank">{data.title}</a>
                                        </div>
                                    </div>
                                    )
                            })}
                        {/* </Carousel> */}
                    </div>
                        
                    

                </div>
            </div>
        </animated.div>
    )
}

export default Art