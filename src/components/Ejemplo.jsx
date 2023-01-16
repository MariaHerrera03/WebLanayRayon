import React, { useContext } from 'react'
import { useCartDetails } from '../context/useCartDetails'
import { RiCloseFill } from 'react-icons/ri'

function Ejemplo () {

    const { cartProducts } = useContext(useCartDetails);

    return (

            <div className='bg-sand-bg p-2 w-4/5 rounded-sm border-2 border-magenta-light'>
                <button className='relative -top-6 w-full bg-black'><RiCloseFill size={25} className='absolute fill-magenta-dark cursor-pointer right-0 top-0'/></button>
                <img className='containerMosaicOne w-full aspect-square bg-[url("https://github.com/MariaHerrera03/weblanayrayon/blob/main/src/assets/img/imgCollOne.png?raw=true")] bg-cover border-2 border-magenta-light'></img>
                <section className='p-2'>
                    <h1 className='text-base font-bold tracking-widest text-magenta-dark'>Bolitas x 6 para el árbol</h1>
                    <h2 className='text-base font-bold text-orange-light py-4'>$80.00 COP </h2>
                <button className='relative -top-6 w-full bg-black'><RiCloseFill size={25} className='absolute fill-magenta-dark cursor-pointer right-0 top-0'/></button>
                </section>
            </div>

    )
}

export default Ejemplo