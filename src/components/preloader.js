import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../assets/animations/data.json'

const Preloader = () =>{

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
    }

    return(
        <Lottie options={defaultOptions}
            height={500}
            width={500}
        />
    )
}

export default Preloader