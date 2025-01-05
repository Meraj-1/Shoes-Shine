import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RelatedShimmer from "./RelatedShimmer";
// import motion from "framer-motion"

const RelatedProduct = ({ currentProductId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get("https://shoes-shine.vercel.app/api/products");
        const filteredProducts = response.data.filter(
          (item) => item._id !== currentProductId
        );
        setRelatedProducts(filteredProducts.slice(0, 5));
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch related products.");
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [currentProductId]);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Ensure smooth scroll after navigation
    }, 100); // Delay ensures navigation completes
  };

  if (loading) return <RelatedShimmer/>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div
    className="mb-20">
      <div className="grid grid-cols-2 p-3 md:p-0 md:grid-cols-3 lg:grid-cols-5 gap-1">
        {relatedProducts.map((item) => (
          <div
            key={item._id}
            className="cursor-pointer"
            onClick={() => handleProductClick(item._id)} // Navigate to product page
          >
            {/* Product Image */}
            <div className="relative overflow-hidden aspect-square group">
              <img
                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                src={
                  Array.isArray(item.images) && item.images[0]
                    ? item.images[0]
                    : "default-image.jpg"
                }
                alt={item.name}
              />
              {Array.isArray(item.images) && item.images[1] && (
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  src={item.images[1]}
                  alt={item.name}
                />
              )}
            </div>

            {/* Product Details */}
            <span className="mt-6 text-sm text-gray-700">{item.colors}</span>
            <h3 className="md:text-lg font-bold text-sm pro-name ">{item.name}</h3>
            <p className="text-gray-600 text-sm">{item.price}</p>
            {/* <span className="pro-name">CODE: {item.article_code}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
