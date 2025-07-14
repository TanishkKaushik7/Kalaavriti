import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Input } from '../components/ui/input';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { Search, Filter, Grid, List, Star, Heart, ShoppingBag } from 'lucide-react';

const Shop = () => {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [viewMode, setViewMode] = useState('grid');
  const [wishlist, setWishlist] = useState([]);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'jewelry', label: 'Jewelry' },
    { value: 'rakhis', label: 'Rakhis' },
    { value: 'home-decor', label: 'Home Décor' },
    { value: 'paintings', label: 'Paintings' },
    { value: 'textiles', label: 'Textiles' },
    { value: 'gifts', label: 'Gifts' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' }
  ];

  // Filter and sort products
  let filteredProducts = products;

  // Category filter
  if (selectedCategory !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
  }

  // Search filter
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.artisan.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Price range filter
  filteredProducts = filteredProducts.filter(product =>
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  // Sort products
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
      filteredProducts.sort((a, b) => new Date(b.id) - new Date(a.id));
      break;
    default:
      // Featured - keep original order
      break;
  }

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('[Shop] handleAddToCart called with product:', product);
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      artisan: product.artisan,
      category: product.category
    };
    console.log('[Shop] Adding item to cart:', itemToAdd);
    addItem(itemToAdd);
    console.log('[Shop] addItem called, checking if cart updated...');
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gradient-brand">Discover Handcrafted Treasures</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of authentic Indian handicrafts, each piece telling a unique story of tradition and artistry.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Price Range */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Price Range:</span>
            <div className="flex items-center space-x-2">
              <Input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                className="w-20"
              />
              <span className="text-muted-foreground">-</span>
              <Input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 5000])}
                className="w-20"
              />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </p>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Active filters: {selectedCategory !== 'all' ? 1 : 0}</span>
          </div>
        </div>

        {/* Products Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <Card className="product-card card-enhanced hover-lift group">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="product-image w-full h-56 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-gradient-brand text-white">
                      {product.badge}
                    </Badge>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => toggleWishlist(product.id, e)}
                      >
                        <Heart className={`h-4 w-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                    </div>
                    <div className="product-overlay">
                      <Button 
                        onClick={(e) => handleAddToCart(product, e)}
                        className="btn-primary shadow-glow-primary"
                      >
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h3 className="font-bold text-xl line-clamp-2 group-hover:text-gradient-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground">
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
                        <span className="text-sm text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-gradient-primary">
                            ₹{product.price.toLocaleString()}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-base text-muted-foreground line-through">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        <Badge variant="outline" className="text-xs border-primary/20 capitalize">
                          {product.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          // List View
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <Card className="product-card card-enhanced hover-lift group">
                  <div className="flex">
                    <div className="relative w-48 h-48 flex-shrink-0">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover rounded-l-lg"
                      />
                      <Badge className="absolute top-4 left-4 bg-gradient-brand text-white">
                        {product.badge}
                      </Badge>
                    </div>
                    <CardContent className="flex-1 p-6 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-bold text-2xl group-hover:text-gradient-primary transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-lg text-muted-foreground">
                              by {product.artisan}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => toggleWishlist(product.id, e)}
                            >
                              <Heart className={`h-4 w-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => handleAddToCart(product, e)}
                            >
                              <ShoppingBag className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground line-clamp-2">
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
                            <span className="ml-2 text-sm text-muted-foreground">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>
                          <Badge variant="outline" className="capitalize">
                            {product.category}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center space-x-2">
                          <span className="text-3xl font-bold text-gradient-primary">
                            ₹{product.price.toLocaleString()}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-lg text-muted-foreground line-through">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        <Button 
                          onClick={(e) => handleAddToCart(product, e)}
                          className="btn-primary shadow-glow-primary"
                        >
                          <ShoppingBag className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* Load More */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Button size="lg" className="btn-secondary hover-lift text-lg px-8 py-4">
              Load More Products
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or browse all categories
            </p>
            <Button onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
              setPriceRange([0, 5000]);
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;