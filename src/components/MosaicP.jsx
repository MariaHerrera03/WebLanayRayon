import React, { useState, useContext } from 'react'
import Modal from '../components/Modal'
import { useCartDetails } from '../context/useCartDetails';
import { RiAddFill } from 'react-icons/ri'

function Mosaic() {

    const [count, setCount] = useState(0);

    const decrementCount = () => {
        if (count === 0) return;
        setCount(count - 1);
    };

    const handleAddToCart = () =>
        {addCartProducts({
            img: objectProduct.image, 
            id: objectProduct.id, 
            title: objectProduct.title,
            price: objectProduct.price,
            quantity: objectProduct.quantity
        })
        setCount(0);    
    };

    const objectProduct = {
        id: 1,
        title: 'Muñeco personalizado de un humano',
        price: 55000,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys.',
        image: "https://github.com/MariaHerrera03/ImageBank/blob/main/PersonalizadosUNO.png?raw=true",
        quantity: count || 1,
    };

    const {addCartProducts} = useContext(useCartDetails);

    const [showModal, setShowModal] = useState(false);

    const handleOnClose = () => setShowModal(false);

    return (
        <>
            <div className='containerOne px-10 pt-8 pb-2'>
                <h1 className='text-center text-magenta-dark text-xl leading-5'>Personalizados</h1>
            </div>
            <section className='containerTwo px-5 py-6 flex flex-row flex-wrap gap-4 w-full h-full place-content-center'>
                <div className='flex flex-col w-32'>
                    <div className='containerMosaicOne relative w-32 aspect-square bg-[url("https://github.com/MariaHerrera03/ImageBank/blob/main/Lana&Ray%C3%B3n/PersonalizadosUNO.png?raw=true")] bg-cover'>
                        <button onClick={() => setShowModal(true)}>
                            <RiAddFill size={33} className='absolute fill-orange-light cursor-pointer top-0 right-0'/>
                        </button>
                        <button onClick={handleAddToCart} className='absolute bg-yellow-light/90 w-full h-1/4 bottom-0 text-center'>
                            <h2 className='text-yellow-dark text-sm font-bold inline-block'>Agregar al carrito</h2>
                        </button>
                    </div>  
                    <div className="col-span-3 flex items-baseline justify-between py-1 px-4 pb-2">
                        <button
                            className="text-xl font-bold text-orange-light"
                            onClick={decrementCount}
                        >
                            -
                        </button>
                        <span className=' text-orange-light text-sm font-bold'>{count}</span>
                        <button
                            className="text-xl font-bold text-orange-light"
                            onClick={() => setCount(count + 1)}
                        >
                            +
                        </button>
                    </div>  
                    <div className='text-center'>
                        <h3 className='text-orange-dark text-sm leading-4 pt-0'>Muñeco personalizado de un humano</h3>
                        <h2 className='text-orange-dark text-sm font-bold tracking-wide py-2'>$55.000 COP</h2>
                    </div>
                </div>
                <div className='flex flex-col w-32'>
                    <div className='containerMosaicOne relative w-32 aspect-square bg-[url("https://github.com/MariaHerrera03/ImageBank/blob/main/Lana&Ray%C3%B3n/PersonalizadosDOS.png?raw=true")] bg-cover'>
                        <button>
                            <RiAddFill size={33} className='absolute fill-orange-light cursor-pointer top-0 right-0'/>
                        </button>
                        <div className='absolute bg-yellow-light/90 w-full h-1/4 bottom-0 text-center'>
                            <h2 className='text-yellow-dark text-sm font-bold inline-block align-middle'>Agregar al carrito</h2>
                        </div>
                    </div>    
                    <div className='text-center'>
                        <h3 className='text-orange-dark text-sm leading-4 pt-2'>Muñeco personalizado de una mascota</h3>
                        <h2 className='text-orange-dark text-sm font-bold tracking-wide pt-1'>$35.000 COP</h2>
                    </div>
                </div>
                <div className='flex flex-col w-32'>
                    <div className='containerMosaicOne relative w-32 aspect-square bg-[url("https://github.com/MariaHerrera03/ImageBank/blob/main/Lana&Ray%C3%B3n/PersonalizadosTRES.png?raw=true")] bg-cover'>
                        <button>
                            <RiAddFill size={33} className='absolute fill-orange-light cursor-pointer top-0 right-0'/>
                        </button>
                        <div className='absolute bg-yellow-light/90 w-full h-1/4 bottom-0 text-center'>
                            <h2 className='text-yellow-dark text-sm font-bold inline-block align-middle'>Agregar al carrito</h2>
                        </div>
                    </div>    
                    <div className='text-center'>
                        <h3 className='text-orange-dark text-sm leading-4 pt-2'>Combo de muñecos personalizados</h3>
                        <h2 className='text-orange-dark text-sm font-bold tracking-wide pt-1'>$!! COP</h2>
                    </div>
                </div>
            </section>
            <Modal onClose={handleOnClose} visible={showModal}/>
        </>
    )
}

export default Mosaic