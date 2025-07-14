import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { Minus, Plus, Trash2, X, ShoppingBag, ArrowRight } from 'lucide-react';

const CartDrawer = ({ open, onClose }) => {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart();
  
  console.log('[CartDrawer] items:', items);
  console.log('[CartDrawer] total:', total);
  console.log('[CartDrawer] open:', open);

  const subtotal = total || 0;
  const shipping = subtotal > 999 ? 0 : 99;
  const tax = Math.round(subtotal * 0.18);
  const finalTotal = subtotal + shipping + tax;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[99] transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[100] transition-all duration-500 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        } bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-xl border-l border-white/20 shadow-2xl`}
        style={{ 
          boxShadow: open ? '0 0 60px rgba(143, 5, 87, 0.3), 0 0 60px rgba(0, 151, 178, 0.3)' : 'none'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gradient-to-r from-pink-500/20 to-blue-500/20 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg">
              <ShoppingBag className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
              Your Cart
            </h2>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110 group"
          >
            <X className="h-6 w-6 text-gray-600 group-hover:text-pink-600 transition-colors" />
          </button>
        </div>

        {/* Empty State */}
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-6">
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <ShoppingBag className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">0</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h3>
            <p className="text-gray-600 mb-8 max-w-sm">
              Discover our beautiful handcrafted products and add them to your cart
            </p>
            <button 
              onClick={onClose} 
              className="group relative px-8 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Continue Shopping
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            {/* Items List */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-transparent">
              {items.map((item, index) => (
                <div 
                  key={item.id} 
                  className="group flex items-center space-x-4 bg-white/70 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-white/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-xl border-2 border-gradient-to-r from-pink-500/30 to-blue-500/30 shadow-md" 
                    />
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{item.quantity}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-lg text-gray-800 group-hover:text-pink-600 transition-colors truncate">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500 mb-1">by {item.artisan}</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center bg-white/50 rounded-full p-1 shadow-inner">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                        className="p-1 hover:bg-pink-100 rounded-full transition-colors duration-200 hover:scale-110"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4 text-gray-600" />
                      </button>
                      <span className="px-3 py-1 font-bold text-gray-800 min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                        className="p-1 hover:bg-blue-100 rounded-full transition-colors duration-200 hover:scale-110"
                      >
                        <Plus className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)} 
                      className="p-2 hover:bg-red-100 rounded-full transition-all duration-200 hover:scale-110 group/delete"
                    >
                      <Trash2 className="h-4 w-4 text-gray-500 group-hover/delete:text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="p-6 border-t border-gradient-to-r from-pink-500/20 to-blue-500/20 bg-white/80 backdrop-blur-sm">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'text-green-600 font-semibold' : ''}>
                    {shipping === 0 ? 'Free' : `₹${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (18%)</span>
                  <span>₹{tax.toLocaleString()}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-xl text-gray-800">
                  <span>Total</span>
                  <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                    ₹{finalTotal.toLocaleString()}
                  </span>
                </div>
                {subtotal < 999 && (
                  <p className="text-sm text-blue-600 bg-blue-50 p-2 rounded-lg">
                    Add ₹{(999 - subtotal).toLocaleString()} more for free shipping!
                  </p>
                )}
              </div>
              
              <button className="w-full mb-3 relative px-6 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Proceed to Checkout
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={clearCart} 
                className="w-full px-6 py-3 text-gray-600 hover:text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-all duration-300 border border-gray-200 hover:border-red-300"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;