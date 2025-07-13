import HeroSection from '../components/Home/HeroSection';
import CategoryGrid from '../components/Home/CategoryGrid';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import TestimonialsSection from '../components/Home/TestimonialsSection';

const Index = () => {
  return (
    <div>
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts />
        <TestimonialsSection />
    </div>
  );
};

export default Index;