// import { Link } from 'react-router-dom';
// import { Card, CardContent } from '@/components/ui/card';

const CategoryGrid = () => {
  const categories = [
    {
      name: "Jewelry",
      description: "Handcrafted traditional & contemporary designs",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop&crop=center",
      link: "/shop/jewelry",
      color: "from-primary/20 to-primary/5"
    },
    {
      name: "Rakhis",
      description: "Beautiful handmade rakhis for every celebration",
      image: "https://images.unsplash.com/photo-1597149379930-6c70c4e41d6f?w=400&h=300&fit=crop&crop=center",
      link: "/shop/rakhis",
      color: "from-secondary/20 to-secondary/5"
    },
    {
      name: "Home Décor",
      description: "Transform your space with artisan décor",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center",
      link: "/shop/home-decor",
      color: "from-primary/15 to-secondary/15"
    },
    {
      name: "Paintings",
      description: "Original artworks by talented artists",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
      link: "/shop/paintings",
      color: "from-secondary/20 to-primary/10"
    },
    {
      name: "Gifts & Seasonal",
      description: "Perfect gifts for every occasion",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop&crop=center",
      link: "/shop/gifts",
      color: "from-primary/10 to-secondary/20"
    },
    {
      name: "Textiles",
      description: "Handwoven fabrics and traditional textiles",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
      link: "/shop/textiles",
      color: "from-secondary/15 to-primary/15"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Explore Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Collections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover handcrafted treasures across various categories, each piece telling a unique story of Indian artisanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.name} to={category.link} className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="relative">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} group-hover:opacity-80 transition-opacity duration-300`} />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;