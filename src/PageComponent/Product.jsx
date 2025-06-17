import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner.jsx";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card.jsx";
import { useDispatch } from 'react-redux'
import { increment } from "@/redux/Slices.js";

function Product() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch()

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

  function addToCart() {
    dispatch(increment())
  }
  return (
    <>
      <div>
        <div className="grid grid-cols-4 grid-rows-4 gap-4 p-5 hover:cursor-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className="pb-0 hover:cursor-pointer"
            >
              <CardHeader
                className="text-purple-950"
                onClick={() => handleProductClick(product)}
              >
                {product.title.split(" ").slice(0, 4).join(" ")}
              </CardHeader>
              <CardContent
                className="flex items-center justify-center"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="size-[120px] object-cover rounded-[10px]"
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-2 items-start">
                <p className="text-purple-950">$ {product.price}</p>
                <button
                  onClick={addToCart}
                  className="bg-purple-950 text-white py-1 px-2 rounded cursor-pointer"
                >
                  Add to Cart
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* the text of the pixel size is the same regardless of the tag so 45px is 45px regardless of tag */}
      </div>
    </>
  );
}

export default Product;
