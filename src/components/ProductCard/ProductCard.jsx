import './ProductCard.css'

function ProductCard(props) {
    console.log(props);
    return(
        <div className="product-card">
            <img src={props.img} alt={props.name}/>
            <h4>{props.name}</h4>
            <p>{props.price}</p>
        </div>
    );
}

export default ProductCard;