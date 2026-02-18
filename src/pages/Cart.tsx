import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useCartContext } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const { isAuthenticated } = useAuth();
  const { items, updateQuantity, removeFromCart, clearCart, total } = useCartContext();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center glass-card rounded-2xl p-10">
          <ShoppingBag className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
          <h2 className="font-display text-xl font-bold mb-2">Please Login</h2>
          <p className="text-muted-foreground text-sm mb-4">You need to be logged in to view your cart</p>
          <Link to="/login" className="gradient-btn px-6 py-2 rounded-lg text-sm font-semibold inline-block">Login</Link>
        </div>
      </div>
    );
  }

  const deliveryFee = total > 500 ? 0 : 40;
  const tax = Math.round(total * 0.05);
  const grandTotal = total + deliveryFee + tax;

  const placeOrder = () => {
    if (items.length === 0) return;
    const orders = JSON.parse(localStorage.getItem('smartbite_orders') || '[]');
    orders.unshift({
      id: Date.now().toString(),
      items: items.map(i => ({ food: i.food, quantity: i.quantity })),
      total: grandTotal,
      date: new Date().toISOString(),
      status: 'Delivered',
    });
    localStorage.setItem('smartbite_orders', JSON.stringify(orders));
    clearCart();
    navigate('/orders');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-6 max-w-3xl">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground mb-4 hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <h1 className="font-display text-2xl font-bold mb-6">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">Your cart is empty</p>
            <Link to="/" className="gradient-btn px-6 py-2 rounded-lg text-sm font-semibold inline-block">Browse Menu</Link>
          </div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence>
              {items.map(item => (
                <motion.div
                  key={item.food.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="glass-card rounded-xl p-4 flex gap-4 items-center"
                >
                  <img src={item.food.image} alt={item.food.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm truncate">{item.food.name}</h3>
                    <p className="text-muted-foreground text-xs">{item.food.category}</p>
                    <p className="font-display font-bold text-sm mt-1">₹{item.food.price * item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.food.id, item.quantity - 1)}
                      className="w-7 h-7 rounded bg-secondary flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.food.id, item.quantity + 1)}
                      className="w-7 h-7 rounded bg-secondary flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => removeFromCart(item.food.id)}
                      className="w-7 h-7 rounded flex items-center justify-center text-destructive hover:bg-destructive/20 transition-colors ml-1">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Summary */}
            <div className="glass-card rounded-xl p-5 mt-6">
              <h3 className="font-display font-bold mb-3">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>₹{total}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Delivery Fee</span>
                  <span>{deliveryFee === 0 ? <span className="text-success">FREE</span> : `₹${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between"><span className="text-muted-foreground">Tax (5%)</span><span>₹{tax}</span></div>
                <div className="border-t border-border pt-2 flex justify-between font-display font-bold text-lg">
                  <span>Total</span><span className="gradient-text">₹{grandTotal}</span>
                </div>
                {total < 500 && (
                  <p className="text-xs text-muted-foreground">Add ₹{500 - total} more for free delivery!</p>
                )}
              </div>
              <button onClick={placeOrder} className="w-full gradient-btn py-3 rounded-lg font-semibold text-sm mt-4">
                Place Order • ₹{grandTotal}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
