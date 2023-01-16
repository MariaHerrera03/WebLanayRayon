import React from 'react'
import { Link } from 'react-router-dom';


function Collections() {
    return (
        <div>
            <div className='containerOne px-10 pt-8 pb-4'>
                <h1 className='text-center text-magenta-dark text-xl leading-5'>COLECCIONES</h1>
            </div>
            <div className='containerTwo bg-orange-bg mx-10 my-2 grid grid-cols-2 items-center justify-items-center'>
                <div className='text-orange-dark text-base text-center px-6'>
                    <h2 className='font-bold tracking-widest'>Personalizados</h2>
                    <h3 className='leading-5 text-center'>Of the printing and typesetting industry.</h3>
                </div>
                <div>
                    <Link to='/personalizados' href=''><img className='' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/imgCollOne.png?raw=true'} alt='Imagen personalizados'/></Link>
                </div>
                <div>
                    <Link to='/religiosos' href=''><img className='' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/imgCollTwo.png?raw=true'} alt='Imagen personalizados'/></Link>
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
                    <Link to='/navideños' href=''><img className='' src={'https://github.com/MariaHerrera03/ImageBank/blob/main/imgCollThree.png?raw=true'} alt='Imagen personalizados'/></Link>
                </div>
            </div>
        </div>
    )
}

export default Collections