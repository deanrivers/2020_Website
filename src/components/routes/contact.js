import React, {useState} from 'react'
import { useSpring, animated } from 'react-spring'
import firebase from 'firebase'
import {v4 as uuidv4} from 'uuid'

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

//firebase.database.instance('my-app-db-2').ref('/foo/bar')
// firebase.database().ref('/Visitors').

const Contact = () =>{

    const [name,updateName] = useState('')
    const [email,updateEmail] = useState('')
    const [message,updateMessage] = useState('')
    

    const fade = useSpring({
        from:{
            opacity:'0'
        },
        to:{
            opacity:'1'
        }
    })

    const submitPressed = () =>{
        console.log(name,email,message)
        firebase
        .database()
        .ref("Visitors/" + name)
        .set({
            name: name,
            email:email,
            message:message,
            uuid: uuidv4()
        });
    }
    
    return(
        <animated.div className="page-container" style={fade}>
            <div className="title-container">
                <p className="title"><span className="green">/</span>Contact</p>
            </div>

            <div className="container">
                {/* <form onSubmit={(e)=>submitPressed(e)}> */}
                    <div class="group">      
                        <input type="text" required maxLength="40" value={name} onChange={(e)=>updateName(e.target.value)}/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Name*</label>
                    </div>

                    <div class="group">      
                        <input type="text" required maxLength="40" value={email} onChange={(e)=>updateEmail(e.target.value)}/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Email*</label>
                    </div>
                  
                    <div className="field-container">
                        <p>Message*</p>
                        <textarea onChange={(e)=>updateMessage(e.target.value)}></textarea>
                    </div>
                    <button onClick={()=>submitPressed()} id="submit-button">Submit</button>
                {/* </form> */}
            </div>
        </animated.div>
    )
}

export default Contact