import React, {useState} from 'react'
import {FaChevronLeft, FaChevronRight, FaCircle} from 'react-icons/fa'


function Carousel() {

    const slides = [
        { url: 'https://github.com/MariaHerrera03/ImageBank/blob/main/imgCarouselOne.png?raw=true',},
        { url: 'https://github.com/MariaHerrera03/ImageBank/blob/main/imgCarouselTwo.png?raw=true',},
        { url: 'https://github.com/MariaHerrera03/ImageBank/blob/main/imgCarouselThree.png?raw=true',},
        { url: 'https://github.com/MariaHerrera03/ImageBank/blob/main/imgCarouselFour.png?raw=true',},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='h-56 w-full py-6 px-5 relative group'>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full bg-center bg-cover duration-500 rounded border-2 border-purple-light'>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 mx-2 bg-purple-light/50 text-sand-bg cursor-pointer'>
                <FaChevronLeft onClick={prevSlide} size={25}/>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 mx-2 bg-purple-light/50 text-sand-bg cursor-pointer'>
                <FaChevronRight onClick={nextSlide} size={25}/>
            </div>
            <div className='flex justify-center py-1'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='cursor-pointer'>
                        <FaCircle className='fill-purple-light p-2' size={25}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel