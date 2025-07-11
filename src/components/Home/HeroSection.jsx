import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-accent via-background to-secondary/10">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Where Stories
                </span>
                <br />
                <span className="text-foreground">Take Shape</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Discover India's finest handcrafted treasures. From traditional jewelry to exquisite home décor, 
                each piece tells a unique story of artisan craftsmanship.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300">
                  Explore Collections
                </Button>
              </Link>
              <Link to="/trainings">
                <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300">
                  Learn Crafts
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">Unique Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  100+
                </div>
                <div className="text-sm text-muted-foreground">Skilled Artisans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">Training Programs</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=800&fit=crop&crop=center" 
                alt="Artisan crafting jewelry" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">₹2,999</div>
                  <div className="text-sm text-muted-foreground">Handcrafted Silver Necklace</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-full animate-pulse delay-1000"></div>
            <div className="absolute -top-6 -right-6 w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;