import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext';

const Shop = () => {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: "1",
      name: "Traditional Silver Necklace",
      price: 2999,
      originalPrice: 3499,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
      artisan: "Meera Sharma",
      category: "jewelry",
      badge: "Bestseller"
    },
    {
      id: "2",
      name: "Handwoven Silk Rakhi Set",
      price: 899,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1597149379930-6c70c4e41d6f?w=400&h=400&fit=crop&crop=center",
      artisan: "Rajesh Kumar",
      category: "rakhis",
      badge: "Limited Edition"
    },
    {
      id: "3",
      name: "Madhubani Canvas Painting",
      price: 1899,
      originalPrice: 2299,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop&crop=center",
      artisan: "Sunita Devi",
      category: "paintings",
      badge: "New Arrival"
    },
    {
      id: "4",
      name: "Brass Home Décor Set",
      price: 1599,
      originalPrice: 1899,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
      artisan: "Amit Verma",
      category: "home-decor",
      badge: "Popular"
    },
    {
      id: "5",
      name: "Embroidered Cushion Covers",
      price: 799,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
      artisan: "Kavita Singh",
      category: "textiles",
      badge: "Handmade"
    },
    {
      id: "6",
      name: "Wooden Carved Elephants",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop&crop=center",
      artisan: "Ravi Patel",
      category: "gifts",
      badge: "Eco-friendly"
    }
  ];

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
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Collection</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Discover handcrafted treasures from talented artisans across India
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[200px]">
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
          <SelectTrigger className="w-full sm:w-[200px]">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <Badge className="absolute top-3 left-3 bg-primary text-white">
                {product.badge}
              </Badge>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="bg-white text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
            
            <CardContent className="p-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  by {product.artisan}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-primary">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
          Load More Products
        </Button>
      </div>
    </div>
  );
};

export default Shop;