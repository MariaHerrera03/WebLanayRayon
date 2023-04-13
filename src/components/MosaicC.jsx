import React from 'react'
import { RiAddFill } from 'react-icons/ri'

function Mosaic() {
    return (
        <>
            <div className='containerOne px-10 pt-8 pb-2'>
                <h1 className='text-center text-magenta-dark text-xl leading-5'>Navideños</h1>
            </div>
            <section className='containerTwo px-5 py-6 flex flex-row flex-wrap gap-4 w-full h-full place-content-center'>
                <div className='flex flex-col w-32'>
                    <div className='containerMosaicOne relative w-32 aspect-square bg-[url("https://github.com/MariaHerrera03/ImageBank/blob/main/Lana&Ray%C3%B3n/Navide%C3%B1osTRES.png?raw=true")] bg-cover'>
                        <button>
                            <RiAddFill size={33} className='absolute fill-orange-light cursor-pointer top-0 right-0'/>
                        </button>
                        <div className='absolute bg-yellow-light/90 w-full h-1/4 bottom-0 text-center'>
                            <h2 className='text-yellow-dark text-sm font-bold inline-block align-middle'>Agregar al carrito</h2>
                        </div>
                    </div>    
                    <div className='text-center'>
                        <h3 className='text-orange-dark text-sm leading-4 pt-2'>Nieves</h3>
                        <h2 className='text-orange-dark text-sm font-bold tracking-wide pt-1'>$50.000 COP</h2>
                    </div>
                </div>
                <div className='flex flex-col w-32'>
                    <div className='containerMosaicOne relative w-32 aspect-square bg-[url("https://github.com/MariaHerrera03/ImageBank/blob/main/Lana&Ray%C3%B3n/Navide%C3%B1osDOS.png?raw=true")] bg-cover'>
                        <button>
                            <RiAddFill size={33} className='absolute fill-orange-light cursor-pointer top-0 right-0'/>
                        </button>
                        <div className='absolute bg-yellow-light/90 w-full h-1/4 bottom-0 text-center'>
                            <h2 className='text-yellow-dark text-sm font-bold inline-block align-middle'>Agregar al carrito</h2>
                        </div>
                    </div>    
                    <div className='text-center'>
                        <h3 className='text-orange-dark text-sm leading-4 pt-2'>Estrellas</h3>
                        <h2 className='text-orange-dark text-sm font-bold tracking-wide pt-1'>$35.000 COP</h2>
                    </div>
                </div>
                <div className='flex flex-col w-32'>
                    <div className='containerMosaicOne relative w-32 aspect-square bg-[url("https://github.com/MariaHerrera03/ImageBank/blob/main/Lana&Ray%C3%B3n/Navide%C3%B1osUNO.png?raw=true")] bg-cover'>
                        <button>
                            <RiAddFill size={33} className='absolute fill-orange-light cursor-pointer top-0 right-0'/>
                        </button>
                        <div className='absolute bg-yellow-light/90 w-full h-1/4 bottom-0 text-center'>
                            <h2 className='text-yellow-dark text-sm font-bold inline-block align-middle'>Agregar al carrito</h2>
                        </div>
                    </div>    
                    <div className='text-center'>
                        <h3 className='text-orange-dark text-sm leading-4 pt-2'>Bolitas x 6 para el árbol</h3>
                        <h2 className='text-orange-dark text-sm font-bold tracking-wide pt-1'>$80.000 COP</h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mosaic