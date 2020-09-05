import React, {useState, useEffect} from 'react'
import { useSpring, animated } from 'react-spring'
import firebase from 'firebase'
import {v4 as uuidv4} from 'uuid'
import $ from 'jquery'

import Social from '../socials'

// var firebase = require("firebase");
//var uuid = require("uuid");

//google firebase
const config = {
    apiKey: "AIzaSyDI-uQn3OsQ7Xxj-bYgWm-_WP9hQy_jLR4",
    authDomain: "website-75fd6.firebaseapp.com",
    databaseURL: "https://website-75fd6.firebaseio.com",
    projectId: "website-75fd6",
    storageBucket: "website-75fd6.appspot.com",
    messagingSenderId: "875662301345",
    appId: "1:875662301345:web:559c574e1f0e1cc567b8e0",
    measurementId: "G-HCBVB9N599"
};

firebase.initializeApp(config);

const Contact = () =>{

    const [name,updateName] = useState('')
    const [email,updateEmail] = useState('')
    const [message,updateMessage] = useState('')
    const [formSubmiited,updateFormSubmitted] = useState(false)
    
    const fade = useSpring({
        from:{
            opacity:'0'
        },
        to:{
            opacity:'1'
        }
    })

    const submitPressed = () =>{
        let valid = false
        let nameValid = false
        let emailValid = false
        let messageValid = false

        let inputCSS ={
            valid:{
                property:'border-bottom',
                value:'1px solid #757575'
            },
            error:{
                property:'border-bottom',
                value:'1px solid #fc1b62'
            }
        }
        let regName = /^[A-Za-z]+((\s)?([A-Za-z])+)*$/
        let regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        //check validation for name field
        if(regName.test(name)&&name!==''&&name!==' '){
            nameValid = true
            $('#name-input').css(inputCSS.valid.property,inputCSS.valid.value)
        } else{ //change border style
            nameValid = false
            $('#name-input').css(inputCSS.error.property,inputCSS.error.value)
        }

        //check validation for email field
        if(regEmail.test(email)){
            emailValid = true
            $('#email-input').css(inputCSS.valid.property,inputCSS.valid.value)
        } else{ //change border style
            emailValid = false
            $('#email-input').css(inputCSS.error.property,inputCSS.error.value)
        }

        //check validation for message field
        if(message!==''){
            messageValid = true
            $('#message-input').css('border','1px solid #eaeade')
        } else{
            messageValid = false
            $('#message-input').css('border','1px solid #fc1b62')
        }

        //determine if all fields are valid
        if(nameValid&&messageValid&&emailValid) valid = true

        //submit if everything is valid
        if(valid){
            firebase
            .database()
            .ref("Visitors/" + name)
            .set({
                name: name,
                email:email,
                message:message,
                uuid: uuidv4()
            },()=>updateFormSubmitted(true));
        }
    }

    useEffect(()=>{
        if(formSubmiited){
            $('footer').css('display','none')
        }
    },[formSubmiited])
    
    return(!formSubmiited?
        <animated.div className="page-container" style={fade}>
            <div className="title-container">
                <p className="title"><span className="green">/</span>Contact</p>
            </div>

            <div className="container">
                <div className="group">      
                    <input id="name-input" type="text" required maxLength="40" value={name} onChange={(e)=>updateName(e.target.value.trim())}/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>First Name*</label>
                </div>

                <div className="group">      
                    <input id="email-input" type="text" required maxLength="40" value={email} onChange={(e)=>updateEmail(e.target.value.trim())}/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Email*</label>
                </div>
                
                <div className="field-container">
                    <p>Message*</p>
                    <textarea id="message-input" value={message} onChange={(e)=>updateMessage(e.target.value.replace(/^\s+/g, ''))}></textarea>
                </div>
                <button onClick={()=>submitPressed()} id="submit-button">Submit</button>
            </div>
        </animated.div>
        :
        <animated.div className="page-container thanks-container" style={fade}>
            <p>Thank you for your message!</p>
            <p>Your message is in a database somewhere in the sky.</p>
            <Social/>
        </animated.div>

    )
}

export default Contact