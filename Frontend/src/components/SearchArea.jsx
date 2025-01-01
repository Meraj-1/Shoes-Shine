import React from 'react'

const SearchArea = () => {
      const [products, setProducts] = useState([]); // Full list of products
    
       const [searchQuery, setSearchQuery] = useState(""); // Search input value
        const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products
       
     useEffect(() => {
        const filtered = products.filter(
          (product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
      }, [searchQuery, products]);
    
      const handleSearchChange = (e) => {
        setSearchQuery(e.target.value); // Update the search query
      };
    
      const handleProductClick = (id) => {
        navigate(`/product/${id}`); // Navigate to product details
      };


  return (
    <div className="flex justify-center mb-10">
    <div className="relative w-1/2">
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
  
  )
}

export default SearchArea;