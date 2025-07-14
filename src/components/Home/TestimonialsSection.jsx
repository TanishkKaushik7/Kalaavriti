import { Card, CardContent } from '../ui/card';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonials-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "The jewelry I ordered was absolutely stunning! The craftsmanship is incredible and you can see the love put into each piece. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b9f0?w=80&h=80&fit=crop&crop=face",
      category: "Jewelry"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "I took the pottery training course and it was amazing! The instructors are so knowledgeable and patient. Now I can create my own beautiful pieces.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      category: "Training"
    },
    {
      name: "Anita Verma",
      location: "Jaipur",
      rating: 5,
      text: "The home décor items I purchased have transformed my living space. Each piece tells a story and my guests always ask where I got them from!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      category: "Home Décor"
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 transition-all duration-300 ${
              i < rating 
                ? 'text-yellow-400 fill-current transform scale-110' 
                : 'text-gray-300'
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials-section" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#0097B2]/10 to-[#8F0557]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#8F0557]/10 to-[#0097B2]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block">
            <span className="text-sm font-semibold text-[#0097B2] uppercase tracking-wider mb-2 block">
              Customer Stories
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              What Our{' '}
              <span className="bg-gradient-to-r from-[#0097B2] via-[#8F0557] to-[#0097B2] bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                Customers Say
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0097B2] to-[#8F0557] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stories from our happy customers who have discovered the magic of handcrafted art and transformed their lives through creativity.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card 
                className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden h-full ${
                  hoveredIndex === index ? 'transform -translate-y-2' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-[#0097B2] via-[#8F0557] to-[#0097B2] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}></div>
                <div className="absolute inset-[2px] bg-white rounded-lg"></div>
                
                {/* Floating Elements */}
                <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-[#0097B2] to-[#8F0557] rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 ${
                  hoveredIndex === index ? 'animate-bounce' : ''
                }`}></div>
                
                <CardContent className="p-8 relative z-10 h-full flex flex-col">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-[#0097B2] to-[#8F0557] text-white rounded-full">
                      {testimonial.category}
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="mb-6 flex-grow">
                    <div className="text-4xl text-[#0097B2] mb-2 font-serif">"</div>
                    <p className="text-gray-700 italic text-lg leading-relaxed">
                      {testimonial.text}
                    </p>
                    <div className="text-4xl text-[#8F0557] text-right font-serif">"</div>
                  </div>

                  {/* Rating */}
                  <div className="mb-6">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center">
                    <div className="relative">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mr-4 object-cover ring-2 ring-[#0097B2]/20 group-hover:ring-[#8F0557]/30 transition-all duration-300"
                      />
                      <div className={`absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-[#0097B2] to-[#8F0557] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        hoveredIndex === index ? 'animate-pulse' : ''
                      }`}></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 flex items-center">
                        <svg className="w-4 h-4 mr-1 text-[#0097B2]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#0097B2] to-[#8F0557] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#0097B2]/25 transform hover:scale-105">
            <span className="relative z-10">Share Your Story</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#8F0557] to-[#0097B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;