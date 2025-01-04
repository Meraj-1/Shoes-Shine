import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Shimmer from "./Shimmer";
import Navbar from "./Navbar";

const Collection = () => {
  const [products, setProducts] = useState([]); // Full list of products
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products
  const [searchQuery, setSearchQuery] = useState(""); // Search input value
  const [favorites, setFavorites] = useState([]); // Favorite products
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://shoes-shine.vercel.app/api/products");
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="bg-white mb-40">
      <div className="p-6">
      <Navbar  favoritesCount={favorites.length}  />
      </div>
      <div className="md:mt-20">
        {/* Search Bar */}
        <div className="flex p-6 justify-center md:mb-10 ">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for products..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19a8 8 0 100-16 8 8 0 000 16zm10 2l-4.35-4.35"
              />
            </svg>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:px-40">
          <hr className="border-gray-700 mb-10" />
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 md:gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="group cursor-pointer"
                >
                  {/* Product Image */}
                  <div
                    className="relative overflow-hidden"
                    onClick={() => handleProductClick(product._id)}
                  >
                    <img
                      className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      src={
                        Array.isArray(product.images) && product.images[0]
                          ? product.images[0]
                          : "default-image.jpg"
                      }
                      alt={product.name}
                    />
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      src={
                        Array.isArray(product.images) && product.images[1]
                          ? product.images[1]
                          : "default-image.jpg"
                      }
                      alt={product.name}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-gray-600 text-sm">{product.colors}</p>
                      <h2 className="md:text-lg text-sm font-semibold text-gray-800">
                        {product.name}
                      </h2>
                      <span className="text-gray-500 md:text-md text-sm">
                        INR : {product.price}
                      </span>
                    </div>
                    <button onClick={() => toggleFavorite(product._id)}>
                      <i
                        className={`fa-heart md:text-2xl mt-0 ${
                          favorites.includes(product._id)
                            ? "fa-solid text-black"
                            : "fa-regular text-gray-400"
                        }`}
                      ></i>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">
                No products found matching the search query. Try a different
                keyword.
                <br />
                <br />
                <a href="/collection">
                  <button className="py-2 px-4 bg-black text-white rounded-full hover:bg-gray-900">
                    Go Back To Collection
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
