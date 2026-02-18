import FoodCard from './FoodCard';
import { FoodItem } from '@/data/foodData';
import { ChevronRight } from 'lucide-react';

interface Props {
  title: string;
  items: FoodItem[];
  emoji?: string;
}

const FoodSection = ({ title, items, emoji }: Props) => {
  if (items.length === 0) return null;

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-xl md:text-2xl font-bold">
          {emoji && <span className="mr-2">{emoji}</span>}
          {title}
        </h2>
        <button className="text-xs text-primary flex items-center gap-1 hover:underline">
          View All <ChevronRight className="w-3 h-3" />
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((food, i) => (
          <FoodCard key={food.id} food={food} index={i} />
        ))}
      </div>
    </section>
  );
};

export default FoodSection;
