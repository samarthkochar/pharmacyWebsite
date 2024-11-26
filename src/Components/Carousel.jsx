import React, { useCallback, useState } from 'react';
import './CarouselStyle.css'
const images = [
    'Public/BnrImg/bnr1.jpg',
    'Public/BnrImg/bnr2.jpg',
    'Public/BnrImg/bnr3.jpg',
    'Public/BnrImg/bnr4.jpg',
    'Public/BnrImg/bnr5.jpg',
];

const Carousel = () => {
  const[currIndex,setCurrIndex]=useState(0);

  const goNext=()=>{
    setCurrIndex((prevIndex)=>(prevIndex+1)%images.length);
  }

  const goPrev=()=>{
    setCurrIndex((prevIndex)=>(prevIndex-1+ images.length)% images.length);
  }
  return (
    <>
    <div className='banner'>
        {images.map((image, idx) => {
            return (
                <div>
                <img className='bannerImg' key={idx} src={images[currIndex]} />
                </div>
            );
        })}
    </div>
    <div className='arrow-btn'>
    <button onClick={goPrev} className='arrow left-btn'>❮</button>
    <button onClick={goNext} className='arrow right-btn'>❯</button>
    </div>
    </>
  );
}

export default Carousel;

