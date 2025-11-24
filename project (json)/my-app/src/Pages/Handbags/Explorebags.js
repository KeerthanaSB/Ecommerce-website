import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel, Modal } from 'react-bootstrap';

import React, { useState } from 'react';

// import images

import bags1 from '../../Components/Assets/bags1.jpg';
import bags2 from '../../Components/Assets/bags2.jpg';
import bags3 from '../../Components/Assets/bags3.jpg';
import bags4 from '../../Components/Assets/bags4.jpg';
import bags5 from '../../Components/Assets/bags5.jpg';
import bags6 from '../../Components/Assets/bags6.jpg';
import cbags1 from '../../Components/Assets/cbags1.jpg';
import cbags2 from '../../Components/Assets/cbags2.jpg';
import cbags3 from '../../Components/Assets/cbags3.jpg';
import cbags4 from '../../Components/Assets/cbags4.jpg';
import cbags5 from '../../Components/Assets/cbags5.jpg';
import cbags6 from '../../Components/Assets/cbags6.jpg';
import cbags7 from '../../Components/Assets/cbags7.jpg';

// import viedos
import bv1 from '../../Components/Assets/bv1.mp4'
import bv2 from '../../Components/Assets/bv2.mp4'
import bv3 from '../../Components/Assets/bv3.mp4'
import bv4 from '../../Components/Assets/bv4.mp4'

// import css
import './Explorebags.css';


    function Explorebags() {
        const [showModal, setShowModal] = useState(false);
        const [modalVideoSrc, setModalVideoSrc] = useState('');
      
        const handleVideoClick = (src) => {
          setModalVideoSrc(src);
          setShowModal(true);
        };
      
        const closeModal = () => {
          setShowModal(false);
          setModalVideoSrc('');
        };
  return (
    <div className="App1">
      <header className="App1-header1">
        <h1>Explore bags</h1>
      </header><hr></hr>

      <Carousel className="carousel1">
        <Carousel.Item>
          <div className="carousel1-image1-container1">
            <img
              className="d-block w-100 carousel1-image1"
              src={cbags1}
              alt="bags"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel1-image1-container1">
            <img
              className="d-block w-100 carousel1-image1"
              src={cbags2}
              alt="bags"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel1-image1-container1">
            <img
              className="d-block w-100 carousel1-image1"
              src={cbags3}
              alt="bags"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel1-image1-container1">
            <img
              className="d-block w-100 carousel1-image1"
              src={cbags4}
              alt="bags"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel1-image1-container1">
            <img
              className="d-block w-100 carousel1-image1"
              src={cbags5}
              alt="bags"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel1-image1-container1">
            <img
              className="d-block w-100 carousel1-image1"
              src={cbags6}
              alt="bags"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel1-image1-container1">
            <img
              className="d-block w-100 carousel1-image1"
              src={cbags7}
              alt="bags"
            />
          </div>
        </Carousel.Item>
      </Carousel>
   <hr />
   <div className="video1-container1">
        <div className="video1-card1" onClick={() => handleVideoClick(bv1)}>
          <video autoPlay  loop muted id="video">
            <source src={bv1} type="video/mp4" />
          </video>
        </div>
        <div className="video1-card1" onClick={() => handleVideoClick(bv2)}>
          <video autoPlay  loop muted id="video">
            <source src={bv2} type="video/mp4" />
          </video>
        </div>
        <div className="video1-card1" onClick={() => handleVideoClick(bv3)}>
          <video autoPlay  loop muted id="video">
            <source src={bv3} type="video/mp4" />
          </video>
        </div>
        <div className="video1-card1" onClick={() => handleVideoClick(bv4)}>
          <video autoPlay  loop muted id="video">
            <source src={bv4} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Video Modal */}
      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Header closeButton>     
        </Modal.Header>
        <Modal.Body>
          <video controls autoPlay>
            <source src={modalVideoSrc} type="video/mp4" />
          </video>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  <hr/>
  <b><h2>Lavie En Rose</h2></b>
  
  <div className="img1-container1">
     
        <img src={bags1} alt="Favourite Bags" className="card1-image11" />
        <img src={bags2} alt="Favourite Bags" className="card1-image11" />
        <img src={bags3} alt="Favourite Bags" className="card1-image11" />
      </div><br/>
  <hr/>
      <b><h2>Work Play Slay !</h2></b>
  <div className="img1-container1">
     
        <img src={bags4} alt="Favourite Bags" className="card1-image11" />
        <img src={bags5} alt="Favourite Bags" className="card1-image11" />
        <img src={bags6} alt="Favourite Bags" className="card1-image11" />

      </div>
      <hr/>
          <div className='contextj'>
            <h3>Related Searches</h3>
            <p>
            Popular Searches
Bags | Tote Bags | Side Bags | Office Bags Women | Ladies Purse | Men's Duffle Bags |<br/>
 Backpack for Women | Pink Bags | Tote Laptop Bags | Party Wear Handbags | Zipper Tote | Trolly Bags |<br/>
  Laptop Backpacks | School Bag | Clutches | Women's Wallets | Potli Bags | Satchel Bags | Men's Office Bags<br/>
   | Men's Sling Bags | Small Bags | Bridal Purse | Watches for Women |
   <br/> Sling Pouch for Men | Girlish Sling Bags | Black Sling Bag
 </p>
          </div>
    
  
</div>
  );
}

export default Explorebags;
