import { useState, lazy, Suspense } from 'react';
import { Toaster } from "../src/components/ui/toaster";
import { TooltipProvider } from "../src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider, useCart } from "../src/contexts/CartContext";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import CartDrawer from "./components/Layout/CartDrawer";
import { ShoppingBag } from 'lucide-react';

// Improved lazy loading with better loading states
const lazyWithRetry = (componentImport) => {
  return lazy(async () => {
    const pageHasAlreadyBeenForceRefreshed = 
      JSON.parse(window.localStorage.getItem('page-has-been-force-refreshed') || 'false');
    
    try {
      const component = await componentImport();
      window.localStorage.setItem('page-has-been-force-refreshed', 'false');
      return component;
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        window.localStorage.setItem('page-has-been-force-refreshed', 'true');
        return window.location.reload();
      }
      throw error;
    }
  });
};

// Lazy loaded components with retry mechanism
const Index = lazyWithRetry(() => import("../src/pages/Index"));
const Shop = lazyWithRetry(() => import("./pages/Shop"));
const Cart = lazyWithRetry(() => import("./pages/Cart"));
const About = lazyWithRetry(() => import("./pages/About"));
const Contact = lazyWithRetry(() => import("./pages/Contact"));
const Trainings = lazyWithRetry(() => import("./pages/Trainings"));
const Blog = lazyWithRetry(() => import("./pages/Blog"));
const ProductDetail = lazyWithRetry(() => import("./pages/ProductDetail"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));

// Improved loading component
const PageLoading = () => (
  <div className="flex flex-col items-center justify-center h-[80vh] gap-4">
    <div className="w-16 h-16 border-4 border-t-brand border-r-brand border-b-transparent border-l-transparent rounded-full animate-spin"></div>
    <p className="text-lg font-medium text-gray-600">Loading content...</p>
  </div>
);

function FloatingCartButton({ onClick }) {
  const { itemCount } = useCart();
  return (
    <button
      onClick={onClick}
      className="fixed z-[101] bottom-6 right-6 flex items-center justify-center w-16 h-16 rounded-full gradient-brand glow shadow-2xl border-4 border-white/60 hover:scale-105 transition-transform group"
      aria-label="Open cart"
    >
      <ShoppingBag className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-gradient-to-tr from-[#8F0557] to-[#0097B2] text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse shadow-lg font-bold border-2 border-white">
          {itemCount}
        </span>
      )}
    </button>
  );
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 2, // Retry failed queries twice
    },
  },
});

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                <Suspense fallback={<PageLoading />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/trainings" element={<Trainings />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
              <FloatingCartButton onClick={() => setCartOpen(true)} />
              <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
            </div>
          </BrowserRouter>
          <Toaster 
            position="top-center"
            containerStyle={{
              top: 0,
              left: 0,
              right: 0,
              padding: 0,
              margin: 0,
            }}
          />
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;