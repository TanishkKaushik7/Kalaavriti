import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { Minus, Plus, Trash2, X } from 'lucide-react';

const CartDrawer = ({ open, onClose }) => {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart();
  console.log('[CartDrawer] items:', items);
  console.log('[CartDrawer] total:', total);
  console.log('[CartDrawer] open:', open);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full max-w-md z-[100] transition-transform duration-500 cart-drawer glow ${open ? 'translate-x-0' : 'translate-x-full'} shadow-2xl`}
      style={{ boxShadow: '0 0 32px 8px #8F0557, 0 0 32px 8px #0097B2' }}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#0097B2]/30">
        <h2 className="text-2xl font-bold text-gradient-brand">Your Cart</h2>
        <button onClick={onClose} className="btn-glass p-2 hover:scale-110 transition-transform">
          <X className="h-6 w-6 text-[#8F0557]" />
        </button>
      </div>
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h3 className="text-xl font-bold text-muted-foreground mb-2">Your cart is empty</h3>
          <p className="text-muted-foreground mb-4">Discover our beautiful handcrafted products</p>
          <button onClick={onClose} className="btn-glass px-6 py-2 font-bold gradient-brand text-white mt-2">Continue Shopping</button>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 bg-white/70 rounded-xl p-3 shadow card-glass">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg border-2 border-[#0097B2]/30" />
                <div className="flex-1">
                  <h4 className="font-semibold text-lg text-[#8F0557]">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">by {item.artisan}</p>
                  <p className="text-primary font-bold">₹{item.price.toLocaleString()}</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="btn-glass p-1"><Minus className="h-4 w-4" /></button>
                    <span className="px-2 font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="btn-glass p-1"><Plus className="h-4 w-4" /></button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="btn-glass p-1 text-[#8F0557] hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            ))}
          </div>
          {/* Order Summary */}
          <div className="p-6 border-t border-[#0097B2]/30 bg-white/80 backdrop-blur card-glass">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Subtotal</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>{total > 999 ? 'Free' : '₹99'}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>₹{Math.round(total * 0.18).toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-2">
              <span>Total</span>
              <span>₹{(total + (total > 999 ? 0 : 99) + Math.round(total * 0.18)).toLocaleString()}</span>
            </div>
            <button className="w-full mt-4 btn-glass gradient-brand text-white font-bold py-3 text-lg glow">Proceed to Checkout</button>
            <button onClick={clearCart} className="w-full mt-2 btn-glass text-[#8F0557] font-semibold">Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDrawer; 