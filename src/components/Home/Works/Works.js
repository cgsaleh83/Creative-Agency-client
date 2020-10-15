import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from './Card';
import work1 from '../../../images/carousel-1.png';
import work2 from '../../../images/carousel-2.png';
import work3 from '../../../images/carousel-3.png';
import './Work.css';

function Works() {

  
  
    return (
        <div className='card_container'>
            <div className='text-center'>
                <h2>Here are some of <span>our works</span></h2>
            </div>
            
            <Carousel>
                <Card number={work1 } />
                <Card number={work2} />
                <Card number={work3} />
            </Carousel>
            
        </div>
    );
}

export default Works;