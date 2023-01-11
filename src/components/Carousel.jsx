import React, {useState} from 'react'


function Carousel() {

    const slides = [
    ]

    return (
        <div className='px-10 py-5'>
            {/* <img className='rounded border-2 border-purple-light' src={imageOne} alt='Mensaje'/> */}
            <div style={{backgroundImage: `(${slides[0]})`}}></div>
        </div>
    )
}

export default Carousel