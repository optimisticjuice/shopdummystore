import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Rating from '@mui/material/Rating';
import { useDispatch } from "react-redux";
import { increment } from "@/redux/Slices.js";

function ProductDetails() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { product } = location.state || {};

  return (
    <div>
      {product ? (
        <div className="flex justify-center items-center p-14 gap-16">
          <Card className={"border-none h-screen w-1/2"}>
            <CardContent>
              <img src={product.image} alt={product.title} className="size-[500px]" />
            </CardContent>
          </Card>
          <div className="flex flex-col gap-7 h-screen p-2 w-1/2">
            <h1 className="text-2xl">{product.title}</h1>
            <p className="text-xl text-semibold">${product.price}</p>
            <Rating name="half-rating-read" defaultValue={product?.rating?.rate} precision={0.5} readOnly />
            <p className="mb-[28px]">{product?.description}</p>
            <hr />
            <div className="flex gap-3 justify-center">
              <Button>Buy</Button>
              <Button onClick={() => dispatch(increment())}>Add to Cart</Button>
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
