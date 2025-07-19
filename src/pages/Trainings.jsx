import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Star, Clock, Users, Calendar, MapPin, ChevronRight, Search, Sparkles, Award, TrendingUp, Heart, Eye } from 'lucide-react';

const Trainings = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState([]);

  const upcomingTrainings = [
    {
      id: 1,
      title: "Traditional Jewelry Making",
      instructor: "Master Craftsman Rajesh Kumar",
      duration: "3 Days",
      price: 2999,
      date: "March 15-17, 2024",
      location: "Mumbai Workshop",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop&crop=center",
      level: "Beginner",
      seats: 12,
      rating: 4.8,
      skills: ["Metalwork", "Stone Setting", "Design"],
      badge: "Popular"
    },
    {
      id: 2,
      title: "Madhubani Painting Workshop",
      instructor: "Artist Sunita Devi",
      duration: "2 Days",
      price: 1899,
      date: "March 22-23, 2024",
      location: "Delhi Art Center",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
      level: "All Levels",
      seats: 8,
      rating: 4.9,
      skills: ["Brush Techniques", "Color Mixing", "Traditional Motifs"],
      badge: "Best Seller"
    },
    {
      id: 3,
      title: "Pottery & Ceramics Intensive",
      instructor: "Master Potter Amit Verma",
      duration: "5 Days",
      price: 3999,
      date: "April 5-9, 2024",
      location: "Bangalore Studio",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      level: "Intermediate",
      seats: 15,
      rating: 4.7,
      skills: ["Wheel Throwing", "Glazing", "Kiln Firing"],
      badge: "New"
    },
    {
      id: 4,
      title: "Textile Weaving Masterclass",
      instructor: "Weaver Kavita Singh",
      duration: "4 Days",
      price: 2499,
      date: "April 12-15, 2024",
      location: "Chennai Weaving Center",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
      level: "Beginner",
      seats: 10,
      rating: 4.6,
      skills: ["Loom Setup", "Pattern Design", "Fabric Dyeing"],
      badge: "Limited"
    }
  ];

  const pastWorkshops = [
    {
      id: 5,
      title: "Block Printing Workshop",
      participants: 25,
      rating: 4.8,
      date: "February 2024",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center",
      testimonials: [
        "Learned authentic techniques from Rajasthan",
        "Great materials provided",
        "Would take again!"
      ]
    },
    {
      id: 6,
      title: "Embroidery Masterclass",
      participants: 18,
      rating: 4.9,
      date: "January 2024",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
      testimonials: [
        "Detailed instruction on various stitches",
        "Beautiful finished project",
        "Instructor was very patient"
      ]
    },
    {
      id: 7,
      title: "Wood Carving Basics",
      participants: 12,
      rating: 4.7,
      date: "December 2023",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop&crop=center",
      testimonials: [
        "Safety was emphasized throughout",
        "Good balance of theory and practice",
        "Came home with 3 finished pieces"
      ]
    }
  ];

  const filteredTrainings = upcomingTrainings.filter(training =>
    training.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    training.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    training.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleRegister = (id) => {
    console.log(`Registering for training ${id}`);
  };

  const toggleWishlist = (trainingId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist(prev => 
      prev.includes(trainingId) 
        ? prev.filter(id => id !== trainingId)
        : [...prev, trainingId]
    );
  };

  const getBadgeColor = (badge) => {
    const colors = {
      'Best Seller': 'bg-gradient-to-r from-yellow-400 to-orange-500',
      'New': 'bg-gradient-to-r from-green-400 to-blue-500',
      'Limited': 'bg-gradient-to-r from-red-400 to-pink-500',
      'Trending': 'bg-gradient-to-r from-purple-400 to-pink-500',
      'Popular': 'bg-gradient-to-r from-blue-400 to-cyan-500',
      'Exclusive': 'bg-gradient-to-r from-indigo-400 to-purple-500'
    };
    return colors[badge] || 'bg-gradient-to-r from-gray-400 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12 md:py-20 bg-white/80 backdrop-blur-md rounded-3xl mb-16 px-6 shadow-xl border border-white/20">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-purple-600 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Master <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Traditional Crafts</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Learn from India's finest artisans through immersive, hands-on workshops that preserve our cultural heritage.
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input 
              type="text" 
              placeholder="Search workshops by skill, location, or instructor..."
              className="pl-12 pr-4 py-6 rounded-full shadow-sm border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </section>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-2 max-w-xs mx-auto mb-8 shadow-lg border border-white/20">
            <TabsList className="grid w-full grid-cols-2 bg-transparent">
              <TabsTrigger 
                value="upcoming" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white rounded-xl font-semibold transition-all duration-200"
              >
                Upcoming
              </TabsTrigger>
              <TabsTrigger 
                value="past"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white rounded-xl font-semibold transition-all duration-200"
              >
                Past Workshops
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="upcoming">
            {filteredTrainings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredTrainings.map((training) => (
                  <Card key={training.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white/90 backdrop-blur-md border border-white/20">
                    <div className="relative">
                      <img 
                        src={training.image} 
                        alt={training.title}
                        className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-medium ${getBadgeColor(training.badge)}`}>
                        {training.badge}
                      </div>
                      <div className="absolute bottom-4 left-4 flex items-center bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="text-sm font-medium">{training.rating}</span>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="absolute top-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => toggleWishlist(training.id, e)}
                          className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
                        >
                          <Heart className={`h-4 w-4 ${wishlist.includes(training.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                        </button>
                        <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
                          <Eye className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">{training.title}</CardTitle>
                      <p className="text-gray-600">by {training.instructor}</p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {training.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-purple-200 text-purple-700 bg-purple-50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-purple-600" />
                          <span>{training.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                          <span>{training.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                          <span>{training.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-purple-600" />
                          <span>{training.seats} seats left</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center pt-2">
                        <div>
                          <span className="text-2xl font-bold text-purple-600">₹{training.price.toLocaleString()}</span>
                          <p className="text-sm text-gray-500">Includes all materials</p>
                        </div>
                        <Button 
                          onClick={() => handleRegister(training.id)}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                          Register Now <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                  <Search className="h-16 w-16 text-purple-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-600 mb-4">
                  No workshops match your search.
                </h3>
                <p className="text-gray-500 mb-6">Try different keywords or browse all workshops.</p>
                <Button 
                  onClick={() => setSearchQuery('')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                >
                  Clear Search
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="past">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pastWorkshops.map((workshop) => (
                <Card key={workshop.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-md border border-white/20">
                  <div className="relative">
                    <img 
                      src={workshop.image} 
                      alt={workshop.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-4 right-4 flex items-center bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{workshop.rating}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-purple-700">{workshop.title}</CardTitle>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{workshop.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium mb-2 text-purple-700">What participants said:</h4>
                    <ul className="space-y-2 text-sm">
                      {workshop.testimonials.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block mr-2 text-purple-500">•</span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-1 text-purple-600" />
                      <span>{workshop.participants} participants</span>
                    </div>
                    <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                      View Gallery
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white/80 backdrop-blur-md rounded-3xl mb-16 px-8 shadow-xl border border-white/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Learn Traditional Crafts?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preserve heritage while developing marketable skills in today's artisanal economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "👨‍🏫",
                title: "Master Artisans",
                description: "Learn directly from National Award winners and 5th generation craftspeople"
              },
              {
                icon: "🛠️",
                title: "Hands-On Training",
                description: "80% practical sessions with professional-grade tools and materials"
              },
              {
                icon: "📜",
                title: "Certification",
                description: "Earn recognized certificates that enhance your professional credibility"
              },
              {
                icon: "🏛️",
                title: "Cultural Context",
                description: "Understand the historical and cultural significance of each craft"
              },
              {
                icon: "🤝",
                title: "Small Batches",
                description: "Maximum 15 students per workshop for personalized attention"
              },
              {
                icon: "🛍️",
                title: "Market Access",
                description: "Opportunities to showcase and sell your work through our partner platforms"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl mb-4 flex items-center justify-center text-2xl shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-700">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hear From Our Students</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands who've rediscovered India's craft heritage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "The jewelry making workshop transformed my hobby into a profession. I now earn ₹25,000 monthly from my creations!",
                name: "Priya Sharma",
                location: "Mumbai",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b9f0?w=100&h=100&fit=crop&crop=face",
                workshop: "Traditional Jewelry Making"
              },
              {
                quote: "After the Madhubani workshop, I was commissioned to paint murals for a boutique hotel. The techniques I learned were invaluable.",
                name: "Raj Patel",
                location: "Delhi",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                workshop: "Madhubani Painting"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-purple-700">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <blockquote className="text-lg italic mb-6 text-gray-700">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center text-sm">
                  <span className="text-gray-500">Attended:</span>
                  <span className="ml-2 font-medium text-purple-700">{testimonial.workshop}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Banner */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 text-center mb-16 shadow-xl border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Workshops</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">25+</div>
              <div className="text-gray-600">Master Artisans</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">2K+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl text-center px-6 shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Craft Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our community of artisans and keep traditional crafts alive
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="px-8 py-6 text-base bg-white text-purple-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-200">
              Browse All Workshops
            </Button>
            <Button variant="outline" className="px-8 py-6 text-base bg-white/10 hover:bg-white/20 border-white/30 text-white shadow-lg hover:shadow-xl transition-all duration-200">
              Gift a Workshop
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Trainings;