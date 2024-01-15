import React from 'react';

import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css"

import { Carousel } from 'react-responsive-carousel';

const Services = () => {
    return <div>
        <Carousel
            infiniteLoop
            autoPlay
            showArrows={false}
            showStatus={false}
            // showIndicators={false}
            showThumbs={false}
            interval={1000}>
            <div>
                <img src={img3} alt="item1" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={img4} alt="item2" />
                <p className='legend'>Android App</p>
            </div>
        </Carousel>

    </div>
}

export default Services