//import React from 'react'
import React, { useEffect, useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import NavigationMenu from'./NavigationMenu'


function Navigation (){//use icon in nav
    //create the react hook
    //create a menu called showMenu, setShowMenu is a function/method here to change the value of showMenu
    //useState(false): my menu should always load in closed(not opened)
    const [showMenu, setShowMenu] = useState(false)
    const maskTransitions = useTransition(showMenu,{
        from: { position:'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: showMenu,
        delay: 200,
      })

      const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)'},
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
      })
    return (
        <nav>
            <span className = "text-xl">
                <FontAwesomeIcon 
                    icon = {faBars}
                    onClick = {()=> setShowMenu(!showMenu)}
                />
            </span>
            {
                maskTransitions(
                    (styles, item) => 
                    item && 
                    <animated.div 
                        style={styles}
                        className = "bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={()=> setShowMenu(false)}
                    >
                    </animated.div>
                )
            }
            {
                menuTransitions(
                    (styles, item) => 
                    item && 
                    <animated.div 
                        style={styles}
                        className = "fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
                    >
                        <NavigationMenu
                            closeMenu = {()=> setShowMenu(false)}
                        />
                    </animated.div>
                )
            }
        </nav>
    
    )
}

export default Navigation
