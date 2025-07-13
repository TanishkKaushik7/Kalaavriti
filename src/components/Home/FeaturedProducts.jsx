import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useCart } from '../../contexts/CartContext';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';

const FeaturedProducts = () => {
  const { addItem } = useCart();
  const [wishlist, setWishlist] = useState([]);

  const featuredProducts = products.slice(0, 4);

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('[FeaturedProducts] handleAddToCart called with product:', product);
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      artisan: product.artisan,
      category: product.category
    };
    console.log('[FeaturedProducts] Adding item to cart:', itemToAdd);
    addItem(itemToAdd);
    console.log('[FeaturedProducts] addItem called, checking if cart updated...');
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
    <section className="py-24 bg-gradient-to-b from-background via-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient-brand">
            Featured <span className="text-gradient-primary">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked collection of exceptional handcrafted items from master artisans
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <Card className="product-card card-enhanced hover-lift group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-image w-full h-56 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-brand text-white shadow-lg">
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