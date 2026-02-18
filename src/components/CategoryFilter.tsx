import { categories } from '@/data/foodData';
import { motion } from 'framer-motion';

const CategoryFilter = ({ selected, onSelect }: { selected: string; onSelect: (c: string) => void }) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mb-6">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`relative px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
            selected === cat
              ? 'text-primary-foreground'
              : 'text-muted-foreground bg-secondary hover:bg-secondary/80'
          }`}
        >
          {selected === cat && (
            <motion.div
              layoutId="category-bg"
              className="absolute inset-0 gradient-btn rounded-full"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span className="relative z-10">{cat}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
