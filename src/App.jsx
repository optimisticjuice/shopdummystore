import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Grid from "./PageComponent/Product.jsx";
import IntroduceUser from "./PageComponent/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import Product from "./PageComponent/Product.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroduceUser />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/details" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
