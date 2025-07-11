import HeroSection from '@/components/Home/HeroSection';
import CategoryGrid from '@/components/Home/CategoryGrid';
import FeaturedProducts from '@/components/Home/FeaturedProducts';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;