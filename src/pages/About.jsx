import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 opacity-5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
                Kalaavritti
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
              Where Stories Take Shape - Celebrating India's vibrant artisan culture through handmade crafts and traditional art forms.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop&crop=center" 
                alt="Artisan at work"
                className="relative rounded-3xl shadow-2xl w-full transform hover:scale-105 transition duration-500"
                loading="lazy"
              />
            </div>
            <div className="space-y-6 md:space-y-8">
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mt-4 rounded-full"></div>
              </div>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                  To bridge the gap between India's talented artisans and global art lovers, ensuring that traditional crafts 
                  continue to thrive while providing sustainable livelihoods to our craftspeople.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                  We believe every handcrafted piece tells a story - of tradition passed down through generations, 
                  of skilled hands that shape raw materials into works of art, and of the cultural heritage that makes India unique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-50"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-orange-300/30 to-yellow-300/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-700 font-light">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                emoji: "🎨",
                title: "Authenticity",
                description: "Every product is genuinely handcrafted by skilled artisans, preserving traditional techniques and cultural heritage.",
                gradient: "from-purple-500 to-indigo-500"
              },
              {
                emoji: "🤝",
                title: "Fair Trade",
                description: "We ensure fair compensation for artisans, supporting their livelihoods and encouraging the continuation of their craft.",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                emoji: "🌱",
                title: "Sustainability",
                description: "Our commitment to eco-friendly practices and sustainable materials helps preserve our environment for future generations.",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((value, index) => (
              <div key={index} className="group">
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${value.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition duration-300`}>
                      <span className="text-white text-3xl md:text-4xl">{value.emoji}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{value.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-700 font-light">The passionate people behind Kalaavritti</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                img: "https://images.unsplash.com/photo-1494790108755-2616b612b9f0?w=200&h=200&fit=crop&crop=face",
                name: "Priya Sharma",
                role: "Founder & CEO",
                bio: "A passionate advocate for Indian crafts with 10+ years in cultural preservation.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
                name: "Rajesh Kumar",
                role: "Artisan Coordinator",
                bio: "Building bridges between traditional artisans and modern markets.",
                gradient: "from-blue-500 to-indigo-500"
              },
              {
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
                name: "Anita Verma",
                role: "Training Director",
                bio: "Designing programs to pass traditional skills to the next generation.",
                gradient: "from-green-500 to-teal-500"
              }
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300`}></div>
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="relative w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-xl transform group-hover:scale-105 transition duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">{member.name}</h3>
                <p className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-semibold text-lg mb-3`}>
                  {member.role}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Floating shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Impact
            </h2>
            <div className="w-20 h-1 bg-white/80 mx-auto mb-4 rounded-full"></div>
            <p className="text-xl md:text-2xl text-white/90 font-light">Making a difference in the artisan community</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { number: "500+", label: "Artisans Supported", icon: "👨‍🎨" },
              { number: "10,000+", label: "Products Sold", icon: "🛍️" },
              { number: "50+", label: "Training Programs", icon: "📚" },
              { number: "25+", label: "States Covered", icon: "🗺️" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white">{stat.number}</div>
                  <div className="text-sm md:text-lg text-white/90 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;