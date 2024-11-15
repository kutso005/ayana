import React from 'react';
import logo from "./../assets/image/logo.webp";

export default function Portfolio() {
  return (
    <div className='container'>
      <h1 className='title'>Portfolio</h1>
      <div className='grid'>
        <div className='grid-item'>
          <img src={logo} alt='Portfolio item 1' />
          <span className='caption'>Project 1</span>
        </div>
        <div className='grid-item'>
          <img src={logo} alt='Portfolio item 2' />
          <span className='caption'>Project 2</span>
        </div>
        <div className='grid-item'>
          <img src={logo} alt='Portfolio item 3' />
          <span className='caption'>Project 3</span>
        </div>
        <div className='grid-item'>
          <img src={logo} alt='Portfolio item 4' />
          <span className='caption'>Project 4</span>
        </div>
        <div className='grid-item'>
          <img src={logo} alt='Portfolio item 5' />
          <span className='caption'>Project 5</span>
        </div>
        <div className='grid-item'>
          <img src={logo} alt='Portfolio item 6' />
          <span className='caption'>Project 6</span>
        </div>
       
      </div>
    </div>
  );
}
