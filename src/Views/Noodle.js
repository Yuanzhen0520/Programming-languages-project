//import React from 'react'
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

function Noodle(){
   return (
    <div>
        <h1 className = "font-bold text-2xl mb-3">Noodles</h1>
        <ul>
        <Link 
            to = "/seafoodpasta" 
            className = "text-blue-500 py-3 border-t border-b block" 
        >
            Seafood Pasta
        </Link>
        <Link 
            to = "/garlicspaghetti" 
            className = "text-blue-500 py-3 border-b block" 
        >
            Spaghetti Aglio E Olio
        </Link>
        <Link 
            to = "/chowmien" 
            className = "text-blue-500 py-3 border-b block" 
        >
            Seafood Chow Mien
        </Link>
        <Link 
            to = "/greenbeannoodles" 
            className = "text-blue-500 py-3 border-b block" 
        >
            Green Been Fried Noodles
        </Link>
        </ul>
    </div>
   )
   
}

export default Noodle
