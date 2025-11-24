import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Carousel, Modal } from 'react-bootstrap';
import './Jewellery.css';



// import cjew1 from '../../Components/Assets/cjew1.jpg';
// import cjew2 from '../../Components/Assets/cjew2.jpg';
// import cjew3 from '../../Components/Assets/cjew3.jpg';
// import cjew4 from '../../Components/Assets/cjew4.jpg';
// import cjew5 from '../../Components/Assets/cjew5.jpg';
// import cjew6 from '../../Components/Assets/cjew6.jpg';



// import jew1 from '../../Components/Assets/jew1.jpg';
// import jew2 from '../../Components/Assets/jew2.jpg';
// import jew3 from '../../Components/Assets/jew3.jpg';
// import jew4 from '../../Components/Assets/jew4.jpg';
// import jew6 from '../../Components/Assets/jew6.jpg';
// import jew7 from '../../Components/Assets/jew7.jpg';
// import jew8 from '../../Components/Assets/jew8.jpg';
// import jew9 from '../../Components/Assets/jew9.jpg';

 

// import jewelleryVideo from '../../Components/Assets/jewelleryvideo.mp4';
// import jewvideo from '../../Components/Assets/jewvideo.mp4';
// import jewvideo2 from '../../Components/Assets/jewvideo2.mp4';
// import jewvideo3 from '../../Components/Assets/jewvideo3.mp4';


function Jewellery() {
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
    <div className="Appj">
      <header className="Appj-headerj">
        <h1>Jewellery Explore</h1>
      </header>
    
      {/* Carousel Section */}
      <Carousel className="carouselj">
        <Carousel.Item>
          <div className="carouselj-imagej-containerj">
            <img className="d-block w-100 carouselj-imagej" src='/Assets/cjew1.jpg' alt="jew" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselj-imagej-containerj">
            <img className="d-block w-100 carouselj-imagej" src='/Assets/cjew2.jpg' alt="jew" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselj-imagej-containerj">
            <img className="d-block w-100 carouselj-imagej" src='/Assets/cjew3.jpg' alt="jew" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselj-imagej-containerj">
            <img className="d-block w-100 carouselj-imagej" src='/Assets/cjew4.jpg' alt="jew" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselj-imagej-containerj">
            <img className="d-block w-100 carouselj-imagej" src='/Assets/cjew5.jpg' alt="jew" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselj-imagej-containerj">
            <img className="d-block w-100 carouselj-imagej" src='/Assets/cjew6.jpg' alt="jew" />
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Video Container Section */}
      <div className="videoj-containerj">
        <div className="videoj-cardj" onClick={() => handleVideoClick('/Assets/jewelleryvideo.mp4')}>
          <video autoPlay  loop muted>
            <source src='/Assets/jewelleryvideo.mp4' type="video/mp4" />
          </video>
        </div>
        <div className="videoj-cardj" onClick={() => handleVideoClick('/Assets/jewvideo.mp4')}>
          <video autoPlay  loop muted>
            <source src='/Assets/jewvideo.mp4' type="video/mp4" />
          </video>
        </div>
        <div className="videoj-cardj" onClick={() => handleVideoClick('/Assets/jewvideo2.mp4')}>
          <video autoPlay  loop muted>
            <source src='/Assets/jewvideo2.mp4' type="video/mp4" />
          </video>
        </div>
        <div className="videoj-cardj" onClick={() => handleVideoClick('/Assets/jewvideo3.mp4')}>
          <video autoPlay  loop muted>
            <source src='/Assets/jewvideo3.mp4' type="video/mp4" />
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

      <hr />
    
      <main className="Appj-mainj">
        <div className="cardj">
          <img src='/Assets/jew1.jpg' alt="Minimalist Outfit" className="cardj-imagej" />
          <h5>Golden Just Bee-ing Ring</h5> </div>

        <div className="cardj">
          <img src='/Assets/jew2.jpg' alt="Louis Vuitton Ankle Boots" className="cardj-imagej" />
          <h5>Silver Nectar lave set</h5>   </div>

        <div className="cardj">
          <img src='/Assets/jew3.jpg' alt="Favourite Nude Lipsticks" className="cardj-imagej" />
          <h5>Silver U & Me Ring</h5>  </div>

        <div className="cardj">
          <img src='/Assets/jew4.jpg' alt="Favourite Bags" className="cardj-imagej" />
          <h5>Rose Gold Bold Red earrings</h5>    </div>

        <div className="cardj">
          <img src='/Assets/jew6.jpg' alt="Packing Tips" className="cardj-imagej" />
          <h5>Golden princes set</h5></div>

          <div className="cardj">
          <img src='/Assets/jew7.jpg' alt="Packing Tips" className="cardj-imagej" />
          <h5>Rose gold Teardrop Jhumki</h5></div>

          <div className="cardj">
          <img src='/Assets/jew8.jpg' alt="Packing Tips" className="cardj-imagej" />
          <h5>Silver Blooming crocus  Earrings</h5></div>

          <div className="cardj">
          <img src='/Assets/jew9.jpg' alt="Packing Tips" className="cardj-imagej" />
          <h5>Rose gold Sky of lov Bracelet</h5></div>

</main>
          <hr/>
          <div className='contextj'>
            <h3>Related Searches</h3>
            <p>
             <strong>Rings</strong> 
              Gold Rings | Solitaire Rings | Stone Rings | Silver Ring For Mens<br/>

          <b> Earrings</b> 
Gold Earrings | Diamond Earrings | Kids Earrings | Jhumka Earrings | Hoop Earrings |
 Stud Earrings | Pearl Earrings | Sui Dhaga Earrings | <br/>
Chandbali Earrings | Earcuff Earrings | Fancy Earrings | Daily Wear Earrings | Round Earrings<br/>

<b>Rings</b>
Engagement Ring | Couple Ring | Wedding Ring | Vanki Ring | Name Ring | Promise Rings

 </p>
          </div>
          </div>
  );
}

export default Jewellery;