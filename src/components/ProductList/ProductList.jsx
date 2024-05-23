// import ProductCard from "../ProductCard/ProductCard";
import Products from "../../plant";
import { useState, useRef, useEffect } from "react";
import Footer from "../Footer/Footer";
import "./ProductList.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const EmptyArrow = () => <span style={{ display: 'none' }}></span>;
function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(Products[0]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const selectedIndex = Products.findIndex(p => p === selectedProduct);
    sliderRef.current.slickGoTo(selectedIndex);
  }, [selectedProduct]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0',
    slidesToScroll:1,
    prevArrow: <EmptyArrow/>,
    nextArrow: <EmptyArrow/>
  };


  return (
    <>
    <div className="product-list">
    <Slider ref={sliderRef}  {...settings}>
      {
        Products.map((product,index) => (
          <div key={index}
          className={`product ${selectedProduct === product ? 'selected' : ''}`}
            onClick={() => handleProductClick(product)}>
          
          <div className="image">
          <img src={product.image} alt={product.name}/>
          </div>
           
           <p>{product.name}</p>
            <p>${product.price}</p>
          
            </div>
        ))
      }
    </Slider> 
    <Footer productInfo={selectedProduct}/>
    </div>
    
    </>
  );}
    
export default ProductList;