import React from 'react'
import FontAwesome from 'react-fontawesome'

 

const Social = () =>{
    return(
        <div id="social-container">
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