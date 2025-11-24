import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';


// import Image 
import brand from '../../Components/Assets/brand.jpg';
import c from '../../Components/Assets/c.jpg';
import calvin from '../../Components/Assets/calvin1.jpg';
import Hm from '../../Components/Assets/h&mmen.jpg';
import hm from '../../Components/Assets/hm.jpg';
import m from '../../Components/Assets/m.jpg';
import mongo from '../../Components/Assets/mongo.jpg';
import mongo1 from '../../Components/Assets/mongo1.jpg';
import polo from '../../Components/Assets/polo.jpg';
import uspolo from '../../Components/Assets/us polo.jpeg';
import us from '../../Components/Assets/us.jpg';
import z from '../../Components/Assets/z.jpg';
import zara from '../../Components/Assets/zara.jpg';
import zaramen2 from '../../Components/Assets/zaramen2.jpg';
import mens from '../../Components/Assets/mens.mp4'

// import css
import './exploer.css';

function Expolermen() {
  return (
    <div className="Appp">
      <header className="Appp-headerr">
        <h1>Mens Clothes</h1>
      </header>
      <div className='textt'>
        <p>Discover stylish menswear from Zara, H&M, US Polo blending urban flair, affordability, and American sport.</p>
        </div>

        <div className="video-container">
      <video autoPlay loop muted id="video">
        <source src={mens} type="video/mp4" />
      </video>
    </div><br/><br/>

      <Carousel className="carousell">
        <Carousel.Item>
          <div className="carousell-imagee-containerr">
            <img
              className="d-block w-100 carousel-imagee"
              src={brand}
              alt="Brand"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousell-imagee-containerr">
            <img
              className="d-block w-100 carousell-imagee"
              src={zara}
              alt="Louis Vuitton Ankle Boots"
            />
          </div>
          
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousell-imagee-containerr">
            <img
              className="d-block w-100 carousell-imagee"
              src={uspolo}
              alt="Favourite Nude Lipsticks"
            />
            
          </div>
          
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousell-imagee-containerr">
            <img
              className="d-block w-100 carousell-imagee"
              src={mongo1}
              alt="Favourite Nude Lipsticks"
            />
            
          </div>
        
        </Carousel.Item>
        
      </Carousel>
      
      <main className="Appp-mainn">
        <div className="cardd">
          <img src={zaramen2} alt="Minimalist Outfit" className="cardd-imagee" />
          <h5>Minimalist Outfit with Charles & Keith Bag</h5>
        </div>
        <div className="cardd">
          <img src={us} alt="Louis Vuitton Ankle Boots" className="cardd-imagee" />
          <h5>Louis Vuitton Pillow Comfort Ankle Boots</h5>
        </div>
        <div className="cardd">
          <img src={mongo} alt="Favourite Nude Lipsticks" className="cardd-imagee" />
          <h5>Mongo man summer style inspriation</h5>
        </div>
        <div className="cardd">
          <img src={Hm} alt="Favourite Bags" className="cardd-imagee" />
          <h5>sharper look withclassic and contemporary from H&M</h5>
        </div>
        <div className="cardd">
          <img src={calvin} alt="Packing Tips" className="cardd-imagee" />
          <h5>calvin klein jeans jakets</h5>
          
  </div>   
  
      </main>
      {/* <hr/>  <img src={m} alt="Favourite Bags" className="cardd-imagee1" /> */}

      <div className='logooo'>
      <img src={m} alt="Favourite Bags" className="cardd-imagee1" />
  <img src={polo} alt="Favourite Bags" className="cardd-imagee1" />
  <img src={z} alt="Favourite Bags" className="cardd-imagee1" />
  <img src={c} alt="Favourite Bags" className="cardd-imagee1" />
  <img src={hm} alt="Favourite Bags" className="cardd-imagee1" />

  </div>

  <hr />
        <div className="content">
          <h2>THE ART OF CRAFTSMANSHIP</h2><br />
          <p>
          Parsied lives to inspire people to be expressive.<br/>
          And by being a strong voice, we hope to inspire more people to join our tribe.<br/>
           To us, this feeling is captured directly in the spirit of the city of Mumbai.<br/>
            Mumbai will embrace you while you do what you must, this city has a fragrance of inclusivity about it.<br/>
            This is the city where Mufti was born, forged, and refined.
          </p>
        </div>
  </div>
  
  );
}

export default Expolermen;
