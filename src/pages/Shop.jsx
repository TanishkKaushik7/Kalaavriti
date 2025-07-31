import { useState, useEffect } from 'react';
import { Search, Filter, Grid, List, Star, Heart, ShoppingBag, X, ChevronDown, Eye, Sparkles, TrendingUp, Award, Clock, ArrowRight } from 'lucide-react';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [viewMode, setViewMode] = useState('grid');
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [animateCards, setAnimateCards] = useState(false);

  const itemsPerPage = 8;

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Failed to load products:', err);
        setIsLoading(false);
      });
  }, []);
  
  const categories = [
    { value: 'all', label: 'All Categories', icon: '🎨' },
    { value: 'jewelry', label: 'Jewelry', icon: '💍' },
    { value: 'rakhis', label: 'Rakhis', icon: '🎀' },
    { value: 'home-decor', label: 'Home Décor', icon: '🏠' },
    { value: 'paintings', label: 'Paintings', icon: '🖼️' },
    { value: 'textiles', label: 'Textiles', icon: '🧵' },
    { value: 'gifts', label: 'Gifts', icon: '🎁' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured', icon: <Award className="h-4 w-4" /> },
    { value: 'price-low', label: 'Price: Low to High', icon: <TrendingUp className="h-4 w-4" /> },
    { value: 'price-high', label: 'Price: High to Low', icon: <TrendingUp className="h-4 w-4 rotate-180" /> },
    { value: 'rating', label: 'Highest Rated', icon: <Star className="h-4 w-4" /> },
    { value: 'newest', label: 'Newest First', icon: <Clock className="h-4 w-4" /> }
  ];

  // Animate cards when filters change
  useEffect(() => {
    setAnimateCards(true);
    const timer = setTimeout(() => setAnimateCards(false), 300);
    return () => clearTimeout(timer);
  }, [selectedCategory, sortBy, searchQuery]);

  // Filter and sort products
  let filteredProducts = products;

  if (selectedCategory !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
  }

  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.artisan.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  filteredProducts = filteredProducts.filter(product =>
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      filteredProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    default:
      filteredProducts.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
      break;
  }

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    setCart(prev => [...prev, product]);
    // Add animation or toast notification here
  };

  const toggleWishlist = (productId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getBadgeColor = (badge) => {
    const colors = {
      'Best Seller': 'bg-gradient-to-r from-yellow-400 to-orange-500',
      'New': 'bg-gradient-to-r from-green-400 to-blue-500',
      'Limited': 'bg-gradient-to-r from-red-400 to-pink-500',
      'Trending': 'bg-gradient-to-r from-purple-400 to-pink-500',
      'Popular': 'bg-gradient-to-r from-blue-400 to-cyan-500',
      'Exclusive': 'bg-gradient-to-r from-indigo-400 to-purple-500'
    };
    return colors[badge] || 'bg-gradient-to-r from-gray-400 to-gray-600';
  };

  const QuickView = ({ product, onClose }) => {
    if (!product) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative p-6">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium ${getBadgeColor(product.badge)}`}>
                  {product.badge}
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                  <p className="text-gray-600">by {product.artisan}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                <p className="text-gray-700">{product.description}</p>
                
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-purple-600">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-lg text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    disabled={!product.inStock}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingBag className="h-5 w-5 mr-2 inline" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                  <button
                    onClick={(e) => toggleWishlist(product.id, e)}
                    className="p-3 border-2 border-gray-200 rounded-xl hover:border-red-300 transition-colors"
                  >
                    <Heart className={`h-5 w-5 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-purple-600 mr-2" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Handcrafted Treasures
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover authentic Indian handicrafts, each piece telling a unique story of tradition and artistry.
          </p>
        </div>

        {/* Enhanced Filters */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-6 mb-8 border border-white/20">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1 min-w-64">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, artisans, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.value
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>

            {/* View Mode */}
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white shadow-sm text-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list'
                    ? 'bg-white shadow-sm text-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Price Range */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">Price Range:</span>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                className="w-24 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <span className="text-gray-400">-</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 20000])}
                className="w-24 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProducts.length)}</span> of <span className="font-semibold">{filteredProducts.length}</span> products
            </p>
            {(selectedCategory !== 'all' || searchQuery || priceRange[0] > 0 || priceRange[1] < 20000) && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setPriceRange([0, 20000]);
                }}
                className="text-sm text-purple-600 hover:text-purple-700 font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {paginatedProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 ${
                  animateCards ? 'animate-pulse' : ''
                }`}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium ${getBadgeColor(product.badge)}`}>
                    {product.badge}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => toggleWishlist(product.id, e)}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                    >
                      <Heart className={`h-4 w-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setQuickViewProduct(product);
                      }}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                    >
                      <Eye className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>

                  {/* Stock indicator */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">Out of Stock</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg line-clamp-2 group-hover:text-purple-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      by {product.artisan}
                    </p>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-purple-600">
                          ₹{product.price.toLocaleString()}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500 capitalize px-2 py-1 bg-gray-100 rounded-full">
                        {product.category}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleAddToCart(product, e)}
                      disabled={!product.inStock}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ShoppingBag className="h-4 w-4 mr-2 inline" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // List View
          <div className="space-y-6 mb-8">
            {paginatedProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 ${
                  animateCards ? 'animate-pulse' : ''
                }`}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <div className="flex">
                  <div className="relative w-64 h-48 flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium ${getBadgeColor(product.badge)}`}>
                      {product.badge}
                    </div>
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-semibold">Out of Stock</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-bold text-2xl group-hover:text-purple-600 transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-lg text-gray-600">
                            by {product.artisan}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={(e) => toggleWishlist(product.id, e)}
                            className="p-2 border border-gray-200 rounded-lg hover:border-red-300 transition-colors"
                          >
                            <Heart className={`h-5 w-5 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setQuickViewProduct(product);
                            }}
                            className="p-2 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors"
                          >
                            <Eye className="h-5 w-5 text-gray-600" />
                          </button>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">
                            {product.rating} ({product.reviews} reviews)
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 capitalize px-2 py-1 bg-gray-100 rounded-full">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl font-bold text-purple-600">
                          ₹{product.price.toLocaleString()}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-lg text-gray-500 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        disabled={!product.inStock}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ShoppingBag className="h-5 w-5 mr-2 inline" />
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2 mb-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              const isActive = page === currentPage;
              const showPage = page === 1 || page === totalPages || Math.abs(page - currentPage) <= 2;
              
              if (!showPage) {
                if (page === currentPage - 3 || page === currentPage + 3) {
                  return <span key={page} className="px-2 text-gray-400">...</span>;
                }
                return null;
              }
              
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              );
            })}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}

        {/* Load More Button (Alternative to pagination) */}
        {filteredProducts.length > itemsPerPage && currentPage < totalPages && (
          <div className="text-center mb-8">
            <button
              onClick={() => setCurrentPage(prev => prev + 1)}
              disabled={isLoading}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50"
            >
              {isLoading ? 'Loading...' : 'Load More Products'}
              <ArrowRight className="h-5 w-5 ml-2 inline" />
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
              <Search className="h-16 w-16 text-purple-400" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-800">No products found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We couldn't find any products matching your criteria. Try adjusting your search or browse all categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setPriceRange([0, 20000]);
                setCurrentPage(1);
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Featured Categories Banner */}
        {selectedCategory === 'all' && searchQuery === '' && (
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Explore Our Featured Collections</h2>
            <p className="text-purple-100 mb-6">Discover handpicked items from master artisans across India</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.slice(1, 5).map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all duration-200 group"
                >
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <div className="text-sm font-semibold">{category.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Stats Banner */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Unique Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">200+</div>
              <div className="text-gray-600">Skilled Artisans</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickView 
        product={quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
      />
    </div>
  );
};

export default Shop;