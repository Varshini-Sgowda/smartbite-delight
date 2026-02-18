import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import FoodSection from '@/components/FoodSection';
import CategoryFilter from '@/components/CategoryFilter';
import FoodCard from '@/components/FoodCard';
import { foodItems } from '@/data/foodData';
import { useRecommendations } from '@/hooks/useRecommendations';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Star, Wallet, Gift } from 'lucide-react';

const Index = () => {
  const [category, setCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { timeBasedItems, popularItems, topRated, budgetFriendly, comboOffers, getHistoryBased, mealTimeLabel } = useRecommendations();

  const filteredItems = useMemo(() => {
    let items = foodItems;
    if (category !== 'All') items = items.filter(f => f.category === category);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      items = items.filter(f =>
        f.name.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q) ||
        f.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return items;
  }, [category, searchQuery]);

  const showSections = category === 'All' && !searchQuery;

  return (
    <div className="min-h-screen">
      <Navbar onSearch={setSearchQuery} />

      {/* Hero */}
      {showSections && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative overflow-hidden"
          style={{ background: 'var(--gradient-hero)' }}
        >
          <div className="container mx-auto px-4 py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-xl"
            >
              <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-3">
                Delicious Food,{' '}
                <span className="gradient-text">Delivered Smart</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base mb-6">
                AI-powered recommendations personalized just for you. Order from 50+ dishes across multiple cuisines.
              </p>
              <div className="flex gap-3">
                <a href="#menu" className="gradient-btn px-6 py-2.5 rounded-lg font-semibold text-sm">
                  Explore Menu
                </a>
                <a href="#trending" className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-secondary/80 transition-colors">
                  View Offers
                </a>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="container mx-auto px-4 pb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: '50+ Dishes', icon: '🍽️' },
                { label: 'AI Powered', icon: '🤖' },
                { label: 'Fast Delivery', icon: '⚡' },
                { label: 'Best Prices', icon: '💰' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <span className="text-2xl">{stat.icon}</span>
                  <p className="font-semibold text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      <main className="container mx-auto px-4 py-6" id="menu">
        <CategoryFilter selected={category} onSelect={setCategory} />

        {showSections ? (
          <>
            <FoodSection title={mealTimeLabel} items={timeBasedItems} />
            <div id="trending">
              <FoodSection title="Trending Now" items={popularItems} emoji="🔥" />
            </div>
            <FoodSection title="Recommended For You" items={getHistoryBased()} emoji="✨" />
            <FoodSection title="Top Rated" items={topRated} emoji="⭐" />
            <FoodSection title="Budget Friendly" items={budgetFriendly} emoji="💰" />
            <FoodSection title="Combo Offers" items={comboOffers} emoji="🎁" />
          </>
        ) : (
          <div>
            <p className="text-sm text-muted-foreground mb-4">
              {filteredItems.length} items found
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {filteredItems.map((food, i) => (
                <FoodCard key={food.id} food={food} index={i} />
              ))}
            </div>
            {filteredItems.length === 0 && (
              <div className="text-center py-20">
                <p className="text-4xl mb-3">🍽️</p>
                <p className="text-muted-foreground">No items found. Try a different search.</p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-10">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground text-sm">
          <p className="font-display font-bold text-lg gradient-text mb-1">SmartBite</p>
          <p>AI Based Food Delivery & Recommendation System</p>
          <p className="text-xs mt-2">Final Year CSE Project • Built with React + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
