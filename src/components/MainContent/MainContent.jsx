import "./MainContent.css";
import ProductList from "../ProductList/ProductList";
import Header from "../Header/Header";

function MainContent() {
  return (
    <div className="main-content">
      <Header />
      <ProductList />
    </div>
  );
}

export default MainContent;
