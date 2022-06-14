import React from 'react'
import {Link} from 'react-router-dom'

function NavigationMenu(props){
    return(
        <div>
        <div className = "font-bold py-3">
                            Yuanzhen's Kitchen
                        </div>
                        <ul>
                            <li>
                                <Link 
                                    to = "/" 
                                    className = "text-blue-500 py-3 border-t border-b block"
                                    onClick = {props.closeMenu}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to = "/rice" 
                                    className = "text-blue-500 py-3 border-b block"
                                    onClick = {props.closeMenu}
                                >
                                    Rice
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to = "/noodle" 
                                    className = "text-blue-500 py-3 border-b block"
                                    onClick = {props.closeMenu}
                                >
                                    Noodles
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to = "/stirfried" 
                                    className = "text-blue-500 py-3 border-b block"
                                    onClick = {props.closeMenu}
                                >
                                    Stir-fried Dishes
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to = "/others" 
                                    className = "text-blue-500 py-3 border-b block"
                                    onClick = {props.closeMenu}
                                >
                                    Others
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to = "/drinks" 
                                    className = "text-blue-500 py-3 border-b block"
                                    onClick = {props.closeMenu}
                                >
                                    Drinks
                                </Link>
                            </li>
                        </ul>
                    </div>
    )
}
export default NavigationMenu