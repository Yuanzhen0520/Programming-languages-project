import React from 'react'
import img22 from './images/omurice.jpg'
import img15 from './images/pork.jpg'
import img10 from './images/oyakodon.jpg'
import img12 from './images/tomatoEgg.jpg'
import {Link} from 'react-router-dom'

function Home(){
    return (
        <div>
            <h1 className = "font-bold text-2xl">Welcome!</h1>
            <h1 className = "font-bold py-3 block">Popular Dishes</h1>
            <Link 
                     to = "/omurice" 
                     className = "py-3 border-t block" 
                >
                    Omurice
            </Link>
            <img src = {img22} width = "200" height = "200" />
            <br />

            <Link 
                     to = "/brasiedpork" 
                     className = "py-3 border-t block " 
                >
                    Braised Pork
            </Link>
            <img src = {img15} width = "200" height = "200" />
            <br />
            
            <Link 
                     to = "/oyakodon" 
                     className = "py-3 border-t block " 
                >
                    Oyako Don
            </Link>
            <img src = {img10} width = "200" height = "200" />
            <br />

            <Link 
                     to = "/eggwithtomato" 
                     className = "py-3 border-t block " 
                >
                    Scrambled Eggs with Tomatoes
            </Link>
            <img src = {img12} width = "200" height = "200" />
            <br />
        </div>
    )
}
export default Home