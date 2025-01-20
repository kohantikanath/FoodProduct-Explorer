import React from 'react';

function SortOptions({ products, setProducts }) {
  const handleSort = (criteria) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (criteria === 'name-asc') return a.product_name.localeCompare(b.product_name);
      if (criteria === 'name-desc') return b.product_name.localeCompare(a.product_name);
      if (criteria === 'grade-asc') return a.nutrition_grades.localeCompare(b.nutrition_grades);
      if (criteria === 'grade-desc') return b.nutrition_grades.localeCompare(a.nutrition_grades);
      return 0;
    });
    setProducts(sortedProducts);
  };

  return (
    <div className="mb-4">
      <select onChange={(e) => handleSort(e.target.value)} className="p-2 border rounded w-full">
        <option value="">Sort by</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="grade-asc">Nutrition Grade (Ascending)</option>
        <option value="grade-desc">Nutrition Grade (Descending)</option>
      </select>
    </div>
  );
}


export default SortOptions;