import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Carousel, Modal } from 'react-bootstrap';
import './Jewellery.css';

// Import images
// import cjew1 from '../Assests/cjew1.jpg';
// import cjew2 from '../Assests/cjew2.jpg';
// import cjew3 from '../Assests/cjew3.jpg';
// import cjew4 from '../Assests/cjew4.jpg';
// import cjew5 from '../Assests/cjew5.jpg';
// import cjew6 from '../Assets/cjew6.jpg';

import cjew1 from '../../Components/Assets/cjew1.jpg';
import cjew2 from '../../Components/Assets/cjew2.jpg';
import cjew3 from '../../Components/Assets/cjew3.jpg';
import cjew4 from '../../Components/Assets/cjew4.jpg';
import cjew5 from '../../Components/Assets/cjew5.jpg';
import cjew6 from '../../Components/Assets/cjew6.jpg';


// import images
// import jew1 from '../Assests/jew1.jpg';
// import jew2 from '../Assests/jew2.jpg';
// import jew3 from '../Assests/jew3.jpg';
// import jew4 from '../Assests/jew4.jpg';
// import jew6 from '../Assests/jew6.jpg';
// import jew7 from '../Assests/jew7.jpg';
// import jew8 from '../Assests/jew8.jpg';
// import jew9 from '../Assests/jew9.jpg';
import jew1 from '../../Components/Assets/jew1.jpg';
import jew2 from '../../Components/Assets/jew2.jpg';
import jew3 from '../../Components/Assets/jew3.jpg';
import jew4 from '../../Components/Assets/jew4.jpg';
import jew6 from '../../Components/Assets/jew6.jpg';
import jew7 from '../../Components/Assets/jew7.jpg';
import jew8 from '../../Components/Assets/jew8.jpg';
import jew9 from '../../Components/Assets/jew9.jpg';

 
// Import videos
// import jewelleryVideo from '../Assests/jewelleryvideo.mp4';
// import jewvideo from '../Assests/jewvideo.mp4';
// import jewvideo2 from '../Assests/jewvideo2.mp4';
// import jewvideo3 from '../Assests/jewvideo3.mp4';

import jewelleryVideo from '../../Components/Assets/jewelleryvideo.mp4';
import jewvideo from '../../Components/Assets/jewvideo.mp4';
import jewvideo2 from '../../Components/Assets/jewvideo2.mp4';
import jewvideo3 from '../../Components/Assets/jewvideo3.mp4';


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
            <img className="d-block w-100 carouselj-imagej" src={cjew1} alt="jew" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselj-imagej-containerj">
            <img className="d-block w-100 carouselj-imagej" src={cjew2} alt="jew" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselj-imagej-containerj">
            <img className="d-block w-100 carouselj-imagej" src={cjew3} alt="jew" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselj-imagej-containerj">
            <img className="d-block w-100 carouselj-imagej" src={cjew4} alt="jew" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselj-imagej-containerj">
            <img className="d-block w-100 carouselj-imagej" src={cjew5} alt="jew" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselj-imagej-containerj">
            <img className="d-block w-100 carouselj-imagej" src={cjew6} alt="jew" />
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Video Container Section */}
      <div className="videoj-containerj">
        <div className="videoj-cardj" onClick={() => handleVideoClick(jewelleryVideo)}>
          <video autoPlay  loop muted>
            <source src={jewelleryVideo} type="video/mp4" />
          </video>
        </div>
        <div className="videoj-cardj" onClick={() => handleVideoClick(jewvideo)}>
          <video autoPlay  loop muted>
            <source src={jewvideo} type="video/mp4" />
          </video>
        </div>
        <div className="videoj-cardj" onClick={() => handleVideoClick(jewvideo2)}>
          <video autoPlay  loop muted>
            <source src={jewvideo2} type="video/mp4" />
          </video>
        </div>
        <div className="videoj-cardj" onClick={() => handleVideoClick(jewvideo3)}>
          <video autoPlay  loop muted>
            <source src={jewvideo3} type="video/mp4" />
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
          <img src={jew1} alt="Minimalist Outfit" className="cardj-imagej" />
          <h5>Golden Just Bee-ing Ring</h5> </div>

        <div className="cardj">
          <img src={jew2} alt="Louis Vuitton Ankle Boots" className="cardj-imagej" />
          <h5>Silver Nectar lave set</h5>   </div>

        <div className="cardj">
          <img src={jew3} alt="Favourite Nude Lipsticks" className="cardj-imagej" />
          <h5>Silver U & Me Ring</h5>  </div>

        <div className="cardj">
          <img src={jew4} alt="Favourite Bags" className="cardj-imagej" />
          <h5>Rose Gold Bold Red earrings</h5>    </div>

        <div className="cardj">
          <img src={jew6} alt="Packing Tips" className="cardj-imagej" />
          <h5>Golden princes set</h5></div>

          <div className="cardj">
          <img src={jew7} alt="Packing Tips" className="cardj-imagej" />
          <h5>Rose gold Teardrop Jhumki</h5></div>

          <div className="cardj">
          <img src={jew8} alt="Packing Tips" className="cardj-imagej" />
          <h5>Silver Blooming crocus  Earrings</h5></div>

          <div className="cardj">
          <img src={jew9} alt="Packing Tips" className="cardj-imagej" />
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