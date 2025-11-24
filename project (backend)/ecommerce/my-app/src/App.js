import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs';
import Feedback from './Components/Feedback/Feedback';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Shop/Shop';
import Womencat from './Components/womencategory/Womencat';
import { AuthProvider } from './Pages/AuthProvider';
import Bags from './Pages/Bags/Bags';
import Buynow from './Pages/Buynow/Buynow';
import Cart from './Pages/cart/Cart';
import Categories from './Pages/Categories/Categories';
import Dresses from './Pages/dresses/Dresses';
import Fashion from './Pages/fashion/Fashion';
import Favorites from './Pages/Favourite/Favorites';
import Explorebags from './Pages/Handbags/Explorebags';
import Heels from './Pages/heels/Heels';
import Jewellary from './Pages/Jewellary/Jewellary';
import Jewellery from './Pages/jewellaryexplore/Jewellery';
import Loginn from './Pages/Login/Loginn';
import Expolermen from './Pages/mensexplore/Expolermen';
import ProtectedRoute from './Pages/ProtectedRoute';
import Shoes from './Pages/shoes/Shoes';
import Shorts from './Pages/shorts/Shorts';
import Signup from './Pages/Signup/Signup';
import Explorewomen from './Pages/womensexplore/Explorewomen';

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
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Feedback" element={<Feedback/>} />
          <Route path="/Shop" element={<Shop/>} />
          <Route path="/Jewellery" element={<Jewellery/>} />
          <Route path="/Explorebags" element={<Explorebags/>} />
          <Route path="/Explorewomen" element={<Explorewomen/>} />
          <Route path="/Expolermen" element={<Expolermen/>} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Buynow" element={<Buynow />} />
          <Route path="/Bags" element={<Bags />} />
          <Route path="/Jewellary" element={<Jewellary />} />


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
