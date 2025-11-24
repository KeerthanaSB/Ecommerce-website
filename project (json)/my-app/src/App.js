import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Categories from './Pages/Categories/Categories';
import Womencat from './Components/womencategory/Womencat';
import Dresses from './Pages/dresses/Dresses';
import Heels from './Pages/heels/Heels';
import Fashion from './Pages/fashion/Fashion';
import Shoes from './Pages/shoes/Shoes';
import Shorts from './Pages/shorts/Shorts';
import Cart from './Pages/cart/Cart';
import Loginn from './Pages/Login/Loginn';
import Signup from './Pages/Signup/Signup';
import {AuthProvider} from './Pages/AuthProvider';
import ProtectedRoute from './Pages/ProtectedRoute';
import Buynow from './Pages/Buynow/Buynow'; 
import AboutUs from './Components/AboutUs/AboutUs';
import Feedback from './Components/Feedback/Feedback';
import Shop from './Components/Shop/Shop';
import Jewellery from './Pages/jewellaryexplore/Jewellery';
import Explorebags from './Pages/Handbags/Explorebags';
import Explorewomen from './Pages/womensexplore/Explorewomen';
import Expolermen from './Pages/mensexplore/Expolermen';

function App() {
  return (
    <Router>
       <AuthProvider>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/shop/Categories" element={<Categories />} />
          <Route path="/shop/Womencat" element={<Womencat />} />
          <Route path="/Dresses" element={<Dresses />} />
          <Route path="/Heels" element={<Heels />} />
          <Route path="/Fashion" element={<Fashion />} />
          <Route path="/Shoes" element={<Shoes />} />
          <Route path="/Shorts" element={<Shorts />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Loginn" element={<Loginn />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Buynow" element={<Buynow />} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Feedback" element={<Feedback/>} />
          <Route path="/Shop" element={<Shop/>} />
          <Route path="/Jewellery" element={<Jewellery/>} />
          <Route path="/Explorebags" element={<Explorebags/>} />
          <Route path="/Explorewomen" element={<Explorewomen/>} />
          <Route path="/Expolermen" element={<Expolermen/>} />



          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Loginn />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
