import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background via-accent/30 to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-secondary rounded-full opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-brand rounded-full opacity-10 animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 hero-animation">
            <div className="space-y-4">
              <h1 className="heading-primary leading-tight">
                <span className="text-gradient-brand animate-gradient">
                  Where Stories
                </span>
                <br />
                <span className="text-foreground font-extrabold">Take Shape</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed">
                Discover India's finest handcrafted treasures. From traditional jewelry to exquisite home décor, 
                each piece tells a unique story of artisan craftsmanship.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/shop">
                <Button size="lg" className="btn-primary hover-lift text-lg px-8 py-4">
                  Explore Collections
                </Button>
              </Link>
              <Link to="/trainings">
                <Button variant="outline" size="lg" className="btn-secondary text-lg px-8 py-4 hover-lift">
                  Learn Crafts
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center stagger-animation">
                <div className="text-4xl font-bold text-gradient-primary mb-2">
                  500+
                </div>
                <div className="text-sm font-medium text-muted-foreground">Unique Products</div>
              </div>
              <div className="text-center stagger-animation">
                <div className="text-4xl font-bold text-gradient-secondary mb-2">
                  100+
                </div>
                <div className="text-sm font-medium text-muted-foreground">Skilled Artisans</div>
              </div>
              <div className="text-center stagger-animation">
                <div className="text-4xl font-bold text-gradient-brand mb-2">
                  50+
                </div>
                <div className="text-sm font-medium text-muted-foreground">Training Programs</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative hero-animation">
            <div className="relative glass-effect rounded-3xl p-8 border-gradient">
              <img 
                src="https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop&crop=center" 
                alt="Artisan crafting jewelry" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-glow-primary hover-lift"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-glow-secondary border-gradient">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-primary">₹2,999</div>
                  <div className="text-sm font-medium text-muted-foreground">Handcrafted Silver Necklace</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-primary rounded-full animate-float shadow-glow-primary"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-secondary rounded-full animate-float shadow-glow-secondary" style={{animationDelay: '3s'}}></div>
            <div className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-brand rounded-full animate-float shadow-brand" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;