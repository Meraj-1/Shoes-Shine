import React from "react";
import Navbar from "./Navbar";

const Shimmer1 = () => (
<div className="p-6 bg-white">
<Navbar/>
  <div className="h-12 bg-gray-200 rounded animate-pulse"></div>

  {/* Product Details Section Skeleton */}
  <div className="md:px-40 md:py-20 mb-6 w-full mt-10 mx-auto bg-white">
    <hr className="border-gray-700 mb-10" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Skeleton Product Images */}
      <div className="grid grid-cols-2 gap-4">
        {Array(4).fill(0).map((_, index) => (
          <div
            key={index}
            className="w-full h-150 bg-gray-200 rounded-xl overflow-hidden animate-pulse"
          ></div>
        ))}
      </div>

      {/* Skeleton Product Details */}
      <div className="flex flex-col space-y-4 h-full">
        <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-10 bg-gray-200 rounded animate-pulse"></div>

        {/* Skeleton Description Dropdown */}
        <div className="border-t border-gray-300 mt-40 pt-4">
          <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 mt-2 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Skeleton Product Details Dropdown */}
        <div className="border-t border-gray-300 mt-4 pt-4">
          <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="space-y-2 mt-4">
            {Array(4).fill(0).map((_, index) => (
              <div key={index} className="h-4 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Skeleton Modal for Image Viewer */}
  {false && (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative">
        <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-96 w-96 bg-gray-200 rounded animate-pulse"></div>
        <div className="flex space-x-4 mt-4">
          {Array(4).fill(0).map((_, index) => (
            <div
              key={index}
              className="w-20 h-20 bg-gray-200 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  )}

  {/* Skeleton FAQs Section */}
  <div className="bg-gray-100 p-6 rounded-lg">
    {Array(4).fill(0).map((_, index) => (
      <div key={index} className="mb-4">
        <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 mt-2 bg-gray-200 rounded animate-pulse"></div>
      </div>
    ))}
  </div>

  {/* Skeleton Related Products Section */}
  <div className="mt-10">
    <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
      {Array(5).fill(0).map((_, index) => (
        <div key={index} className="w-full h-150 bg-gray-200 rounded-lg animate-pulse"></div>
      ))}
    </div>
  </div>
</div>

);

export default Shimmer1;
