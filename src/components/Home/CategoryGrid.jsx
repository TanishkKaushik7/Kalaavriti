import { ArrowRight, Sparkles, Heart, Star, ShoppingBag, Palette, Home } from 'lucide-react';

const CategoryGrid = () => {
  const categories = [
    {
      name: "Jewelry",
      description: "Handcrafted traditional & contemporary designs that tell stories of elegance",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=350&fit=crop&crop=center",
      link: "/shop/jewelry",
      color: "from-[#0097B2]/20 to-[#8F0557]/30",
      hoverColor: "from-[#0097B2]/70 to-[#8F0557]/80",
      glowColor: "shadow-[0_0_30px_rgba(0,151,178,0.3)]",
      icon: <Sparkles className="w-6 h-6 text-[#0097B2]" />,
      badge: "✨ Trending",
      items: "2,500+ pieces"
    },
    {
      name: "Rakhis",
      description: "Beautiful handmade rakhis for every celebration and sacred bond",
      image: "https://images.unsplash.com/photo-1597149379930-6c70c4e41d6f?w=500&h=350&fit=crop&crop=center",
      link: "/shop/rakhis",
      color: "from-[#8F0557]/20 to-[#0097B2]/30",
      hoverColor: "from-[#8F0557]/70 to-[#0097B2]/80",
      glowColor: "shadow-[0_0_30px_rgba(143,5,87,0.3)]",
      icon: <Heart className="w-6 h-6 text-[#8F0557]" />,
      badge: "🎉 Festival Special",
      items: "1,200+ designs"
    },
    {
      name: "Home Décor",
      description: "Transform your space with artisan décor pieces that inspire",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=350&fit=crop&crop=center",
      link: "/shop/home-decor",
      color: "from-[#0097B2]/25 to-[#8F0557]/25",
      hoverColor: "from-[#0097B2]/75 to-[#8F0557]/75",
      glowColor: "shadow-[0_0_30px_rgba(71,76,132,0.3)]",
      icon: <Home className="w-6 h-6 text-[#0097B2]" />,
      badge: "🆕 New Arrivals",
      items: "3,800+ items"
    },
    {
      name: "Paintings",
      description: "Original artworks by talented artists capturing life's beauty",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=350&fit=crop&crop=center",
      link: "/shop/paintings",
      color: "from-[#8F0557]/25 to-[#0097B2]/25",
      hoverColor: "from-[#8F0557]/75 to-[#0097B2]/75",
      glowColor: "shadow-[0_0_30px_rgba(71,76,132,0.3)]",
      icon: <Palette className="w-6 h-6 text-[#8F0557]" />,
      badge: "🎨 Art Collection",
      items: "890+ originals"
    },
    {
      name: "Gifts & Seasonal",
      description: "Perfect gifts for every occasion and memorable moments",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&h=350&fit=crop&crop=center",
      link: "/shop/gifts",
      color: "from-[#0097B2]/30 to-[#8F0557]/20",
      hoverColor: "from-[#0097B2]/80 to-[#8F0557]/70",
      glowColor: "shadow-[0_0_30px_rgba(0,151,178,0.3)]",
      icon: <ShoppingBag className="w-6 h-6 text-[#0097B2]" />,
      badge: "💎 Limited Edition",
      items: "650+ exclusives"
    },
    {
      name: "Textiles",
      description: "Handwoven fabrics and traditional textiles with modern appeal",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=350&fit=crop&crop=center",
      link: "/shop/textiles",
      color: "from-[#8F0557]/30 to-[#0097B2]/20",
      hoverColor: "from-[#8F0557]/80 to-[#0097B2]/70",
      glowColor: "shadow-[0_0_30px_rgba(143,5,87,0.3)]",
      icon: <Star className="w-6 h-6 text-[#8F0557]" />,
      badge: "🧵 Handwoven",
      items: "1,500+ fabrics"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-[#0097B2] to-[#8F0557] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-br from-[#8F0557] to-[#0097B2] rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-[#0097B2]/60 to-[#8F0557]/60 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 bg-gradient-to-br from-[#8F0557]/80 to-[#0097B2]/80 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#0097B2] rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#8F0557] rounded-full animate-float delay-300"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-[#0097B2] rounded-full animate-float delay-700"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#8F0557] rounded-full animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0097B2]/15 to-[#8F0557]/15 px-6 py-3 rounded-full mb-8 border border-[#0097B2]/20 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-[#0097B2] animate-pulse" />
            <span className="text-base font-semibold text-[#0097B2]">Handcrafted Excellence</span>
            <div className="w-2 h-2 bg-gradient-to-r from-[#0097B2] to-[#8F0557] rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-tight">
            Explore Our{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#0097B2] via-[#8F0557] to-[#0097B2] bg-clip-text text-transparent animate-gradient-x bg-size-200 bg-pos-0">
                Collections
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#0097B2] to-[#8F0557] rounded-full animate-scale-x"></div>
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Discover handcrafted treasures across various categories, each piece telling a unique story of Indian artisanship, 
            <span className="text-[#0097B2] font-semibold"> timeless beauty</span>, and 
            <span className="text-[#8F0557] font-semibold"> modern elegance</span>.
          </p>
        </div>

        {/* Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <div 
              key={category.name} 
              className="group cursor-pointer"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <div className={`relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:scale-105 bg-white/90 backdrop-blur-sm border border-white/50 group-hover:${category.glowColor}`}>
                {/* Premium Badge */}
                <div className="absolute top-6 right-6 z-30">
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-gray-800 shadow-xl border border-white/50">
                    {category.badge}
                  </div>
                </div>

                {/* Items Counter */}
                <div className="absolute top-6 left-6 z-30">
                  <div className="bg-gradient-to-r from-[#0097B2]/90 to-[#8F0557]/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold text-white shadow-xl">
                    {category.items}
                  </div>
                </div>

                {/* Enhanced Image Container */}
                <div className="relative overflow-hidden h-72">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                    loading="lazy"
                  />
                  
                  {/* Multi-layer Gradients */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} group-hover:opacity-20 transition-opacity duration-700`} />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.hoverColor} opacity-0 group-hover:opacity-90 transition-opacity duration-700`} />
                  
                  {/* Premium Shimmer */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer-slow"></div>
                  </div>

                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <ArrowRight className="w-8 h-8 text-white animate-bounce" />
                      </div>
                      <p className="text-lg font-bold">Explore Now</p>
                    </div>
                  </div>
                </div>

                {/* Premium Content */}
                <div className="p-8 relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-[#0097B2]/15 to-[#8F0557]/15 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-[#0097B2]/20">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-[#0097B2] transition-colors duration-300 mb-1">
                          {category.name}
                        </h3>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#0097B2] to-[#8F0557] group-hover:w-20 transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-base">
                    {category.description}
                  </p>
                  
                  {/* Enhanced Action Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-base font-bold text-[#0097B2] group-hover:text-[#8F0557] transition-colors duration-300">
                      <span>Explore Collection</span>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-[#0097B2] to-[#8F0557] group-hover:w-16 transition-all duration-500 rounded-full"></div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-[#0097B2] group-hover:text-[#8F0557] group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </div>

                {/* Premium Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0097B2] via-[#8F0557] to-[#0097B2] rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl"></div>
                
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-[#0097B2]/50 group-hover:to-[#8F0557]/50 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#0097B2] to-[#8F0557] px-12 py-5 rounded-full text-white font-bold text-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-xl cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8F0557] to-[#0097B2] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">View All Collections</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-white/20 -skew-x-12 animate-shimmer-slow"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes shimmer-slow {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes scale-x {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        
        .animate-shimmer-slow {
          animation: shimmer-slow 2s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-scale-x {
          animation: scale-x 2s ease-out;
        }
        
        .bg-size-200 { background-size: 200% 200%; }
        .bg-pos-0 { background-position: 0% 50%; }
        
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default CategoryGrid;