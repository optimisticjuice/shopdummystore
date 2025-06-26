import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner.jsx";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card.jsx";
import { useDispatch } from 'react-redux'
import { increment } from "@/redux/Slices.js";
import { Categories } from "@/assets/data/filterOptions.js";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Checkbox } from "@/components/ui/checkbox.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";
import { motion } from "motion/react"

function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState('default');

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

  // const handleCheckboxChange = (category) => {
  //   setSelectedCategories(prev =>
  //     prev.includes(category)
  //       ? prev.filter(c => c !== category)
  //       : [...prev, category]
  //   );
  // };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else if (sortOrder === 'desc') {
      return b.price - a.price;
    } else {
      // Default case: no sorting
      return 0;
    }
  });

  const filteredProducts = sortedProducts.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleProductClick(product) {
    navigate("/product/details", { state: { product }, });
  }

  function addToCart() {
    dispatch(increment())
  }

  if (products.length < 1) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <LoadingSpinner />
        </div>
      </>
    );
  };

  return (
    <div className="flex gap-0 px-5 py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1>Search</h1>
          <Input
            placeholder="Search by name..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h1>Categories</h1>
          {Categories.map((category, index) =>
            <div key={index} className="flex items-center gap-3">
              <Checkbox id={category} />
              <Label htmlFor={category}>{category}</Label>
            </div>
          )}
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-end items-center pr-5">
          <h1>Sort by</h1>
          <Select onValueChange={(value) => setSortOrder(value)}>
            <SelectTrigger className="ml-1 w-[180px] h-7">
              <SelectValue placeholder="default" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="asc">Price - Low to High</SelectItem>
              <SelectItem value="desc">Price - High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 hover:cursor-auto">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="hover:cursor-pointer shadow-2xl"
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
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
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

      </div>
      {/* the text of the pixel size is the same regardless of the tag so 45px is 45px regardless of tag */}
    </div>
  );
}

export default Product;
