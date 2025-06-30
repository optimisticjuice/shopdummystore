import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Rating from '@mui/material/Rating';
import { useDispatch } from "react-redux";
import { increment } from "@/redux/Slices.js";

//Shadcn imports
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label";
//Ant Design imports

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
            <div className="flex gap-5">
              <div className="flex flex-col gap-3">
                <Label htmlFor="color" className="text-[18px]">Color</Label>
                <RadioGroup defaultValue="black" className="flex">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="blue" id="r1" className="size-5 border-blue-500" />
                    <Label htmlFor="r1"></Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="black" id="r2" className="size-5 border-black" />
                    <Label htmlFor="r2"></Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="red" id="r3" className="size-5 border-red-600" />
                    <Label htmlFor="r3"></Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="size" className="text-[18px]">Size</Label>
                <RadioGroup defaultValue="black" className="flex">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="blue" id="r1" className="size-5 border-blue-500" />
                    <Label htmlFor="r1"></Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="black" id="r2" className="size-5 border-black" />
                    <Label htmlFor="r2"></Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="red" id="r3" className="size-5 border-red-600" />
                    <Label htmlFor="r3"></Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <Button onClick={() => dispatch(increment())}>Add to Cart</Button>
          </div>
        </div>
      ) : (
        <p>No product details available.</p>
      )}
    </div>
  );
}

export default ProductDetails;
