import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="col-md-7" style={{
      height: '40vh',
      width: '100vw',
      fontWeight: "bold",
      color: "WHITE",
      backgroundPosition: "center",
    }}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="client/src/Pages/Images/cool-background-2.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="client/src/Pages/Images/cool-background-2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="client/src/Pages/Images/cool-background-2.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <h3>WELCOME TO CAMPUSHUB</h3>
    </div>
  );
};

export default Home;