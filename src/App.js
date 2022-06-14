import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from './Views/Home'
import Rice from './Views/Rice'
import Noodle from './Views/Noodle'
import Stir from './Views/Stir'
import Others from './Views/Others'
import Drink from './Views/Drink'


import img1 from './Views/images/seafoodPasta.jpg'
import img2 from './Views/images/spaghetti.jpg'
import img3 from './Views/images/chowmien.jpg'
import img4 from './Views/images/greenbean.jpg'
import img5 from './Views/images/cabbageRice.jpg'
import img6 from './Views/images/brasiedCabbage.jpg'
import img7 from './Views/images/eggplant.jpg'
import img8 from './Views/images/saltEgg.jpg'
import img9 from './Views/images/ragu.jpg'
import img10 from './Views/images/oyakodon.jpg'
import img11 from './Views/images/curry.jpg'
import img12 from './Views/images/tomatoEgg.jpg'
import img13 from './Views/images/carrot.jpg'
import img14 from './Views/images/bokchoy.jpg'
import img15 from './Views/images/pork.jpg'
import img16 from './Views/images/seafoodSalad.jpg'
import img17 from './Views/images/dumplings.jpg'
import img18 from './Views/images/cabbage.jpg'
import img19 from './Views/images/eggCongee.jpg'
import img20 from './Views/images/seafoodCongee.jpg'
import img21 from './Views/images/xiaolongbao.jpg'
import img22 from './Views/images/omurice.jpg'
import img23 from './Views/images/fruit.jpg'




function App() {//creating a stateless component in react
  return ( // returning what looks like html, but it's jxs
  //whenever you create a component in react, that has to return one rapper element
  //should always have one rapper component and all the others inside it
  
  <div className = "relative pb-10 min-h-screen">
    
    <Router>
    <Header/>
          <div className = "p-3">
            <Switch>
              <Route exact path = "/">
                <Home />
              </Route>
              <Route path = "/rice">
                <Rice />
              </Route>
              <Route path = "/noodle">
                <Noodle />
              </Route>
              <Route path = "/stirfried">
                <Stir />
              </Route>
              <Route path = "/others">
                <Others />
              </Route>
              <Route path = "/drinks">
                <Drink />
              </Route>
              <Route path = "/cabbagerice">
                <h1 className = "font-bold text-2xl mb-3">Cabbage Rice</h1>
                <img src = {img5} width = "230" height = "200"/>
                <p className = "py-3 block">Price: $18</p>
                <p >
                  Ingredients: Rice, Cabbage, Mushroom, Small Shrimp
                </p>
              </Route>
              <Route path = "/seafoodpasta">
                <h1 className = "font-bold text-2xl mb-3">Seafood Pasta</h1>
                <img src = {img1} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $22</p>
                <p >
                  Ingredients: Shrimp, Pasta, Tomato, Garlic, Oyster, Squid
                </p>
              </Route>
              <Route path = "/garlicspaghetti">
                <h1 className = "font-bold text-2xl mb-3">Spaghetti Aglio E Olio</h1>
                <img src = {img2} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $15</p>
                <p >
                  Ingredients: Pasta, Parsley, Garlic, Parmigiano-Reggiano Cheese
                </p>
              </Route>
              <Route path = "/chowmien">
                <h1 className = "font-bold text-2xl mb-3">Seafood Chow Mien</h1>
                <img src = {img3} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $18</p>
                <p >
                  Ingredients: Noodle, Shrimp, Squid, Garlic, Cabbage
                </p>
              </Route>
              <Route path = "/greenbeannoodles">
                <h1 className = "font-bold text-2xl mb-3">Green Bean Fried Noodles</h1>
                <img src = {img4} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $15</p>
                <p >
                  Ingredients: Noodle, Green Bean, Garlic, Mushroom, Chicken
                </p>
              </Route>
              <Route path = "/braisedcabbage">
                <h1 className = "font-bold text-2xl mb-3"> Braised Cabbage</h1>
                <img src = {img6} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $13</p>
                <p >
                  Ingredients: Rice, Cabbage, Mushroom, Little Shrimp
                </p>
              </Route>
              <Route path = "/eggplantrice">
                <h1 className = "font-bold text-2xl mb-3">Stir-fried Eggplant with Rice</h1>
                <img src = {img7} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $15</p>
                <p >
                  Ingredients: Rice, Eggplant, Chicken, Tofu
                </p>
              </Route>
              <Route path = "/salteggfriedrice">
                <h1 className = "font-bold text-2xl mb-3">Salted Egg Fried Rice</h1>
                <img src = {img8} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $16</p>
                <p >
                  Ingredients: Rice, Egg, Chicken, Salted Duck Egg
                </p>
              </Route>
              <Route path = "/ragu">
                <h1 className = "font-bold text-2xl mb-3">Ragu with Rice</h1>
                <img src = {img9} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $16</p>
                <p >
                  Ingredients: Rice, Tea Egg, Cucumber, Ragu
                </p>
              </Route>
              <Route path = "/oyakodon">
                <h1 className = "font-bold text-2xl mb-3">Oyako Don</h1>
                <img src = {img10} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $16</p>
                <p >
                  Ingredients: Rice, Egg, Chicken, Green Onion
                </p>
              </Route>
              <Route path = "/chickencurry">
                <h1 className = "font-bold text-2xl mb-3">Chicken Curry</h1>
                <img src = {img11} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $14</p>
                <p >
                  Ingredients: Rice, Apple, Black Chocolate, Curry, Chicken, Onion, Potato, Carrot, Garlic, Ginger
                </p>
              </Route>
              <Route path = "/eggwithtomato">
                <h1 className = "font-bold text-2xl mb-3">Scrabmled Eggs with Tomatoes</h1>
                <img src = {img12} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $8</p>
                <p >
                  Ingredients: Tomato, Egg, Garlic, Green Onoin
                </p>
              </Route>
              <Route path = "/carrot">
                <h1 className = "font-bold text-2xl mb-3">Scrambled Eggs with Carrot</h1>
                <img src = {img13} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $8</p>
                <p >
                  Ingredients: Egg, Carrot, Green Onion
                </p>
              </Route>
              <Route path = "/babybokchoy">
                <h1 className = "font-bold text-2xl mb-3">Stir-fried Baby Bok Choy</h1>
                <img src = {img14} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $8</p>
                <p >
                  Ingredients: Baby Bok Choy, Garlic
                </p>
              </Route>
              <Route path = "/babybokchoy">
                <h1 className = "font-bold text-2xl mb-3">Stir-fried Baby Bok Choy</h1>
                <img src = {img14} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $8</p>
                <p >
                  Ingredients: Baby Bok Choy, Garlic
                </p>
              </Route>
              <Route path = "/stircabbage">
                <h1 className = "font-bold text-2xl mb-3">Stir-fried Cabbage</h1>
                <img src = {img18} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $8</p>
                <p >
                  Ingredients: Cabbage, Garlic, Chicken Essence
                </p>
              </Route>
              <Route path = "/brasiedpork">
                <h1 className = "font-bold text-2xl mb-3"> Braised Pork</h1>
                <img src = {img15} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $15</p>
                <p >
                  Ingredients: Pork, Green Onion
                </p>
              </Route>
              <Route path = "/seafoodsalad">
                <h1 className = "font-bold text-2xl mb-3">Seafood Salad</h1>
                <img src = {img16} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $15</p>
                <p >
                  Ingredients: Tilapia, Broccoli, Tomato, Shrimp, Oyster
                </p>
              </Route>
              <Route path = "/dumplings">
                <h1 className = "font-bold text-2xl mb-3">Dumplings(leek and pork)</h1>
                <img src = {img17} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $12</p>
                <p >
                  Ingredients: Leek, Pork, Green Onion
                </p>
              </Route>
              <Route path = "/mincedporkcongee">
                <h1 className = "font-bold text-2xl mb-3">Minced Pork Congee with Preserved Egg</h1>
                <img src = {img19} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $10</p>
                <p >
                  Ingredients: Prok, Rice, Preserved Egg, Ginger, Green Onion
                </p>
              </Route>
              <Route path = "/seafoodcongee">
                <h1 className = "font-bold text-2xl mb-3">Seafood Cangee</h1>
                <img src = {img20} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $12</p>
                <p >
                  Ingredients: Rice, Shirmp, Squid, Green Onion, Ginger
                </p>
              </Route>
              <Route path = "/xiaolongbao">
                <h1 className = "font-bold text-2xl mb-3">Seafood Cangee</h1>
                <img src = {img21} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $12</p>
                <p >
                  Ingredients: Pork, Corn
                </p>
              </Route>
              <Route path = "/omurice">
                <h1 className = "font-bold text-2xl mb-3">Omurice</h1>
                <img src = {img22} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $14</p>
                <p >
                  Ingredients: Egg, Tomato Sauce, Green Bean, Corn, Spam, Rice
                </p>
              </Route>
              <Route path = "/fruits">
                <h1 className = "font-bold text-2xl mb-3">Fruit Bowl</h1>
                <img src = {img23} width = "200" height = "200"/>
                <p className = "py-3 block">Price: $7</p>
                <p >
                  Ingredients: Grape, StrawBerry, Orange
                </p>
              </Route>
            
            </Switch>

          </div>
      <Footer/>
    </Router>
  
  </div>
  
  )
}

export default App
