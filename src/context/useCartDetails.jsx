import { useState, createContext } from "react"

export const useCartDetails = createContext();

export default (props) => {

    const [cartProducts, setCartProducts] = useState([]);

    const addCartProducts = () => {};
    const deleteCartProducts = () => {};


    return (
        <useCartDetails.Provider value={{cartProducts, addCartProducts, deleteCartProducts}}>
            {props.children}
        </useCartDetails.Provider>
    )
};