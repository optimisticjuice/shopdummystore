import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ProductDetails() {
  const location = useLocation();
  const { product } = location.state || {};

  return (
    <div>
      {product ? (
        <div className="flex justify-center items-center p-5 gap-8 ">
          <Card className={"bg-green-200 w-1/2"}>
            <CardHeader>
              <h3>{product.title}</h3>
            </CardHeader>
            <CardContent>
              <img src={product.image} alt={product.title} />
              <p>Price: ${product.price}</p>
            </CardContent>
          </Card>
          <div className="bg-gray-300 p-2 w-1/2">
            <h4>Product Details</h4>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>

            <div className="flex gap-3 justify-center">
              <Button>Buy</Button>
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      ) : (
        <p>No product details available.</p>
      )}
    </div>
  );
}

export default ProductDetails;
