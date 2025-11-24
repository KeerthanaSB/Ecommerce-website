import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel, Modal } from 'react-bootstrap';

import React, { useState } from 'react';


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
              src='/Assets/cbags1.jpg'
              alt="bags"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel1-image1-container1">
            <img
              className="d-block w-100 carousel1-image1"
              src='/Assets/cbags2.jpg'
              alt="bags"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel1-image1-container1">
            <img
              className="d-block w-100 carousel1-image1"
              src='/Assets/cbags3.jpg'
              alt="bags"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel1-image1-container1">
            <img
              className="d-block w-100 carousel1-image1"
              src='/Assets/cbags4.jpg'
              alt="bags"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel1-image1-container1">
            <img
              className="d-block w-100 carousel1-image1"
              src='/Assets/cbags5.jpg'
              alt="bags"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel1-image1-container1">
            <img
              className="d-block w-100 carousel1-image1"
              src='/Assets/cbags6.jpg'
              alt="bags"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel1-image1-container1">
            <img
              className="d-block w-100 carousel1-image1"
              src='/Assets/cbags7.jpg'
              alt="bags"
            />
          </div>
        </Carousel.Item>
      </Carousel>
   <hr />
   <div className="video1-container1">
  <div className="video1-card1" onClick={() => handleVideoClick('/Assets/bv1.mp4')}>
    <video autoPlay loop muted id="video">
      <source src="/Assets/bv1.mp4" type="video/mp4" />
    </video>
  </div>
  <div className="video1-card1" onClick={() => handleVideoClick('/Assets/bv2.mp4')}>
    <video autoPlay loop muted id="video">
      <source src="/Assets/bv2.mp4" type="video/mp4" />
    </video>
  </div>
  <div className="video1-card1" onClick={() => handleVideoClick('/Assets/bv3.mp4')}>
    <video autoPlay loop muted id="video">
      <source src="/Assets/bv3.mp4" type="video/mp4" />
    </video>
  </div>
  <div className="video1-card1" onClick={() => handleVideoClick('/Assets/bv4.mp4')}>
    <video autoPlay loop muted id="video">
      <source src="/Assets/bv4.mp4" type="video/mp4" />
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
     
        <img src='/Assets/bags1.jpg'alt="Favourite Bags" className="card1-image11" />
        <img src='/Assets/bags2.jpg' alt="Favourite Bags" className="card1-image11" />
        <img src='/Assets/bags3.jpg' alt="Favourite Bags" className="card1-image11" />
      </div><br/>
  <hr/>
      <b><h2>Work Play Slay !</h2></b>
  <div className="img1-container1">
     
        <img src='/Assets/bags4.jpg' alt="Favourite Bags" className="card1-image11" />
        <img src='/Assets/bags5.jpg' alt="Favourite Bags" className="card1-image11" />
        <img src='/Assets/bags6.jpg' alt="Favourite Bags" className="card1-image11" />

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
