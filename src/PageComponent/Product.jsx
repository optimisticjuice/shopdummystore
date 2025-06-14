import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card.jsx";

function Product() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => setProducts(json));
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);
  if (products.length < 1) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <LoadingSpinner />
        </div>
      </>
    );
  }

  function handleProductClick(product) {
    navigate("/product/details", {
      state: { product },
    });
  }

  function addToCart({ product }) {
    console.log("Product added to cart:", product);
    // Here you would typically update the cart state or context
  }
  return (
    <>
      <Navbar />
      <div>
        <div className="grid grid-cols-4 grid-rows-4 gap-4 hover:cursor-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              onClick={() => handleProductClick(product)}
              className=""
            >
              <h5 className="text-purple-950">
                {product.title.split(" ").slice(0, 4).join(" ")}
              </h5>
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <p className="text-purple-950">$ {product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-purple-950 text-white py-1 px-2 rounded cursor-pointer"
              >
                Add to Cart
              </button>
            </Card>
          ))}
        </div>

        {/* the text of the pixel size is the same regardless of the tag so 45px is 45px regardless of tag */}
      </div>
    </>
  );
}

export default Product;
