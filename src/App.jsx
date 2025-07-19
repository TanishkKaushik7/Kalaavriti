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

// Enhanced lazy loading with preloading capability
const createLazyRoute = (componentImport) => {
  const LazyComponent = lazy(componentImport);
  const preload = componentImport; // The import function itself can be used for preloading
  
  return {
    LazyComponent,
    preload
  };
};

// Create lazy routes with preloading
const Index = createLazyRoute(() => import("../src/pages/Index"));
const Shop = createLazyRoute(() => import("./pages/Shop"));
const Cart = createLazyRoute(() => import("./pages/Cart"));
const About = createLazyRoute(() => import("./pages/About"));
const Contact = createLazyRoute(() => import("./pages/Contact"));
const Trainings = createLazyRoute(() => import("./pages/Trainings"));
const Blog = createLazyRoute(() => import("./pages/Blog"));
const ProductDetail = createLazyRoute(() => import("./pages/ProductDetail"));
const NotFound = createLazyRoute(() => import("./pages/NotFound"));

// Prefetch strategy for links
export const prefetchOnHover = (preloadFn) => {
  return {
    onMouseEnter: () => preloadFn(),
    onTouchStart: () => preloadFn(),
  };
};

// Improved loading component with skeleton screens
const PageLoading = ({ withHeader = true }) => (
  <div className="flex flex-col h-screen">
    {withHeader && <div className="h-16 bg-gray-100 animate-pulse"></div>}
    <div className="flex-1 flex flex-col items-center justify-center gap-4 p-4">
      <div className="w-16 h-16 border-4 border-t-brand border-r-brand border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      <p className="text-lg font-medium text-gray-600">Loading content...</p>
    </div>
    {withHeader && <div className="h-20 bg-gray-100 animate-pulse"></div>}
  </div>
);

function FloatingCartButton({ onClick }) {
  const { itemCount } = useCart();
  return (
    <button
      onClick={onClick}
      className="fixed z-[101] bottom-6 right-6 flex items-center justify-center w-16 h-16 rounded-full gradient-brand glow shadow-2xl border-4 border-white/60 hover:scale-105 transition-transform group"
      aria-label="Open cart"
      {...prefetchOnHover(Cart.preload)} // Preload cart on hover
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
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 2,
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
                <Routes>
                  <Route 
                    path="/" 
                    element={
                      <Suspense fallback={<PageLoading withHeader={false} />}>
                        <Index.LazyComponent />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/shop" 
                    element={
                      <Suspense fallback={<PageLoading />}>
                        <Shop.LazyComponent />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/cart" 
                    element={
                      <Suspense fallback={<PageLoading />}>
                        <Cart.LazyComponent />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/about" 
                    element={
                      <Suspense fallback={<PageLoading />}>
                        <About.LazyComponent />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/contact" 
                    element={
                      <Suspense fallback={<PageLoading />}>
                        <Contact.LazyComponent />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/trainings" 
                    element={
                      <Suspense fallback={<PageLoading />}>
                        <Trainings.LazyComponent />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/blog" 
                    element={
                      <Suspense fallback={<PageLoading />}>
                        <Blog.LazyComponent />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="/product/:id" 
                    element={
                      <Suspense fallback={<PageLoading />}>
                        <ProductDetail.LazyComponent />
                      </Suspense>
                    } 
                  />
                  <Route 
                    path="*" 
                    element={
                      <Suspense fallback={<PageLoading />}>
                        <NotFound.LazyComponent />
                      </Suspense>
                    } 
                  />
                </Routes>
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