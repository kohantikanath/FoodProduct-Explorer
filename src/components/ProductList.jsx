//2.

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar";
// import CategoryFilter from "./CategoryFilter";
// import SortOptions from "./SortOptions";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await axios.get(
//         `https://world.openfoodfacts.org/cgi/search.pl?search_terms=&page=${page}&json=true`
//       );
//       setProducts((prev) => [...prev, ...response.data.products]);
//     };
//     fetchProducts();
//   }, [page]);

//   return (
//     <div className="min-h-screen bg-[#FADDAF]">
//       <div className="container mx-auto p-4">
//         <SearchBar setProducts={setProducts} />
//         <CategoryFilter setProducts={setProducts} />
//         <SortOptions products={products} setProducts={setProducts} />
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product, index) => (
//             <Link
//               to={`/product/${product.code}`}
//               key={`${product.code}-${index}`}
//               className="border p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
//             >
//               <img
//                 src={product.image_url}
//                 alt={product.product_name}
//                 className="w-full h-48 object-cover rounded-t-lg"
//               />
//               <div className="p-2">
//                 <h2 className="text-lg font-bold mt-2">{product.product_name}</h2>
//                 <p className="text-sm text-gray-600">
//                   <strong>Category:</strong> {product.categories || "N/A"}
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   <strong>Nutrition Grade:</strong>{" "}
//                   {product.nutrition_grades || "N/A"}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//         <button
//           onClick={() => setPage(page + 1)}
//           className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
//         >
//           Load More
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductList;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import SortOptions from "./SortOptions";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://world.openfoodfacts.org/cgi/search.pl?search_terms=&page=${page}&json=true`
        );
        setProducts((prev) => [...prev, ...response.data.products]);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    // Debounce fetch to prevent spamming API calls on rapid state changes
    const debounce = setTimeout(() => {
      fetchProducts();
    }, 500);

    return () => clearTimeout(debounce);
  }, [page]);

  return (
    <div className="min-h-screen bg-[#FADDAF]">
      <div className="container mx-auto p-4">
        <SearchBar setProducts={setProducts} />
        <CategoryFilter setProducts={setProducts} />
        <SortOptions products={products} setProducts={setProducts} />

        {error && <div className="text-red-500 text-center my-4">{error}</div>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link
              to={`/product/${product.code}`}
              key={`${product.code}-${index}`}
              className="border p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image_url}
                alt={product.product_name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-2">
                <h2 className="text-lg font-bold mt-2">
                  {product.product_name}
                </h2>
                <p className="text-sm text-gray-600">
                  <strong>Category:</strong> {product.categories || "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Nutrition Grade:</strong>{" "}
                  {product.nutrition_grades || "N/A"}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {loading && (
          <div className="text-center mt-4 text-blue-500">Loading...</div>
        )}

        {!loading && !error && (
          <button
            onClick={() => setPage(page + 1)}
            className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductList;
