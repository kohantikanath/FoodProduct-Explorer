import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
      );
      setProduct(response.data.product);
    };
    fetchProduct();
  }, [barcode]);

  if (!product) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={product.image_url}
          alt={product.product_name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{product.product_name}</h1>
          <p className="text-lg mb-2">
            <strong>Ingredients:</strong> {product.ingredients_text || "N/A"}
          </p>
          <p className="text-lg mb-2">
            <strong>Nutrition Grade:</strong>{" "}
            {product.nutrition_grades || "N/A"}
          </p>
          <p className="text-lg mb-2">
            <strong>Energy:</strong> {product.nutriments.energy || "N/A"} kJ
          </p>
          {}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
