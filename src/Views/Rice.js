import React from 'react'
import {Link} from 'react-router-dom'

import img5 from './images/cabbageRice.jpg'

function Rice(){
    return (
        <div>
            <h1 className = "font-bold text-2xl mb-3">Rice</h1>
            <ul>
                 <Link 
                     to = "/cabbagerice" 
                     className = "text-blue-500 py-3 border-t border-b block" 
                >
                    Cabbage Rice
                </Link>

                <Link 
                     to = "/braisedcabbage" 
                     className = "text-blue-500 py-3 border-b block" 
                >
                    Braised Cabbage
                </Link>
                <Link 
                     to = "/eggplantrice" 
                     className = "text-blue-500 py-3 border-b block" 
                >
                    Stir-fried Eggplant with Rice
                </Link>
                <Link 
                     to = "/salteggfriedrice" 
                     className = "text-blue-500 py-3 border-b block" 
                >
                    Salted Egg Fried Rice
                </Link>
                <Link 
                     to = "/ragu" 
                     className = "text-blue-500 py-3 border-b block" 
                >
                    Ragu with Rice
                </Link>
                <Link 
                     to = "/oyakodon" 
                     className = "text-blue-500 py-3 border-b block" 
                >
                    Oyako Don
                </Link>
                <Link 
                     to = "/chickencurry" 
                     className = "text-blue-500 py-3 border-b block" 
                >
                    Chicken Curry
                </Link>
            </ul>
        </div>
    )
}
export default Rice
