import "./Footer.css";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
export default function Footer(props) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="footer">
      <div className="footer-info">
        <p>
          {props.productInfo.name}
          <br />
          <strong>${props.productInfo.price}</strong>
        </p>
      </div>

      <div
        className="footer-button"
        onClick={() => addToCart(props.productInfo.id)}
      >
        <span>+</span>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
