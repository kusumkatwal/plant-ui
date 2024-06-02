import { useState,  createContext } from "react";
import Products from "../../plant";
export const CartContext = createContext(null);

const getProductByDefault = () => {
    var cart = {};
    for(let i = 0; i< Products.length; i++)
        {
            cart[i] = 0;
        }
        return cart;
}

function CartContextProvider ({children})
{
    const [cartItems, setCartItems] = useState(getProductByDefault());
    console.log(cartItems)
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart}
    return(
        <CartContext.Provider value={contextValue}>{children} </CartContext.Provider>
    );
}

export default CartContextProvider;