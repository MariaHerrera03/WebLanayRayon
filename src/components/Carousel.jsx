import React from 'react'
import imageOne from '../assets/img/imgCarouselOne.png';

function Carousel() {
    return (
        <div className='px-10 py-5'>
            <img className='rounded border-2 border-purple-light' src={imageOne} alt='Mensaje'/>
        </div>
    )
}

export default Carousel