import React from 'react';

const Slider = () => {
  return (
    <div className="home-slider-bg" style={{ backgroundImage: 'url(/images/electbus.jpg)' }}>
      <div className="container">
        <div className="slider-dtl">
          <h4 className="slider-sub-heading">Electricfy</h4>
          <h1 className="slider-heading">African region</h1>
          <p>Be it 12 m, 18 m or custom sizes – our low-noise and sustainable e-city buses ensure that the future of public transport starts today. Fully operational throughout the day.</p>
          <div className="slider-btn">
            <a href="#" className="btn btn-orange">Read More</a>
            <a href="#" className="btn btn-default">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;