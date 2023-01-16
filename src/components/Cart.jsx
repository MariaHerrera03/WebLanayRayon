import React, { useContext } from 'react'
import { useCartDetails } from '../context/useCartDetails'
import { AiFillDelete } from 'react-icons/ai'

export default () => {

    const { cartProducts, deleteCartProducts } = useContext(useCartDetails);

    return (
        <section className="absolute z-[10] w-full left-0 place-content-center px-8 top-[110%]">
            <div className="shadow-md bg-sand-bg p-2 w-full rounded-sm border-2 border-magenta-light">
                <h4 className="text-base font-bold tracking-widest text-magenta-dark text-center pt-2 pb-4">TU CARRITO</h4>
                <hr />
                {cartProducts.length === 0 && (
                    <p className=" text-center text-orange-dark text-sm leading-4 py-10">Tu carrito está vacío</p>
                )}
                {cartProducts.map((product) => (
                    <article
                        key={product.id}
                        className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-6 py-4"
                    >
                        <img src={product.img} alt="" className=""/>
                        <div>
                            <h2 className='text-base uppercase tracking-widest text-purple-dark pb-1'>{product.title}</h2>
                            <p>
                                <h3 className='text-base font-bold uppercase tracking text-purple-light pb-1'>
                                    $ {product.price} x{" "}
                                    {product.quantity}
                                </h3>{" "}
                                <h3 className="text-lg font-bold uppercase tracking text-purple-dark pb-2">
                                    $
                                    {(
                                        product.price * product.quantity
                                    )}
                                </h3>
                            </p>
                        </div>
                        <button
                            className="ml-auto"
                            onClick={() => deleteCartProducts(product.id)}
                        >
                            <AiFillDelete className="fill-magenta-light" />
                        </button>
                    </article>
                ))}
                {cartProducts.length !== 0 && (
                    <div className="px-6 pb-6">
                        <button className="w-full font-bold tracking-widest rounded-sm bg-yellow-dark uppercase py-4 text-sand-bg hover:bg-yellow-light hover:text-yellow-dark">
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};