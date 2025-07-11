import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Trainings = () => {
  const upcomingTrainings = [
    {
      id: 1,
      title: "Traditional Jewelry Making",
      instructor: "Master Craftsman Rajesh Kumar",
      duration: "3 Days",
      price: 2999,
      date: "March 15-17, 2024",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop&crop=center",
      level: "Beginner",
      seats: "12 seats left"
    },
    {
      id: 2,
      title: "Madhubani Painting Workshop",
      instructor: "Artist Sunita Devi",
      duration: "2 Days",
      price: 1899,
      date: "March 22-23, 2024",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
      level: "All Levels",
      seats: "8 seats left"
    },
    {
      id: 3,
      title: "Pottery & Ceramics",
      instructor: "Master Potter Amit Verma",
      duration: "5 Days",
      price: 3999,
      date: "April 5-9, 2024",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      level: "Intermediate",
      seats: "15 seats left"
    },
    {
      id: 4,
      title: "Textile Weaving Basics",
      instructor: "Weaver Kavita Singh",
      duration: "4 Days",
      price: 2499,
      date: "April 12-15, 2024",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
      level: "Beginner",
      seats: "10 seats left"
    }
  ];

  const pastWorkshops = [
    {
      title: "Block Printing Workshop",
      participants: 25,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "Embroidery Masterclass",
      participants: 18,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "Wood Carving Basics",
      participants: 12,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=300&h=200&fit=crop&crop=center"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-6">
          Learn <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Traditional Crafts</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Master the ancient art forms passed down through generations. Learn from skilled artisans and discover the joy of creating with your hands.
        </p>
      </section>

      {/* Upcoming Trainings */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Upcoming Training Programs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {upcomingTrainings.map((training) => (
            <Card key={training.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={training.image} 
                alt={training.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{training.title}</CardTitle>
                  <Badge variant="outline">{training.level}</Badge>
                </div>
                <p className="text-muted-foreground">by {training.instructor}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Duration:</span> {training.duration}
                  </div>
                  <div>
                    <span className="font-medium">Date:</span> {training.date}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-primary">₹{training.price.toLocaleString()}</span>
                    <p className="text-sm text-muted-foreground">{training.seats}</p>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="py-16 bg-gradient-to-br from-accent/30 to-background rounded-3xl mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Learn With Us?</h2>
          <p className="text-xl text-muted-foreground">Experience authentic learning from master craftspeople</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">👨‍🏫</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-muted-foreground">
              Learn from master artisans with decades of experience in traditional crafts.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Certification</h3>
            <p className="text-muted-foreground">
              Receive official certificates upon completion of your training programs.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Small Groups</h3>
            <p className="text-muted-foreground">
              Intimate class sizes ensure personalized attention and better learning outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Past Workshops */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Past Workshops</h2>
        <p className="text-muted-foreground mb-8">See what our students have accomplished</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pastWorkshops.map((workshop, index) => (
            <Card key={index} className="overflow-hidden">
              <img 
                src={workshop.image} 
                alt={workshop.title}
                className="w-full h-32 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{workshop.title}</h3>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{workshop.participants} participants</span>
                  <span>⭐ {workshop.rating}/5</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white rounded-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-2xl p-6">
            <p className="mb-4 italic">
              "The jewelry making workshop was incredible! I learned techniques I never thought I could master. 
              The instructor was patient and the small group setting made all the difference."
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b9f0?w=50&h=50&fit=crop&crop=face" 
                alt="Student"
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">Priya Sharma</p>
                <p className="text-sm opacity-80">Mumbai</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6">
            <p className="mb-4 italic">
              "Learning Madhubani painting was a dream come true. The cultural context provided by the instructor 
              made the experience so much richer. Highly recommended!"
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" 
                alt="Student"
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">Raj Patel</p>
                <p className="text-sm opacity-80">Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainings;