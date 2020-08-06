import React, {useState} from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import {NavLink} from 'react-router-dom'
import {useSpring, animated} from 'react-spring'


const Hamburger = () =>{

    const [hamburgerToggle,updateHamburger] = useState(false)

    const hamburgerSlide = useSpring({
        right: hamburgerToggle ? '0%' : '-100%'
    })

    const menuItemClicked = () => {
        updateHamburger(!hamburgerToggle)
    }

    return ([
        <div id="hamburger-container" >
            <HamburgerMenu
                isOpen={hamburgerToggle}
                menuClicked={()=>updateHamburger(!hamburgerToggle)}
                width={30}
                height={20}
                strokeWidth={3}
                rotate={0}
                color='#eaeade'
                borderRadius={0}
                animationDuration={0.5}
            />
        </div>,
        <animated.div id="hamburger-slide-container" className="ham-nav-items" style={hamburgerSlide}>
            <div className="slidebar-list-container">
                <div id="slidebar-list">
                    <NavLink to="/home"><div onClick={()=>menuItemClicked()} className="slidebar-menu-items" id="red-hover-ham"><p>/Home</p></div></NavLink>
                    <NavLink to="/coding"><div onClick={()=>menuItemClicked()} className="slidebar-menu-items" id="red-hover-ham"><p>/Coding</p></div></NavLink>
                    <NavLink to="/art"><div onClick={()=>menuItemClicked()} className="slidebar-menu-items" id="blue-hover-ham"><p>/Art</p></div></NavLink>
                    <NavLink to="/education"><div onClick={()=>menuItemClicked()} className="slidebar-menu-items" id="yellow-hover-ham"><p>/Education</p></div></NavLink>
                    <NavLink to="/contact"><div onClick={()=>menuItemClicked()} className="slidebar-menu-items" id="green-hover-ham"><p>/Contact</p></div></NavLink>
                </div>
            </div>
        </animated.div>
    ])
}

export default Hamburger