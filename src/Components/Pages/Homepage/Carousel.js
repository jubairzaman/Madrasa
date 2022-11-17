import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselSlider = () => {
    return (
      <div className='h-50 '>
      <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50 img-fluid"
      src="https://i.ibb.co/Pts5tpG/Yellow-and-White-Geometric-Business-Facebook-Cover-7.png"
      
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50 img-fluid"
      src="https://i.ibb.co/PW77pV9/Yellow-and-White-Geometric-Business-Facebook-Cover-6.png"
     
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50 img-fluid"
      src="https://i.ibb.co/9wqFYCv/Yellow-and-White-Geometric-Business-Facebook-Cover-5.png"
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50 img-fluid"
      src="https://i.ibb.co/C0zhz8C/Yellow-and-White-Geometric-Business-Facebook-Cover-4.png"
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
    </div>
    );
};

export default CarouselSlider;