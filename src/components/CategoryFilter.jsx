// src/components/CategoryFilter.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function CategoryFilter({ setProducts }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(
        "https://world.openfoodfacts.org/categories.json"
      );
      setCategories(response.data.tags);
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = async (category) => {
    const response = await axios.get(
      `https://world.openfoodfacts.org/category/${category}.json`
    );
    setProducts(response.data.products);
  };

  return (
    <div className="mb-4">
      <select
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="p-2 border rounded w-full"
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
