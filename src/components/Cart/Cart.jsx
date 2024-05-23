import Products from "../../plant";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";

import "./Cart.css";

const Cart = () => {

    const {cartItems} = useContext(CartContext);
    return(
        <div className="cart">
           <table className="table">
            <thead className="table-head">
            <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th></th>
            </tr>
            </thead>
            <tbody className="table-body">
                {
                    Products.map((product, index) => {
                        if(cartItems[product.id] !== 0)
                            {
                                return (
                                    <tr key={index}>
                                        <td>{<img src={product.image} alt={product.name}/>}</td>
                                        <td>{product.name}</td>
                                        <td>${product.price}</td>
                                        <td><p className="quantity"><span>-</span> | {cartItems[product.id]} | <span>+</span></p></td>
                                        <td>${product.price * cartItems[product.id]}</td>
                                        <td><RxCross2 id="icon"/></td>
                                    </tr>
                                )
                            }
})
                }
            </tbody>

            </table> 
           
        </div>
    );
}

export default Cart;