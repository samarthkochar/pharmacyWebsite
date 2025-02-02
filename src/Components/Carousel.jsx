import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const images = [
  'Public/BnrImg/bnr1.jpg',
  'Public/BnrImg/bnr2.jpg',
  'Public/BnrImg/bnr3.jpg',
  'Public/BnrImg/bnr4.jpg',
  'Public/BnrImg/bnr5.jpg',
];

const Carousel = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const goNext = () => {
    setCurrIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goPrev = () => {
    setCurrIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  useEffect(() => {
    setTimeout(()=>{
      setCurrIndex((prevIndex) => (prevIndex + 1) % images.length);
    },4000)
  }, [currIndex])
  
  return (
    <Wrapper>
      <div className="banner">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="bannerImgWrapper"
            style={{
              opacity: currIndex === idx ? 1 : 0,
              zIndex: currIndex === idx ? 1 : 0,
            }}
          >
            <img className="bannerImg" src={image} alt={`banner ${idx}`} />
          </div>
        ))}
      </div>
      <div className="arrow-btn">
        <button onClick={goPrev} className="arrow left-btn">
          ❮
        </button>
        <button onClick={goNext} className="arrow right-btn">
          ❯
        </button>
      </div>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.section`
  .banner {
    display: flex;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 400px;
     border-radius: 20px; /* Apply border radius to the container */
    overflow: hidden; /* To ensure the image content respects the border radius */
  }

  .bannerImgWrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: opacity 1s ease-in-out;
  }

  .bannerImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    boder-radius: 20px;
  }

  .arrow-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute; /* Ensure this is positioned relative to the container */
    width: 100%;
    height: 100%;
    top: 50px;
    z-index: 2; /* Ensure arrows are on top */
  }

  .arrow {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    top: 50%;
    position: absolute;
    height: 60px; /* Adjust height for buttons */
    width: 60px; /* Adjust width for buttons */
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 35px;
    font-weight: bolder;
    transform: translateY(-50%); /* Vertically center the arrows */
  }

  .arrow:hover {
    background-color: rgba(37, 30, 30, 0.5);
  }

  .left-btn {
    left: 10px; /* Position left arrow */
  }

  .right-btn {
    right: 10px; /* Position right arrow */
  }
`;
