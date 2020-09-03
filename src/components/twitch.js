import React from 'react'
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

const Twitch = () =>{
    return(
        <ReactTwitchEmbedVideo 
            channel="deanrivers"
            layout="video-with-chat"
            autoplay={false}
            width="100%"
        />
    )
}

export default Twitch