import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Relatedproduct from "./Relatedproduct";
import Shimmer1 from "./Shimmmer1";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false); // New state for Product Details dropdown
  const [selectedImage, setSelectedImage] = useState(null);
  const [faqStates, setFaqStates] = useState([false, false, false, false]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://shoes-shine.vercel.app/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch product");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const toggleFaq = (index) => {
    setFaqStates((prev) =>
      prev.map((open, i) => (i === index ? !open : open))
    );
  };

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // if (loading)  return <div className="text-center">Loading...</div>;
  // if (error) return <div className="text-center text-red-500">{error}</div>;
if(loading) {
  return <Shimmer1/>
}
  return (
    <div className="p-6 bg-white">
      <Navbar   />

      {/* Product Details Section */}
      <div className="md:px-40 md:py-20 mb-6 w-full mt-10 mx-auto bg-white">
      <hr className="border-gray-700 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="grid grid-cols-2 gap-4">
            {product.images.map((img, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(img)}
                className="w-full h-150 bg-gray-200 rounded-xl overflow-hidden cursor-pointer"
              >
                <img
                  src={img}
                  alt={`${product.name} ${index}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Product Details */}
          <div className="flex flex-col space-y-4 h-full">
            <h1 className="text-4xl font-extrabold pro-name text-gray-900">{product.name}</h1>
            <span className="text-gray-500">{product.colors}</span>
            <span className="text-2xl font-semibold">{product.price}</span>
            <div className="flex items-center space-x-6">
              <button className="px-40 py-4 bg-black text-white rounded-lg">
                Add to Cart
              </button>
            </div>

            {/* Description Dropdown */}
            <div className="border-t border-gray-300 mt-40 pt-4">
              <button
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                className="flex items-center justify-between w-full text-lg font-medium text-left text-gray-800"
              >
                <span className="pro-name">Product Description</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    isDescriptionOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.97l3.72-3.74a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isDescriptionOpen && (
                <p className="mt-4 text-gray-800 text-md pro-name leading-relaxed">
                  {product.description}
                </p>
              )}
            </div>

            {/* Product Details Dropdown */}
            <div className="border-t border-gray-300 mt-4 pt-4">
              <button
                onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                className="flex items-center justify-between w-full text-lg font-medium text-left text-gray-800"
              >
                <span className="pro-name">Product Details</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    isDetailsOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.97l3.72-3.74a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isDetailsOpen && (
                <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                  <p className="text-xl mb-2 pro-name"><span>Manufacturer:</span>  {product.manufacturer}</p>
                  <p className="text-xl mb-2 pro-name"><span >Country:</span>  {product.country}</p>
                  <p className="text-xl mb-2 pro-name"><span>Article_Code </span>  {product.article_code}</p>
                  <p className="text-xl mb-2 pro-name"><span>weight </span>  {product.weight}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Image Viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute text-4xl right-2">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-h-screen mb-10"
            />
            <div className="flex space-x-4 overflow-x-auto">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  onClick={() => handleImageClick(img)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    selectedImage === img ? "border-blue-500" : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FAQs Section */}
      <h2 className="text-4xl font-bold p-6 pro-name">FAQs</h2>
      <div className="bg-gray-100 p-6 rounded-lg">
        {[
          "What is the return policy?",
          "How do I track my order?",
          "Are the products covered under warranty?",
          "What payment methods do you accept?",
        ].map((question, index) => (
          <div key={index} className="mb-4">
            <button
              className="flex justify-between w-full text-lg font-medium text-left text-gray-800 py-2"
              onClick={() => toggleFaq(index)}
            >
              <span>{question}</span>
              <span className="text-3xl">{faqStates[index] ? "-" : "+"}</span>
            </button>
            {faqStates[index] && (
              <p className="mt-2 text-gray-600">
                {index === 0
                  ? "We offer a 30-day return policy for unused products with their original packaging."
                  : index === 1
                  ? "You can track your order using the tracking ID sent to your email after purchase."
                  : index === 2
                  ? "Yes, all products come with a one-year warranty for manufacturing defects."
                  : "We accept credit cards, debit cards, and various digital wallets."}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Related Products Section */}
      <div>
      <h2 className="text-2xl font-bold mt-10 main pro-name">You may also like</h2>

        <Relatedproduct currentProductId={id} />
      </div>
    </div>
  );
};

export default ProductPage;
