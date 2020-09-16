import React from 'react'

import { useSpring,animated } from 'react-spring'
import { Carousel } from 'react-responsive-carousel'
import Lottie from 'react-lottie'


import 'pure-react-carousel/dist/react-carousel.es.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Youtube from '../youtube'
import Twitch from '../twitch';
import FadeInSection from '../common/fadeInSection'
 

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
            src: require('../../assets/yv-images/1.jpg'),
        },
        {
            src: require('../../assets/yv-images/2.jpg'),
        },
        {
            src: require('../../assets/yv-images/3.jpg'),
        },
        {
            src: require('../../assets/yv-images/4.jpg'),
        },
        {
            src: require('../../assets/yv-images/5.jpg'),
        },
        {
            src: require('../../assets/yv-images/6.jpg'),
        },
        {
            src: require('../../assets/yv-images/7.jpg'),
        },
        {
            src: require('../../assets/yv-images/8.jpg'),
        },
        {
            src: require('../../assets/yv-images/9.jpg'),
        },
        {
            src: require('../../assets/yv-images/10.jpg'),
        },
        {
            src: require('../../assets/yv-images/11.jpg'),
        },
        {
            src: require('../../assets/yv-images/12.jpg'),
        },
        {
            src: require('../../assets/yv-images/13.jpg'),
        },
        {
            src: require('../../assets/yv-images/14.jpg'),
        },
        {
            src: require('../../assets/yv-images/15.jpg'),
        },
        {
            src: require('../../assets/yv-images/16.jpg'),
        },
        {
            src: require('../../assets/yv-images/17.jpg'),
        },
        {
            src: require('../../assets/yv-images/18.jpg'),
        },
        {
            src: require('../../assets/yv-images/19.jpg'),
        },
    ];

    const animations = [{
        defaultOptions:{
            loop: true,
            autoplay: true, 
            animationData: require('../../assets/animations/data_1.json'),
        }
    },
    {
        defaultOptions:{
            loop: true,
            autoplay: true, 
            animationData: require('../../assets/animations/data_2.json'),
        },
    }]

    const musicPlayers = [
        {
            artist:'rvsl',
            title:'You Say',
            src:'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/893329795&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
            profileURL:'https://soundcloud.com/rvsl',
            songURL:'https://soundcloud.com/rvsl/you-say'
        },
        {
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
            <FadeInSection>
                <div className="title-container">
                    <p className="title"><span className="green">/</span>Art</p>
                </div>
            </FadeInSection>
            <div className="master-content-container">
            <FadeInSection>
                <div id="photo-container">
                    <div className="content-child">
                        <p>Photography</p>
                    </div>

                    <div className="sub-categories">
                        <a href="https://instagram.com/your.vue" target="_blank"><p>Follow on Instagram</p></a>
                    </div>
                    <Carousel
                        showArrows={true}
                        showIndicators={false}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        interval={5000}
                        swipeable={true}
                    >
                        {photos.map( (item,index)=> {
                            return(
                                <div className="photo-child-container" key={index}>
                                    <img src={item.src}/>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </FadeInSection>

            
            
            <FadeInSection>
                <div id="master-music-container">
                    <div className="content-child">
                        <p>Music</p>
                    </div>

                    <div className="sub-categories">
                        <a href="https://instagram.com/rvslmusic" target="_blank"><p>Follow on Instagram</p></a>
                    </div>

                    <div className="carousel-container">
                        <Carousel
                            showArrows={true}
                            showIndicators={false}
                            showThumbs={false}
                            showStatus={false}
                            autoPlay={true}
                            infiniteLoop={true}
                            interval={5000}
                            swipeable={true}
                        >
                            {musicPlayers.map( (data,index) =>{
                                return(
                                    <div key={index} className="carousel-slide">
                                        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src={data.src}></iframe>
                                        {/* <div className="sc-player">
                                            <a href={data.profileURL} title={data.arist} target="_blank">rvsl -</a> 
                                            <a href={data.songURL} title={data.title} target="_blank">{data.title}</a>
                                        </div> */}
                                    </div>
                                    )
                            })}
                        </Carousel>
                    </div>
                </div>
            </FadeInSection>

            <FadeInSection>
                <div id="youtube-parent-container">
                    <div className="content-child">
                        <p>YouTube</p>
                    </div>

                    <div className="sub-categories">
                        <a href="https://www.youtube.com/user/dustierthunder/" target="_blank"><p id="youtube-link">Watch on YouTube</p></a>
                    </div>
                    <Youtube/>
                </div>
            </FadeInSection>

            <FadeInSection>

                <div id="twitch-parent-container">
                    <div className="content-child">
                        <p>Twitch</p>
                    </div>

                    <div className="sub-categories">
                        <a href="https://www.twitch.tv/deanrivers" target="_blank"><p id="twitch-link">Watch on Twitch</p></a>
                    </div>
                    <Twitch/>
                </div>
            </FadeInSection>

            </div>
        </animated.div>
    )
}

export default Art