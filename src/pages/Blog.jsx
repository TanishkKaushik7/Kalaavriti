import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Search, Calendar, Clock, User, ArrowRight, Filter } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Traditional Indian Jewelry Making",
      excerpt: "Explore the intricate techniques and cultural significance behind India's most cherished jewelry traditions.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=250&fit=crop&crop=center",
      author: "Meera Sharma",
      date: "March 10, 2024",
      category: "Jewelry",
      readTime: "5 min read",
      tags: ["traditional", "culture", "handmade"]
    },
    {
      id: 2,
      title: "Madhubani Paintings: Stories on Canvas",
      excerpt: "Discover the rich storytelling tradition of Madhubani art and its evolution in contemporary times.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=250&fit=crop&crop=center",
      author: "Sunita Devi",
      date: "March 8, 2024",
      category: "Paintings",
      readTime: "7 min read",
      tags: ["art", "stories", "tradition"]
    },
    {
      id: 3,
      title: "Sustainable Crafting: Eco-Friendly Art Materials",
      excerpt: "Learn about environmentally conscious materials and techniques used by modern artisans.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center",
      author: "Dr. Kavita Singh",
      date: "March 5, 2024",
      category: "Sustainability",
      readTime: "6 min read",
      tags: ["eco-friendly", "sustainable", "modern"]
    },
    {
      id: 4,
      title: "The Revival of Handloom Textiles",
      excerpt: "How traditional weaving techniques are finding new relevance in contemporary fashion.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center",
      author: "Rajesh Kumar",
      date: "March 3, 2024",
      category: "Textiles",
      readTime: "8 min read",
      tags: ["weaving", "fashion", "revival"]
    },
    {
      id: 5,
      title: "Festival Gifting: Choosing Meaningful Handmade Presents",
      excerpt: "A guide to selecting thoughtful, artisan-made gifts for every celebration.",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=250&fit=crop&crop=center",
      author: "Anita Verma",
      date: "February 28, 2024",
      category: "Gifts",
      readTime: "4 min read",
      tags: ["gifts", "festivals", "celebration"]
    },
    {
      id: 6,
      title: "Behind the Craft: Meet Master Potter Amit Verma",
      excerpt: "An intimate conversation with one of India's most renowned ceramic artists.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&crop=center",
      author: "Editorial Team",
      date: "February 25, 2024",
      category: "Artisan Stories",
      readTime: "10 min read",
      tags: ["interview", "pottery", "artisan"]
    }
  ];

  const categories = ["All", "Jewelry", "Paintings", "Textiles", "Sustainability", "Gifts", "Artisan Stories"];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-200 to-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r from-red-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Enhanced Header */}
        <section className="text-center py-20">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent animate-pulse">Journal</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Stories, insights, and inspiration from the world of Indian crafts and artisans
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, tags, or authors..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none text-lg bg-white/80 backdrop-blur-sm shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Enhanced Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <div className="flex items-center text-slate-600 mr-4">
            <Filter className="w-4 h-4 mr-2" />
            <span className="font-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === activeCategory ? "default" : "outline"}
              className={`cursor-pointer transition-all duration-300 px-6 py-3 text-sm font-medium rounded-full ${
                category === activeCategory 
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105" 
                  : "hover:bg-orange-100 hover:border-orange-300 hover:scale-105"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Enhanced Featured Post */}
        {featuredPost && (
          <section className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Featured Article</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
            </div>
            
            <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-4xl font-bold mb-6 hover:text-orange-600 transition-colors cursor-pointer leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{featuredPost.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <button className="flex items-center text-orange-600 hover:text-orange-700 font-semibold group/btn">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Enhanced Regular Posts Grid */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Latest Articles</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>
          
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Badge className="absolute top-4 left-4 bg-white/90 text-slate-700 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl group-hover:text-orange-600 transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-slate-400">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span className="text-xs">{post.date}</span>
                      </div>
                      <button className="text-orange-600 hover:text-orange-700 font-medium text-sm group/btn">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1 inline group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-slate-600 mb-2">No articles found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </section>

        {/* Enhanced Newsletter Signup */}
        <section className="py-20 mt-20 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="text-5xl mb-6">✨</div>
            <h2 className="text-4xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter for the latest stories, craft tips, and exclusive artisan spotlights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-slate-900 border-0 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
              />
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Subscribe Now
              </button>
            </div>
            <p className="text-sm opacity-70 mt-4">No spam, unsubscribe anytime.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;