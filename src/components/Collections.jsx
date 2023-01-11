import React from 'react'
import imageOne from '../assets/img/imgCollOne.png';
import imageTwo from '../assets/img/imgCollTwo.png';
import imageThree from '../assets/img/imgCollThree.png';


function Collections() {
    return (
        <div>
            <div className='containerOne px-10 py-4'>
                <h1 className='text-center text-magenta-dark text-xl leading-5'>COLECCIONES</h1>
            </div>
            <div className='containerTwo bg-orange-bg mx-10 my-2 grid grid-cols-2 items-center justify-items-center'>
                <div className='text-orange-dark text-base text-center px-6'>
                    <h2 className='font-bold tracking-widest'>Personalizados</h2>
                    <h3 className='leading-5 text-center'>Of the printing and typesetting industry.</h3>
                </div>
                <div>
                    <a href=''><img className='' src={imageOne} alt='Imagen personalizados'/></a>
                </div>
                <div>
                    <a href=''><img className='' src={imageTwo} alt='Imagen personalizados'/></a>
                </div>
                <div className='text-orange-dark text-base text-center px-6'>
                    <h2 className='font-bold tracking-widest'>Religiosos</h2>
                    <h3 className='leading-5'>Of the printing and typesetting industry.</h3>
                </div>
                <div className='text-orange-dark text-base text-center px-6'>
                    <h2 className='font-bold tracking-widest'>Navideños</h2>
                    <h3 className='leading-5'>Of the printing and typesetting industry.</h3>
                </div>
                <div>
                    <a href=''><img className='' src={imageThree} alt='Imagen personalizados'/></a>
                </div>
            </div>
        </div>
    )
}

export default Collections