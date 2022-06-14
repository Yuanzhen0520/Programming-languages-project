import React from 'react'
import {Link} from 'react-router-dom'

function Others (){
    return(
        <div>
            <h1 className = "font-bold text-2xl mb-3">Others</h1>
            <ul>
                <Link 
                     to = "/dumplings" 
                     className = "text-blue-500 py-3 border-t border-b block" 
                >
                    Dumplings(leek and pork)
                </Link>
                <Link 
                     to = "/mincedporkcongee" 
                     className = "text-blue-500 py-3 border-b block" 
                >
                    Minced Pork Congee with Preserved Egg
                </Link>
                <Link 
                     to = "/seafoodcongee" 
                     className = "text-blue-500 py-3 border-b block" 
                >
                    Seafood Cangee
                </Link>
                <Link 
                     to = "/xiaolongbao" 
                     className = "text-blue-500 py-3 border-b block" 
                >
                    Xiao Long Bao
                </Link>
                <Link 
                     to = "/omurice" 
                     className = "text-blue-500 py-3 border-b block" 
                >
                    Omurice
                </Link>
                <Link 
                     to = "/fruits" 
                     className = "text-blue-500 py-3 border-b block" 
                >
                    Fruit Bowl
                </Link>
            </ul>
        </div>
    )
}

export default Others