import { Star, Plus, Minus } from 'lucide-react';
import { FoodItem } from '@/data/foodData';
import { useCartContext } from '@/contexts/CartContext';
import { motion } from 'framer-motion';

const FoodCard = ({ food, index = 0 }: { food: FoodItem; index?: number }) => {
  const { items, addToCart, updateQuantity } = useCartContext();
  const cartItem = items.find(i => i.food.id === food.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="glass-card-hover rounded-xl overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        {food.isPopular && (
          <span className="absolute top-2 left-2 badge-popular">🔥 Popular</span>
        )}
        {food.originalPrice && (
          <span className="absolute top-2 right-2 bg-success text-success-foreground text-[10px] px-2 py-0.5 rounded-full font-semibold">
            {Math.round((1 - food.price / food.originalPrice) * 100)}% OFF
          </span>
        )}
        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-success/90 text-success-foreground text-xs px-2 py-0.5 rounded">
          <Star className="w-3 h-3 fill-current" />
          <span className="font-semibold">{food.rating}</span>
          <span className="opacity-80">({food.reviews})</span>
        </div>
        {food.isVeg ? (
          <span className="absolute bottom-2 right-2 w-4 h-4 border border-success rounded-sm flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-success" />
          </span>
        ) : (
          <span className="absolute bottom-2 right-2 w-4 h-4 border border-destructive rounded-sm flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-destructive" />
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="font-display font-semibold text-sm truncate">{food.name}</h3>
        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{food.description}</p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display font-bold text-lg">₹{food.price}</span>
            {food.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">₹{food.originalPrice}</span>
            )}
          </div>

          {cartItem ? (
            <div className="flex items-center gap-2 bg-secondary rounded-lg px-1">
              <button
                onClick={() => updateQuantity(food.id, cartItem.quantity - 1)}
                className="w-7 h-7 flex items-center justify-center text-primary hover:bg-primary/10 rounded transition-colors"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-bold text-sm w-5 text-center">{cartItem.quantity}</span>
              <button
                onClick={() => updateQuantity(food.id, cartItem.quantity + 1)}
                className="w-7 h-7 flex items-center justify-center text-primary hover:bg-primary/10 rounded transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(food)}
              className="gradient-btn px-4 py-1.5 rounded-lg text-xs font-semibold"
            >
              ADD
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
