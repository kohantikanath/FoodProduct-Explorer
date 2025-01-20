import React, { useState } from "react";
import axios from "axios";

function SearchBar({ setProducts }) {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("name"); 

  const handleSearch = async () => {
    let response;
    if (searchType === "name") {
      response = await axios.get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&json=true`
      );
      setProducts(response.data.products);
    } else if (searchType === "barcode") {
      response = await axios.get(
        `https://world.openfoodfacts.org/api/v0/product/${query}.json`
      );
      setProducts(response.data.product ? [response.data.product] : []);
    }
  };

  return (
    <div className="mb-4 flex flex-col items-center">
      <div className="flex items-center mb-2">
        <label className="mr-2">
          <input
            type="radio"
            value="name"
            checked={searchType === "name"}
            onChange={() => setSearchType("name")}
            className="mr-1"
          />
          Search by Name
        </label>
        <label>
          <input
            type="radio"
            value="barcode"
            checked={searchType === "barcode"}
            onChange={() => setSearchType("barcode")}
            className="mr-1"
          />
          Search by Barcode
        </label>
      </div>
      <div className="flex items-center w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search for products by ${searchType}...`}
          className="p-2 border rounded-l w-full"
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </div>
    </div>
  );
}


export default SearchBar;
