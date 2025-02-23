import React from "react";
import Button from "../components/button"; 

const ProductCard = () => {
  
  const productImage = "https://via.placeholder.com/150";
  const productName = "Sample Product";
  const productPrice = "$49.99";

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg p-4 border border-gray-200 text-center">
      <img
        className="w-32 h-32 mx-auto object-cover rounded"
        src={productImage}
        alt="Product"
      />
      <h2 className="text-lg font-semibold mt-3">{productName}</h2>
      <p className="text-gray-600">{productPrice}</p>
      <div className="mt-4">
        <Button />
      </div>
    </div>
  );
};

export default ProductCard;
