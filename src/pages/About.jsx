import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Kalaavritti</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Where Stories Take Shape - Celebrating India's vibrant artisan culture through handmade crafts and traditional art forms.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop&crop=center" 
              alt="Artisan at work"
              className="rounded-2xl shadow-2xl w-full"
              loading="lazy"
            />
          </div>
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              To bridge the gap between India's talented artisans and global art lovers, ensuring that traditional crafts 
              continue to thrive while providing sustainable livelihoods to our craftspeople.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              We believe every handcrafted piece tells a story - of tradition passed down through generations, 
              of skilled hands that shape raw materials into works of art, and of the cultural heritage that makes India unique.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-accent/30 to-background">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg md:text-xl text-muted-foreground">What drives us every day</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              emoji: "🎨",
              title: "Authenticity",
              description: "Every product is genuinely handcrafted by skilled artisans, preserving traditional techniques and cultural heritage."
            },
            {
              emoji: "🤝",
              title: "Fair Trade",
              description: "We ensure fair compensation for artisans, supporting their livelihoods and encouraging the continuation of their craft."
            },
            {
              emoji: "🌱",
              title: "Sustainability",
              description: "Our commitment to eco-friendly practices and sustainable materials helps preserve our environment for future generations."
            }
          ].map((value, index) => (
            <div key={index} className="text-center p-4 md:p-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">{value.emoji}</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg md:text-xl text-muted-foreground">The passionate people behind Kalaavritti</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              img: "https://images.unsplash.com/photo-1494790108755-2616b612b9f0?w=200&h=200&fit=crop&crop=face",
              name: "Priya Sharma",
              role: "Founder & CEO",
              bio: "A passionate advocate for Indian crafts with 10+ years in cultural preservation."
            },
            {
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
              name: "Rajesh Kumar",
              role: "Artisan Coordinator",
              bio: "Building bridges between traditional artisans and modern markets."
            },
            {
              img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
              name: "Anita Verma",
              role: "Training Director",
              bio: "Designing programs to pass traditional skills to the next generation."
            }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <img 
                src={member.img} 
                alt={member.name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 shadow-lg"
                loading="lazy"
              />
              <h3 className="text-lg md:text-xl font-semibold">{member.name}</h3>
              <p className="text-primary font-medium text-sm md:text-base">{member.role}</p>
              <p className="text-muted-foreground mt-2 text-sm md:text-base">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg md:text-xl opacity-90">Making a difference in the artisan community</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          {[
            { number: "500+", label: "Artisans Supported" },
            { number: "10,000+", label: "Products Sold" },
            { number: "50+", label: "Training Programs" },
            { number: "25+", label: "States Covered" }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm md:text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;