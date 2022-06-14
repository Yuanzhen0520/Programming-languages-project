import React from 'react'
import {Link} from 'react-router-dom'

function Drink(){
    return(
        <div>
            <h1 className = "font-bold text-2xl mb-3">Drinks</h1>
            <ul>
                <p className = "py-3 block">・Apple Juice $3</p>
                <p className = "py-3 block">・Orange Juice $3</p>
                <p className = "py-3 block">・Watermelon Juice $5</p>
                <p className = "py-3 block">・Lemon Juice $2</p>
            </ul>

        </div>
    )
}

export default Drink
