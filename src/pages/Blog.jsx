import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Traditional Indian Jewelry Making",
      excerpt: "Explore the intricate techniques and cultural significance behind India's most cherished jewelry traditions.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=250&fit=crop&crop=center",
      author: "Meera Sharma",
      date: "March 10, 2024",
      category: "Jewelry",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Madhubani Paintings: Stories on Canvas",
      excerpt: "Discover the rich storytelling tradition of Madhubani art and its evolution in contemporary times.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=250&fit=crop&crop=center",
      author: "Sunita Devi",
      date: "March 8, 2024",
      category: "Paintings",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Sustainable Crafting: Eco-Friendly Art Materials",
      excerpt: "Learn about environmentally conscious materials and techniques used by modern artisans.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center",
      author: "Dr. Kavita Singh",
      date: "March 5, 2024",
      category: "Sustainability",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Revival of Handloom Textiles",
      excerpt: "How traditional weaving techniques are finding new relevance in contemporary fashion.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center",
      author: "Rajesh Kumar",
      date: "March 3, 2024",
      category: "Textiles",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Festival Gifting: Choosing Meaningful Handmade Presents",
      excerpt: "A guide to selecting thoughtful, artisan-made gifts for every celebration.",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=250&fit=crop&crop=center",
      author: "Anita Verma",
      date: "February 28, 2024",
      category: "Gifts",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Behind the Craft: Meet Master Potter Amit Verma",
      excerpt: "An intimate conversation with one of India's most renowned ceramic artists.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&crop=center",
      author: "Editorial Team",
      date: "February 25, 2024",
      category: "Artisan Stories",
      readTime: "10 min read"
    }
  ];

  const categories = ["All", "Jewelry", "Paintings", "Textiles", "Sustainability", "Gifts", "Artisan Stories"];
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-6">
          Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Journal</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Stories, insights, and inspiration from the world of Indian crafts and artisans.
        </p>
      </section>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === "All" ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary hover:text-white transition-colors px-4 py-2"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Featured Post */}
      <section className="mb-16">
        <Card className="overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title}
              className="w-full h-64 lg:h-full object-cover"
            />
            <div className="p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-4 bg-primary">{featuredPost.category}</Badge>
              <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <span>by {featuredPost.author}</span>
                  <span>{featuredPost.date}</span>
                </div>
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Regular Posts Grid */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>by {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 mt-16 bg-gradient-to-r from-primary to-secondary text-white rounded-3xl text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest stories, craft tips, and artisan spotlights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900"
          />
          <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;