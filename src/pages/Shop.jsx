import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

const Shop = () => {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');


  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'jewelry', label: 'Jewelry' },
    { value: 'rakhis', label: 'Rakhis' },
    { value: 'home-decor', label: 'Home Décor' },
    { value: 'paintings', label: 'Paintings' },
    { value: 'textiles', label: 'Textiles' },
    { value: 'gifts', label: 'Gifts' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      artisan: product.artisan,
      category: product.category
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="heading-primary mb-6">
          Our <span className="text-gradient-brand">Collection</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Discover handcrafted treasures from talented artisans across India
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[250px] border-gradient">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-[250px] border-gradient">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product, index) => (
          <Link to={`/product/${product.id}`} key={product.id}>
          <Card className={`product-card card-enhanced hover-lift stagger-animation`} style={{animationDelay: `${index * 0.05}s`}}>
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image w-full h-56 object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-gradient-brand text-white shadow-lg">
                {product.badge}
              </Badge>
              <div className="product-overlay">
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="btn-primary shadow-glow-primary"
                >
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
                </div>
              </div>
            </CardContent>
          </Card>
          </Link>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button size="lg" className="btn-secondary hover-lift text-lg px-8 py-4">
          Load More Products
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Shop;