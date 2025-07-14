import { useState } from 'react';
import { Heart, ShoppingBag, Star, Eye, Sparkles, TrendingUp } from 'lucide-react';

// Mock data for demonstration
const products = [
  {
    id: 1,
    name: "Handwoven Silk Scarf",
    price: 2499,
    originalPrice: 3200,
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
    artisan: "Priya Sharma",
    category: "textiles",
    badge: "Trending",
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Ceramic Tea Set",
    price: 3599,
    originalPrice: 4200,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
    artisan: "Ravi Kumar",
    category: "pottery",
    badge: "Best Seller",
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Brass Incense Holder",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    artisan: "Meera Devi",
    category: "home decor",
    badge: "New",
    rating: 4.7,
    reviews: 56
  },
  {
    id: 4,
    name: "Wooden Jewelry Box",
    price: 4299,
    originalPrice: 5100,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    artisan: "Arjun Singh",
    category: "woodcraft",
    badge: "Limited",
    rating: 4.6,
    reviews: 78
  }
];

const FeaturedProducts = () => {
  const [wishlist, setWishlist] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const featuredProducts = products.slice(0, 4);

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      artisan: product.artisan,
      category: product.category
    };
    
    setCart(prev => [...prev, itemToAdd]);
    console.log('Added to cart:', itemToAdd);
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

  const handleProductClick = (productId) => {
    console.log('Navigate to product:', productId);
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#0097B2]/10 to-[#8F0557]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#8F0557]/10 to-[#0097B2]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0097B2 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0097B2]/10 to-[#8F0557]/10 rounded-full mb-6">
            <Sparkles className="h-5 w-5 text-[#0097B2]" />
            <span className="text-sm font-semibold text-[#8F0557]">Handcrafted Excellence</span>
          </div>
          
          <h2 className="text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-[#0097B2] via-[#8F0557] to-[#0097B2] bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="text-slate-800">Collections</span>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#0097B2] to-[#8F0557] rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#8F0557] to-[#0097B2] rounded-full opacity-30 animate-pulse"></div>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked collection of exceptional handcrafted items from master artisans around the world
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl cursor-pointer"
              style={{
                animationDelay: `${index * 0.15}s`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#0097B2] to-[#8F0557] text-white shadow-lg border-0 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  {product.badge}
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button
                    className="bg-white/90 backdrop-blur-sm border-0 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 p-2 rounded-full"
                    onClick={(e) => toggleWishlist(product.id, e)}
                    style={{transitionDelay: '0.1s'}}
                  >
                    <Heart className={`h-4 w-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
                  </button>
                  
                  <button
                    className="bg-white/90 backdrop-blur-sm border-0 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 p-2 rounded-full"
                    style={{transitionDelay: '0.2s'}}
                  >
                    <Eye className="h-4 w-4 text-slate-600" />
                  </button>
                </div>
                
                {/* Quick Add to Cart */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <button 
                    onClick={(e) => handleAddToCart(product, e)}
                    className="w-full bg-gradient-to-r from-[#0097B2] to-[#8F0557] hover:from-[#0097B2]/90 hover:to-[#8F0557]/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
              
              <div className="p-6 relative">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0097B2]/5 to-[#8F0557]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
                
                <div className="space-y-4 relative z-10">
                  <h3 className="font-bold text-xl text-slate-800 line-clamp-2 group-hover:text-[#0097B2] transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm font-medium text-slate-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-gradient-to-r from-[#0097B2] to-[#8F0557] rounded-full"></span>
                    by {product.artisan}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 transition-colors duration-200 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-500">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold bg-gradient-to-r from-[#0097B2] to-[#8F0557] bg-clip-text text-transparent">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-base text-slate-400 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <div className="text-xs border border-[#0097B2]/20 text-[#8F0557] capitalize bg-gradient-to-r from-[#0097B2]/10 to-[#8F0557]/10 px-3 py-1 rounded-full">
                      {product.category}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            className="relative overflow-hidden bg-gradient-to-r from-[#0097B2] to-[#8F0557] hover:from-[#0097B2]/90 hover:to-[#8F0557]/90 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-12 py-4 rounded-full group font-semibold"
            onClick={() => console.log('Navigate to shop')}
          >
            <span className="relative z-10">View All Products</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;