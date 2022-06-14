import React from 'react'
import {Link} from 'react-router-dom'

function Stir (){
    return(
        <div>
            <h1 className = "font-bold text-2xl mb-3">Stir-fried Dishes</h1>
            <ul>
                <Link 
                     to = "/eggwithtomato" 
                     className = "text-blue-500 py-3 border-t border-b block" 
                >
                    Scrambled Eggs with Tomatoes
                </Link>
                <Link 
                     to = "/carrot" 
                     className = "text-blue-500 py-3 border-b block" 
                >
                    Scrambled Eggs with Carrot
                </Link>
                <Link 
                     to = "/babybokchoy" 
                     className = "text-blue-500 py-3 border-b block" 
                >
                    Stir-fried Baby Bok Choy
                </Link>
                <Link 
                     to = "/stircabbage" 
                     className = "text-blue-500 py-3 border-b block" 
                >
                    Stir-fried Cabbage
                </Link>
                <Link 
                     to = "/brasiedpork" 
                     className = "text-blue-500 py-3 border-b block" 
                >
                    Braised Pork
                </Link>
                <Link 
                     to = "/seafoodsalad" 
                     className = "text-blue-500 py-3 border-b block" 
                >
                    Seafood Salad
                </Link>
            </ul>
        </div>
    )
}

export default Stir