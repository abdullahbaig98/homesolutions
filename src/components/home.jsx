import React from 'react'
import { Carousel } from 'react-bootstrap';
import image1 from "../images/sec1_1.jpg";
import image2 from "../images/sec1_2.jpg";
import image3 from "../images/sec1_3.jpg"

const home = () => {
    const images = [
        { src: image1, alt: 'Image 1', caption: 'This is our Plumbing Service' },
        { src: image2, alt: 'Image 2', caption: 'This is our Painting Service' },
        { src: image3, alt: 'Image 3', caption: 'This is our Electrition Service' },
      ];
  return (
    <div id='home'>
        <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100 "  height={600} src={image.src} alt={image.alt} />
          <Carousel.Caption>
            <h3>{image.caption}</h3>
            <button className='btn btn-primary'>Book Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  )
}

export default home
