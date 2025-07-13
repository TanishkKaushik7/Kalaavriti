import { useState } from 'react';
import { Toaster } from "../src/components/ui/toaster";
import { Toaster as Sonner } from "../src/components/ui/sonner";
import { TooltipProvider } from "../src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider, useCart } from "../src/contexts/CartContext";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import CartDrawer from "./components/Layout/CartDrawer";
import Index from "../src/pages/Index";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Trainings from "./pages/Trainings";
import Blog from "./pages/Blog";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import { ShoppingBag } from 'lucide-react';

// Floating Cart Button (must be inside CartProvider)
function FloatingCartButton({ onClick }) {
  const { itemCount } = useCart();
  console.log('[FloatingCartButton] itemCount:', itemCount);
  return (
    <button
      onClick={onClick}
      className="fixed z-[101] bottom-6 right-6 flex items-center justify-center w-16 h-16 rounded-full gradient-brand glow shadow-2xl border-4 border-white/60 hover:scale-105 transition-transform group"
      aria-label="Open cart"
    >
      <ShoppingBag className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-gradient-to-tr from-[#8F0557] to-[#0097B2] text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse shadow-lg font-bold border-2 border-white">{itemCount}</span>
      )}
    </button>
  );
}

const queryClient = new QueryClient();

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
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
              </main>
              <Footer />
              <FloatingCartButton onClick={() => setCartOpen(true)} />
              <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;