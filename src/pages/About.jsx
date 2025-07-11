const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-6">
          About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Kalaavritti</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Where Stories Take Shape - Celebrating India's vibrant artisan culture through handmade crafts and traditional art forms.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop&crop=center" 
              alt="Artisan at work"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To bridge the gap between India's talented artisans and global art lovers, ensuring that traditional crafts 
              continue to thrive while providing sustainable livelihoods to our craftspeople.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe every handcrafted piece tells a story - of tradition passed down through generations, 
              of skilled hands that shape raw materials into works of art, and of the cultural heritage that makes India unique.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-br from-accent/30 to-background">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-xl text-muted-foreground">What drives us every day</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
            <p className="text-muted-foreground">
              Every product is genuinely handcrafted by skilled artisans, preserving traditional techniques and cultural heritage.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fair Trade</h3>
            <p className="text-muted-foreground">
              We ensure fair compensation for artisans, supporting their livelihoods and encouraging the continuation of their craft.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-muted-foreground">
              Our commitment to eco-friendly practices and sustainable materials helps preserve our environment for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground">The passionate people behind Kalaavritti</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b9f0?w=200&h=200&fit=crop&crop=face" 
              alt="Founder"
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold">Priya Sharma</h3>
            <p className="text-primary font-medium">Founder & CEO</p>
            <p className="text-muted-foreground mt-2">
              A passionate advocate for Indian crafts with 10+ years in cultural preservation.
            </p>
          </div>

          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
              alt="Artisan Coordinator"
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold">Rajesh Kumar</h3>
            <p className="text-primary font-medium">Artisan Coordinator</p>
            <p className="text-muted-foreground mt-2">
              Building bridges between traditional artisans and modern markets.
            </p>
          </div>

          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face" 
              alt="Training Director"
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold">Anita Verma</h3>
            <p className="text-primary font-medium">Training Director</p>
            <p className="text-muted-foreground mt-2">
              Designing programs to pass traditional skills to the next generation.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl opacity-90">Making a difference in the artisan community</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-lg opacity-90">Artisans Supported</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">10,000+</div>
            <div className="text-lg opacity-90">Products Sold</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-lg opacity-90">Training Programs</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">25+</div>
            <div className="text-lg opacity-90">States Covered</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;