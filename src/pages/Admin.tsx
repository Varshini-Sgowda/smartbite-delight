import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import { Link, Navigate } from 'react-router-dom';
import { Users, ShoppingCart, Package, TrendingUp } from 'lucide-react';
import { foodItems } from '@/data/foodData';

const Admin = () => {
  const { currentUser } = useAuth();

  if (!currentUser || currentUser.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  const users = JSON.parse(localStorage.getItem('smartbite_users') || '[]');
  const orders = JSON.parse(localStorage.getItem('smartbite_orders') || '[]');
  const totalRevenue = orders.reduce((s: number, o: any) => s + (o.total || 0), 0);

  const stats = [
    { label: 'Total Users', value: users.length, icon: Users, color: 'text-primary' },
    { label: 'Total Orders', value: orders.length, icon: Package, color: 'text-success' },
    { label: 'Menu Items', value: foodItems.length, icon: ShoppingCart, color: 'text-warning' },
    { label: 'Revenue', value: `₹${totalRevenue}`, icon: TrendingUp, color: 'text-accent' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="font-display text-2xl font-bold mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map(stat => (
            <div key={stat.label} className="glass-card rounded-xl p-5">
              <stat.icon className={`w-6 h-6 ${stat.color} mb-2`} />
              <p className="font-display text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card rounded-xl p-5">
            <h2 className="font-display font-bold mb-3">Recent Users</h2>
            <div className="space-y-2">
              {users.slice(0, 5).map((u: any, i: number) => (
                <div key={i} className="flex justify-between items-center p-2 rounded bg-secondary/50 text-sm">
                  <div>
                    <p className="font-medium">{u.name}</p>
                    <p className="text-xs text-muted-foreground">{u.email}</p>
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase">{u.role}</span>
                </div>
              ))}
              {users.length === 0 && <p className="text-sm text-muted-foreground">No users yet</p>}
            </div>
          </div>

          <div className="glass-card rounded-xl p-5">
            <h2 className="font-display font-bold mb-3">Recent Orders</h2>
            <div className="space-y-2">
              {orders.slice(0, 5).map((o: any, i: number) => (
                <div key={i} className="flex justify-between items-center p-2 rounded bg-secondary/50 text-sm">
                  <div>
                    <p className="font-medium">Order #{o.id?.slice(-6)}</p>
                    <p className="text-xs text-muted-foreground">{o.items?.length} items</p>
                  </div>
                  <span className="font-bold">₹{o.total}</span>
                </div>
              ))}
              {orders.length === 0 && <p className="text-sm text-muted-foreground">No orders yet</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
