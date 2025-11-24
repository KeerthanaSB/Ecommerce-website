import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Carousel } from 'react-bootstrap';

// import Images
import c from '../../Components/Assets/c.jpg';
import calvincloth from '../../Components/Assets/calvin cloth.jpg';
import calvinmodest from '../../Components/Assets/calvinmodest.jpg';
import clavinwomens from '../../Components/Assets/calvinwomens.jpg';
import handmsaree from '../../Components/Assets/handm sraee.jpg';
import handmw from '../../Components/Assets/handmw.jpg';
import hero2 from '../../Components/Assets/hero2.jpg';
import hero3 from '../../Components/Assets/hero3.jpg';
import hero4 from '../../Components/Assets/hero4.jpg';
import hm from '../../Components/Assets/hm.jpg';
import lavishwomen from '../../Components/Assets/lavishwomen.jpg';
import mongodress from '../../Components/Assets/mongodress.jpg';
import mongotraditional from '../../Components/Assets/mongotraditional.jpg';
import mongow from '../../Components/Assets/mongow1.jpg';
import polo from '../../Components/Assets/polo.jpg';
import polowomen from '../../Components/Assets/polowomen.jpg';
import z from '../../Components/Assets/z.jpg';
import zaratrad from '../../Components/Assets/zaratrad.jpg';
import zarawomenwinter from '../../Components/Assets/zarawomenwinter.jpg';

// import css
import './explorew.css';

function Explorewomen() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Womens Outfit Explore</h1>
      </header>
      <div className="text">
        <p>Discover stylish menswear from Zara, H&M, US Polo blending urban flair, affordability, and American sport.</p>
      </div>
      <div className="img-container">
      <Carousel className="carouselw">
        <Carousel.Item>
          <div className="carouselw-imagew-containerw">
            <img
              className="d-block w-100 carouselw-imagew"
              src={hero2}
              alt="Brand"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselw-imagew-containerw">
            <img
              className="d-block w-100 carouselw-imagew"
              src={hero3}
              alt="Louis Vuitton Ankle Boots"
            />
          </div>
          
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselw-imagew-containerw">
            <img
              className="d-block w-100 carouselw-imagew"
              src={hero4}
              alt="Favourite Nude Lipsticks"
            />
            
          </div>
          
        </Carousel.Item>

        
        
      </Carousel>
        <div className="text-center">
          <p>SHOP UPGRADED STAPLES</p>
          <h2>WHAT'S NEW THIS WEEK</h2>
        </div><br /><br />
      </div>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <div className="row card-row">
              <div className="col-md-3 card-wrapper1">
                <Card>
                  <Card.Img variant="top" src={calvinmodest} />
                  <Card.Body>
                    <Card.Text>
                      Modest Fashion for Women |<br />Modest Outfit, Modest Fashion
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 card-wrapper1">
                <Card>
                  <Card.Img variant="top" src={handmsaree} />
                  <Card.Body>
                    <Card.Text>
                      Metallic Silver Party Wear Saree <br />with Designer Blouse Party Wear
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 card-wrapper1">
                <Card>
                  <Card.Img variant="top" src={polowomen} />
                  <Card.Body>
                    <Card.Text>
                      H&M presents "The Dress Edit<br />with 5 Key Styles to Summer"
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 card-wrapper1">
                <Card>
                  <Card.Img variant="top" src={calvincloth} />
                  <Card.Body>
                    <Card.Text>
                      10 Sustainable Work Clothes for Women - The Good Trade
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row card-row">
              <div className="col-md-3 card-wrapper1">
                <Card>
                  <Card.Img variant="top" src={clavinwomens} />
                  <Card.Body>
                    <Card.Text>
                      R Fashion Women A-Line Yellow Black Dress
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 card-wrapper1">
                <Card>
                  <Card.Img variant="top" src={mongotraditional} />
                  <Card.Body>
                    <Card.Text>
                      Caffoy Cloth Company Women's Georgette Cloth
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 card-wrapper1">
                <Card>
                  <Card.Img variant="top" src={lavishwomen} />
                  <Card.Body>
                    <Card.Text>
                      Natalya 3D Flower Detail Satin Maxi Dress in Blue
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 card-wrapper1">
                <Card>
                  <Card.Img variant="top" src={zaratrad} />
                  <Card.Body>
                    <Card.Text>
                      Zara Shahjahan D22 Bano A Eid Luxury Lawn
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div><br />
      <hr /><br />
      <div className="text2">
        <h2>AS FEATURED IN</h2>
        <div className="logos">
          <img src={polo} alt="Polo" className="card-image1" />
          <img src={z} alt="Z" className="card-image1" />
          <img src={c} alt="C" className="card-image1" />
          <img src={hm} alt="H&M" className="card-image1" />
        </div><br /><br />
        <main className="App-main">
          <div className="card2">
            <img src={zarawomenwinter} alt="Zara Outfit for Winter" className="card-image2" />
            <h5>Zara Outfit for Winter</h5>
          </div>
          <div className="card2">
            <img src={handmw} alt="H&M Conscious Limited Edition Dress" className="card-image2" />
            <h5>H&M Conscious Limited Edition Dress</h5>
          </div>
          <div className="card2">
            <img src={mongodress} alt="Mongo Dolly Sets (Unstitched Suit)" className="card-image2" />
            <h5>Mongo Dolly Sets (Unstitched Suit) Shubhramabha 99</h5>
          </div>
          <div className="card2">
            <img src={mongow} alt="Mongo Women Yellow & Brown Floral Printed Midi Wrap Dress" className="card-image2" />
            <h5>Mongo Women Yellow & Brown<br />Floral Printed Midi Wrap Dress</h5>
          </div>
        </main>
        <hr />
        <div className="content">
          <h2>THE ART OF CRAFTSMANSHIP</h2><br />
          <p>
            Step into the luxurious world of Parsied, a refined ready-to-wear label, where statement<br />
            takes centre stage. Big occasions are at the heart of everything - Ladies Day, cocktails, weddings:<br />
            we’re here for those unforgettable moments.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Explorewomen;
