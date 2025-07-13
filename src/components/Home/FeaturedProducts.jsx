import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useCart } from '../../contexts/CartContext';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const { addItem } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const featuredProducts = products.slice(0, 4);

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
    <section className="py-24 bg-gradient-to-b from-background via-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">
            Featured <span className="text-gradient-brand">Products</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Handpicked treasures from our most talented artisans, each piece crafted with love and tradition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <Link to={`/product/${product.id}`} key={product.id}>
            <Card 
              key={product.id} 
              className={`product-card card-enhanced hover-lift stagger-animation cursor-pointer`}
              style={{animationDelay: `${index * 0.1}s`}}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
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
                    <Badge variant="outline" className="text-xs border-primary/20">
                      {product.category}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
          <Button size="lg" className="btn-secondary hover-lift text-lg px-8 py-4">
            View All Products
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;