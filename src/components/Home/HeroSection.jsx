import { useState, useEffect } from 'react';
import { Star, Sparkles, Award, Users, ShoppingBag, ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroImages = [
    "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop&crop=center"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleExploreClick = () => {
    console.log('Navigate to shop');
  };

  const handleLearnClick = () => {
    console.log('Navigate to trainings');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #0097B2 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #8F0557 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #0097B2 0%, transparent 50%)
          `,
          backgroundSize: '400px 400px, 300px 300px, 500px 500px',
          animation: 'meshMove 20s ease-in-out infinite'
        }}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#0097B2] to-[#8F0557] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#0097B2]/20 to-[#8F0557]/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#8F0557]/20 to-[#0097B2]/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-[#0097B2]/30 to-[#8F0557]/30 rounded-full blur-lg animate-bounce"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0097B2]/20 to-[#8F0557]/20 backdrop-blur-sm rounded-full border border-white/10">
              <Award className="h-4 w-4 text-[#0097B2]" />
              <span className="text-sm font-semibold text-white">Premium Handcrafted Collection</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-[#0097B2] via-white to-[#8F0557] bg-clip-text text-transparent animate-pulse">
                  Where Stories
                </span>
                <span className="block text-white font-extrabold relative">
                  Take Shape
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#0097B2] to-[#8F0557] rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_1s_forwards]"></div>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-lg leading-relaxed">
                Discover India's finest handcrafted treasures. From traditional jewelry to exquisite home décor, 
                each piece tells a unique story of artisan craftsmanship.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={handleExploreClick}
                className="group relative overflow-hidden bg-gradient-to-r from-[#0097B2] to-[#8F0557] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Explore Collections
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button
                onClick={handleLearnClick}
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Learn Crafts
                </span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center group cursor-pointer">
                <div className="relative mb-4">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#0097B2] to-[#8F0557] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    500+
                  </div>
                  <Sparkles className="h-6 w-6 text-[#0097B2] mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Unique Products</div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="relative mb-4">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#8F0557] to-[#0097B2] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    100+
                  </div>
                  <Users className="h-6 w-6 text-[#8F0557] mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Skilled Artisans</div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="relative mb-4">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#0097B2] via-[#8F0557] to-[#0097B2] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    50+
                  </div>
                  <Award className="h-6 w-6 text-[#0097B2] mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Training Programs</div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={heroImages[currentImage]}
                    alt="Artisan crafting jewelry" 
                    className="w-full h-[500px] object-cover transition-all duration-1000 transform group-hover:scale-105"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {heroImages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImage ? 'bg-white w-6' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Floating Price Card */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-white to-slate-100 rounded-2xl p-6 shadow-2xl border border-white/20 backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#0097B2] to-[#8F0557] bg-clip-text text-transparent">
                      ₹2,999
                    </div>
                    <div className="text-sm font-medium text-slate-600">Handcrafted Silver Necklace</div>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-[#0097B2] to-[#8F0557] rounded-full shadow-2xl animate-float">
                <div className="w-full h-full bg-white/20 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-[#8F0557] to-[#0097B2] rounded-full shadow-xl animate-float" style={{animationDelay: '3s'}}>
                <div className="w-full h-full bg-white/20 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-br from-[#0097B2] via-[#8F0557] to-[#0097B2] rounded-full shadow-xl animate-float" style={{animationDelay: '1.5s'}}>
                <div className="w-full h-full bg-white/20 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-slate-400 text-sm mb-2">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-[#0097B2] to-[#8F0557] rounded-full animate-bounce mt-2"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes meshMove {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;