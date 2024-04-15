import React from 'react'
import './Box.css'
import img from '../img/a06ff5d9-30d1-4960-97d8-404f3eedc7bb (1).jpg'
import img1 from '../img/mart.png'
import img2 from '../img/fashion.png'
import img3 from '../img/beauty.png'
import img4 from '../img/Home.png'
import img5 from '../img/new.png'
import img6 from '../img/flash.png'
import img7 from '../img/daraz.png'







function cardBox() {
  return (
    <>
     <div className='courses'>
      
     <div className='box'>
        <img src={img} className='h-20 w-full rounded-2xl mt-1   mx-auto ' alt='img'/>
        <h1 className='mt-4 '>Free Delevery</h1>
      </div>

      <div className='box'>
        <img src={img1} className='h-20 w-full rounded-xl mt-1   mx-auto ' alt='img'/>
        <h1 className='mt-4 '>Mart</h1>
      </div>

      <div className='box'>
        <img src={img2} className='h-20 w-full rounded-2xl mt-1   mx-auto ' alt='img'/>
        <h1 className='mt-4 '>Fashion</h1>
      </div>

      <div className='box'>
        <img src={img3} className='h-20 w-full rounded-2xl mt-1   mx-auto ' alt='img'/>
        <h1 className='mt-4 '>Beauty</h1>
      </div>

      <div className='box'>
        <img src={img4} className='h-20 w-full rounded-2xl mt-1   mx-auto ' alt='img'/>
        <h1 className='mt-4 '>Hom & Decor</h1>
      </div>

      <div className='box'>
        <img src={img5} className='h-20 w-full rounded-2xl mt-1   mx-auto ' alt='img'/>
        <h1 className='mt-4 '>Like New</h1>
      </div>
      

      <div className='box'>
        <img src={img6} className='h-20 w-full rounded-2xl mt-1   mx-auto ' alt='img'/>
        <h1 className='mt-4 '>Flash sale</h1>
      </div>

      <div className='box'>
        <img src={img7} className='h-20 w-full rounded-2xl mt-1   mx-auto ' alt='img'/>
        <h1 className='mt-4 '>Flash sale</h1>
      </div>

    </div>
    </>
  )
}

export default cardBox