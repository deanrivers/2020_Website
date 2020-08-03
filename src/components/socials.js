import React from 'react'
import FontAwesome from 'react-fontawesome'

 

const Social = () =>{
    return(
        <div id="social-container">
        
            {/* <div><img src="https://w7.pngwing.com/pngs/196/34/png-transparent-white-plains-yonkers-whole-foods-market-instagram-logo-black-and-white-logo-miscellaneous-angle-white.png"></img></div> */}
             

            
            <FontAwesome
                name="instagram"
                className='fa-icon'
                size="1x"
                spin={false}
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
            
            <FontAwesome
                name="github"
                className='fa-icon'
                size='2x'
                spin={false}
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
            <FontAwesome
                name="youtube"
                className='fa-icon'
                size="1x"
                spin={false}
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
        </div>
    )
}

export default Social