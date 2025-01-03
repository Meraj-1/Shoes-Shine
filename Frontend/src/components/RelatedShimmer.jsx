import React from 'react'

const RelatedShimmer = () => {
  return (
    <div className="mb-20">
    <div className="grid grid-cols-2 mt-2 p-3 md:p-0 md:grid-cols-3 lg:grid-cols-5 gap-1">
      {/* Skeleton for related products */}
      {Array(5).fill(0).map((_, index) => (
        <div key={index} className="cursor-pointer">
          {/* Skeleton Image */}
          <div className="relative overflow-hidden aspect-square bg-gray-200 animate-pulse"></div>
  
          {/* Skeleton Details */}
          <div className="mt-6">
            <span className="block h-4 bg-gray-200 rounded-sm animate-pulse"></span>
            <h3 className="mt-2 h-6 bg-gray-200 rounded-sm animate-pulse"></h3>
            <p className="mt-2 h-4 bg-gray-200 rounded-sm animate-pulse"></p>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default RelatedShimmer