import { useLocation } from "react-router-dom";

function ProductDetails() {
  const location = useLocation();
  const { product } = location.state || {};

  return (
    <div>
      <h2>Product Details</h2>

      {product ? (
        <div>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} />
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>No product details available.</p>
      )}
    </div>
  );
}

export default ProductDetails;
