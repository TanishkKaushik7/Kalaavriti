import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

const FeaturedProducts = () => {
  const { addItem } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: "1",
      name: "Traditional Silver Necklace",
      price: 2999,
      originalPrice: 3499,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
      artisan: "Meera Sharma",
      category: "Jewelry",
      badge: "Bestseller"
    },
    {
      id: "2",
      name: "Handwoven Silk Rakhi Set",
      price: 899,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1597149379930-6c70c4e41d6f?w=400&h=400&fit=crop&crop=center",
      artisan: "Rajesh Kumar",
      category: "Rakhis",
      badge: "Limited Edition"
    },
    {
      id: "3",
      name: "Madhubani Canvas Painting",
      price: 1899,
      originalPrice: 2299,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop&crop=center",
      artisan: "Sunita Devi",
      category: "Paintings",
      badge: "New Arrival"
    },
    {
      id: "4",
      name: "Brass Home Décor Set",
      price: 1599,
      originalPrice: 1899,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
      artisan: "Amit Verma",
      category: "Home Décor",
      badge: "Popular"
    }
  ];

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
    <section className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked treasures from our most talented artisans, each piece crafted with love and tradition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-3 left-3 bg-primary text-white">
                  {product.badge}
                </Badge>
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300">
                    <Button 
                      onClick={() => handleAddToCart(product)}
                      className="bg-white text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      Add to Cart
                    </Button>
                  </div>
                )}
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
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;