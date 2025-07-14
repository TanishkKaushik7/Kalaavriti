import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useCart } from '../contexts/CartContext';
import { getProductById, getProductsByCategory } from '../data/products';
import { ArrowLeft, Heart, Share2, Star, Truck, Shield, RotateCcw, CheckCircle, AlertCircle, Clock, MapPin, Award, Users, Eye, ShoppingBag } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedColor, setSelectedColor] = useState('classic');
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const product = getProductById(id);
  const relatedProducts = getProductsByCategory(product?.category || 'all').filter(p => p.id !== id).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    console.log('[ProductDetail] handleAddToCart called with quantity:', quantity);
    console.log('[ProductDetail] Product:', product);
    
    for (let i = 0; i < quantity; i++) {
      const itemToAdd = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        artisan: product.artisan,
        category: product.category
      };
      console.log('[ProductDetail] Adding item to cart:', itemToAdd);
      addItem(itemToAdd);
    }
    console.log('[ProductDetail] Finished adding items to cart');
  };

  const handleBuyNow = () => {
    handleAddToCart();
    // Navigate to cart immediately
    window.location.href = '/cart';
  };

  const mockReviews = [
    {
      id: 1,
      user: "Priya Sharma",
      rating: 5,
      date: "2024-01-15",
      title: "Absolutely Beautiful!",
      comment: "This product exceeded my expectations. The craftsmanship is outstanding and it arrived in perfect condition. Highly recommend!",
      verified: true
    },
    {
      id: 2,
      user: "Rajesh Kumar",
      rating: 4,
      date: "2024-01-10",
      title: "Great Quality",
      comment: "Very well made product. The artisan's work is evident in every detail. Shipping was fast and packaging was excellent.",
      verified: true
    },
    {
      id: 3,
      user: "Anita Patel",
      rating: 5,
      date: "2024-01-08",
      title: "Perfect Gift",
      comment: "Bought this as a gift and the recipient loved it! The quality is amazing and it's truly unique. Will definitely buy again.",
      verified: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
            Shop
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to={`/shop?category=${product.category}`} className="text-muted-foreground hover:text-primary transition-colors capitalize">
            {product.category}
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
              />
              <Badge className="absolute top-4 left-4 bg-gradient-brand text-white">
                {product.badge}
              </Badge>
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-white/90 backdrop-blur-sm"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-primary shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-gradient-brand">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">by {product.artisan}</p>
              
              {/* Rating and Reviews */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified Purchase
                </Badge>
              </div>

              {/* Price Section */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-gradient-primary">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  {product.originalPrice > product.price && (
                    <Badge variant="destructive">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>
                {product.originalPrice > product.price && (
                  <p className="text-sm text-green-600 font-medium">
                    You save ₹{(product.originalPrice - product.price).toLocaleString()}!
                  </p>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2 mb-4">
                {product.inStock ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">In Stock ({product.stockCount} available)</span>
                  </div>
                ) : (
                  <div className="flex items-center text-red-600">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">Out of Stock</span>
                  </div>
                )}
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                {product.description}
              </p>
            </div>

            {/* Product Options */}
            {product.category === 'jewelry' && (
              <div className="space-y-4">
                <div>
                  <label className="font-medium mb-2 block">Size:</label>
                  <div className="flex space-x-2">
                    {['small', 'medium', 'large'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg border transition-all ${
                          selectedSize === size
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {size.charAt(0).toUpperCase() + size.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="font-medium">Quantity:</label>
                <div className="flex items-center border rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.stockCount} in stock
                </span>
              </div>

              <div className="flex space-x-4">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-brand hover:shadow-glow-primary transition-all duration-300 text-lg py-6"
                  size="lg"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  onClick={handleBuyNow}
                  variant="outline" 
                  size="lg" 
                  className="flex-1 text-lg py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On orders over ₹999</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Authentic</p>
                <p className="text-xs text-muted-foreground">Handcrafted guarantee</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">30-Day Returns</p>
                <p className="text-xs text-muted-foreground">Easy returns</p>
              </div>
            </div>

            {/* Artisan Info */}
            <Card className="card-enhanced">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Crafted by {product.artisan}</h3>
                    <p className="text-sm text-muted-foreground">Master Artisan</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {product.specifications.origin}
                      </div>
                      <div className="flex items-center">
                        <Award className="h-3 w-3 mr-1" />
                        Verified Artisan
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:w-[500px]">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-8">
              <Card className="card-enhanced">
                <CardContent className="p-8">
                  <div className="prose max-w-none">
                    <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                      {product.detailedDescription}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-8">
              <Card className="card-enhanced">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <Card className="card-enhanced">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Customer Reviews</h3>
                        <p className="text-muted-foreground">
                          {product.reviews} reviews with an average rating of {product.rating}/5
                        </p>
                      </div>
                      <Button variant="outline">Write a Review</Button>
                    </div>
                    
                    <div className="space-y-6">
                      {mockReviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-100 pb-6">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold">{review.title}</h4>
                              <div className="flex items-center space-x-2 mt-1">
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-muted-foreground">by {review.user}</span>
                                {review.verified && (
                                  <Badge variant="outline" className="text-xs">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Verified Purchase
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shipping" className="mt-8">
              <Card className="card-enhanced">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Shipping Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <Truck className="h-6 w-6 text-primary" />
                            <div>
                              <h4 className="font-semibold">Free Shipping</h4>
                              <p className="text-sm text-muted-foreground">On orders over ₹999</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Clock className="h-6 w-6 text-primary" />
                            <div>
                              <h4 className="font-semibold">Delivery Time</h4>
                              <p className="text-sm text-muted-foreground">3-7 business days</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <Shield className="h-6 w-6 text-primary" />
                            <div>
                              <h4 className="font-semibold">Secure Packaging</h4>
                              <p className="text-sm text-muted-foreground">Gift-ready packaging</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <RotateCcw className="h-6 w-6 text-primary" />
                            <div>
                              <h4 className="font-semibold">Easy Returns</h4>
                              <p className="text-sm text-muted-foreground">30-day return policy</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link to={`/product/${relatedProduct.id}`} key={relatedProduct.id}>
                  <Card className="product-card card-enhanced hover-lift">
                    <div className="relative">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name}
                        className="product-image w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-gradient-brand text-white">
                        {relatedProduct.badge}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        by {relatedProduct.artisan}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gradient-primary">
                          ₹{relatedProduct.price.toLocaleString()}
                        </span>
                        {relatedProduct.originalPrice > relatedProduct.price && (
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{relatedProduct.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;