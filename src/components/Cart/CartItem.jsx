const CartItem = (props) => {
    return(
        <div className="cart-item">
            <img src={props.data.image} alt={props.data.name}/>
            <h3>{props.data.name}</h3>
        </div>
    );
}

export default CartItem;