import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroduceUser from "./PageComponent/Home.jsx";
import About from "./PageComponent/About.jsx";
import Contact from "./PageComponent/Contact.jsx";
import ProductDetails from "./PageComponent/ProductDetails.jsx";
import Product from "./PageComponent/Product.jsx";
import Navbar from "./components/Navbar.jsx";
import Cart from "./PageComponent/Cart.jsx";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<IntroduceUser />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/details" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
