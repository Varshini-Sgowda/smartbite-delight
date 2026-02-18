import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, LogOut, Search, ChefHat, Menu, X, LayoutDashboard, FileText } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useCartContext } from '@/contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onSearch }: { onSearch?: (q: string) => void }) => {
  const { currentUser, logout, isAuthenticated } = useAuth();
  const { itemCount } = useCartContext();
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const [search, setSearch] = useState('');

  const handleSearch = (val: string) => {
    setSearch(val);
    onSearch?.(val);
  };

  const handleLogout = () => {
    logout();
    setShowProfile(false);
    navigate('/login');
  };

  return (
    <nav className="nav-glass sticky top-0 z-50 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-lg gradient-btn flex items-center justify-center">
            <ChefHat className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold gradient-text hidden sm:block">SmartBite</span>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for food, restaurants..."
              value={search}
              onChange={e => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg input-dark text-sm"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link to="/project-info" className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            <FileText className="w-5 h-5" />
          </Link>

          <Link to="/cart" className="relative text-muted-foreground hover:text-foreground transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full gradient-btn text-[10px] flex items-center justify-center font-bold"
              >
                {itemCount}
              </motion.span>
            )}
          </Link>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-border">
                <User className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence>
              {showProfile && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute right-0 mt-2 w-56 glass-card rounded-lg p-2 z-50"
                >
                  {isAuthenticated ? (
                    <>
                      <div className="px-3 py-2 border-b border-border mb-1">
                        <p className="font-semibold text-sm">{currentUser?.name}</p>
                        <p className="text-xs text-muted-foreground">{currentUser?.email}</p>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                          {currentUser?.role}
                        </span>
                      </div>
                      <Link to="/orders" onClick={() => setShowProfile(false)}
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors">
                        <ShoppingCart className="w-4 h-4" /> My Orders
                      </Link>
                      {currentUser?.role === 'admin' && (
                        <Link to="/admin" onClick={() => setShowProfile(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors">
                          <LayoutDashboard className="w-4 h-4" /> Admin Dashboard
                        </Link>
                      )}
                      <button onClick={handleLogout}
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors w-full text-destructive">
                        <LogOut className="w-4 h-4" /> Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" onClick={() => setShowProfile(false)}
                        className="block px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors">
                        Login
                      </Link>
                      <Link to="/signup" onClick={() => setShowProfile(false)}
                        className="block px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors">
                        Sign Up
                      </Link>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile menu */}
          <button onClick={() => setShowMobile(!showMobile)} className="md:hidden text-muted-foreground">
            {showMobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile search */}
      <AnimatePresence>
        {showMobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden mt-3 overflow-hidden"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for food..."
                value={search}
                onChange={e => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg input-dark text-sm"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
