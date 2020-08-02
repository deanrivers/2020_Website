import React, {useState} from 'react'
import { useSpring, animated } from 'react-spring'


const Contact = () =>{

    const [name,updateName] = useState('')
    const [email,updateEmail] = useState('')

    const submitPressed = () =>{
        console.log(name,email)
    }

    return(
        <div className="page-container">
            <div className="title-container">
                <p className="title"><span className="green">/</span>Contact</p>
            </div>
            <div className="form-container">
                <div className="field-container">
                    <input type="text" placeholder="Name*" maxLength="40" value={name} onChange={(e)=>updateName(e.target.value)}/>
                </div>

                <div className="field-container">
                    <input type="text" placeholder="Email*" maxLength="40" value={email} onChange={(e)=>updateEmail(e.target.value)}/>
                </div>
                <div className="field-container">
                    <p>Message*</p>
                    <textarea></textarea>
                </div>

                <button onClick={()=>submitPressed()} id="submit-button">Submit</button>
                
            </div>


        </div>
    )
}

export default Contact