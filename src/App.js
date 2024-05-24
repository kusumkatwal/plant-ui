import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <div className="app-body">
          <Router>
            <Sidebar />
            <Routes>
              <Route path="/" element={<MainContent />}></Route>
              <Route path="/plant" element={<MainContent />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </Router>
        </div>
      </CartContextProvider>
    </div>
  );
}

export default App;
