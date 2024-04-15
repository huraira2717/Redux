import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../img/71207337-7f57-467c-bcd5-46d2987300b6.jpg_1200x1200.jpg'
import img2 from '../img/lipton.jpg'
import img3 from '../img/shirt.jpeg'
import img4 from '../img/a06ff5d9-30d1-4960-97d8-404f3eedc7bb (1).jpg'
import img5 from '../img/every.jpg'
import img6 from '../img/8a182606-dbc7-46b3-a8a7-ee71a720f1a5.jpg'
import img7 from '../img/8e0229f5-7a56-454b-b3fc-ad526f974294.jpg'
import img8 from '../img/8738a9f8-aec3-495a-96f3-c8e116f666ef.jpg'
import img9 from '../img/cb31210b-5cb4-4b69-b078-435c96a171e9.png'
import img10 from '../img/e5e5831e-5fef-496e-8ca0-95508958a383.jpg'

function DemoCarousel() {
    return (
        <Carousel
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            className='my-4 md:my-8 lg:my-12 w-full md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto sm:w-[60%]'
        >
            <div className='carousel-item'>
                <img src={img1} alt='Minato' />
            </div>
            <div className='carousel-item'>
                <img src={img2} alt='Itachi' />
            </div>
            <div className='carousel-item'>
                <img src={img3} alt='Hinata' />
            </div>
            <div className='carousel-item'>
                <img src={img4} alt='Hinata' />
            </div>
            <div className='carousel-item'>
                <img src={img5} alt='Hinata' />
            </div>
            <div className='carousel-item'>
                <img src={img6} alt='Hinata' />
            </div>
            <div className='carousel-item'>
                <img src={img7} alt='Hinata' />
            </div>
            <div className='carousel-item'>
                <img src={img8} alt='Hinata' />
            </div>
            <div className='carousel-item'>
                <img src={img9} alt='Hinata' />
            </div>
            <div className='carousel-item'>
                <img src={img10} alt='Hinata' />
            </div>
        </Carousel>
    );
}

export default DemoCarousel;
