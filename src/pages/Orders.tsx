import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import { Package, ShoppingBag, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface OrderItem {
  food: { name: string; price: number; image: string; category: string };
  quantity: number;
}

interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  date: string;
  status: string;
}

const Orders = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center glass-card rounded-2xl p-10">
          <Package className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
          <h2 className="font-display text-xl font-bold mb-2">Please Login</h2>
          <p className="text-muted-foreground text-sm mb-4">Login to view your order history</p>
          <Link to="/login" className="gradient-btn px-6 py-2 rounded-lg text-sm font-semibold inline-block">Login</Link>
        </div>
      </div>
    );
  }

  const orders: Order[] = JSON.parse(localStorage.getItem('smartbite_orders') || '[]');

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-6 max-w-3xl">
        <Link to="/" className="flex items-center gap-1 text-sm text-muted-foreground mb-4 hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Menu
        </Link>
        <h1 className="font-display text-2xl font-bold mb-6">Order History</h1>

        {orders.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">No orders yet</p>
            <Link to="/" className="gradient-btn px-6 py-2 rounded-lg text-sm font-semibold inline-block">Start Ordering</Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order, i) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-xl p-4"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Order #{order.id.slice(-6)}</p>
                    <p className="text-xs text-muted-foreground">{new Date(order.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                  </div>
                  <span className="text-xs font-semibold bg-success/20 text-success px-2 py-0.5 rounded-full">{order.status}</span>
                </div>
                <div className="space-y-2">
                  {order.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <img src={item.food.image} alt={item.food.name} className="w-10 h-10 rounded object-cover" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.food.name}</p>
                        <p className="text-xs text-muted-foreground">x{item.quantity}</p>
                      </div>
                      <p className="text-sm font-semibold">₹{item.food.price * item.quantity}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border mt-3 pt-2 flex justify-between">
                  <span className="text-sm text-muted-foreground">Total</span>
                  <span className="font-display font-bold gradient-text">₹{order.total}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
