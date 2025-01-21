import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gems from "./Component/RoutePages/Gems/Gems";
import Minerals from "./Component/RoutePages/Minerals/Minerals";
import HomePage from "./Component/HomePage/HomePage";
import SingleGem from "./Component/RoutePages/Gems/GemsSingleProducts/SingeleProducr1/SingleGem";
import SingleMineral from "./Component/RoutePages/Minerals/SingleProducts/SingeleProducr1/SingleMineral";
import Cart from "./Component/Cart/Cart";

import FavCard from "./Component/FavCard/FavCard";
import MainContact from "./Component/MainContact/MainContact";
import logo from "./Component/images/logo.jpg"
import { Link } from "react-router-dom";
function App() {


  return (
    <div className="App">
            <Router>
 
         <header className="sticky top-0 z-50 w-full bg-white border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              {/* <div className="text-violet-600">⚠</div> */}
              {/* <div className="text-violet-600">⚠ */}
                <img src={logo} alt='' className='w-12'/>
              {/* </div> */}
              <span className="font-medium">Gemstone Haven</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              < Link to="Gems" className="text-sm">Gems </Link>
              < Link to="Minerals" className="text-sm">Minerals </Link>
              < Link className="text-sm">Offer </Link>
              < Link className="text-sm">Trnding  </Link>
              < Link className="text-sm">Gems </Link>
             
            </nav>
          </div>
          <div className="flex items-center gap-4">
            {/* <button className="p-2">🔍</button> */}
            <button className="p-2">🛒</button>
            {/* <button className="p-2">👤</button> */}
          </div>
        </div>
      </header>

        <Routes>


          <Route exact path="/" element={<HomePage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route exact path="/Gems" element={<Gems />} />
          <Route exact path="/Minerals" element={<Minerals />} />
          <Route
            exact
            path="/favoriteCategories/:userId"
            element={<FavCard />}
          />
          <Route exact path="/HomePage" element={<HomePage />} />
          <Route exact path="/SingleGem/:userId" element={<SingleGem />} />
          <Route exact path="/SingleMineral" element={<SingleMineral />} />
          <Route exact path="/MainContact" element={<MainContact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
