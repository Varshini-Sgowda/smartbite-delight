export interface FoodItem {
  id: string;
  name: string;
  category: string;
  mealTime: ('breakfast' | 'lunch' | 'snacks' | 'dinner')[];
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  isPopular: boolean;
  isVeg: boolean;
  tags: string[];
}

export const categories = [
  'All', 'Biryani', 'Pizza', 'Burger', 'Chinese', 'South Indian',
  'North Indian', 'Desserts', 'Beverages', 'Salads', 'Wraps',
  'Combos', 'Snacks', 'Pasta', 'Sandwiches'
];

export const foodItems: FoodItem[] = [
  // BREAKFAST
  { id: '1', name: 'Masala Dosa', category: 'South Indian', mealTime: ['breakfast'], price: 89, rating: 4.5, reviews: 324, image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400', description: 'Crispy dosa with spiced potato filling', isPopular: true, isVeg: true, tags: ['crispy', 'traditional'] },
  { id: '2', name: 'Idli Sambhar', category: 'South Indian', mealTime: ['breakfast'], price: 69, rating: 4.3, reviews: 210, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400', description: 'Soft idlis with hot sambhar & chutney', isPopular: false, isVeg: true, tags: ['healthy', 'light'] },
  { id: '3', name: 'Aloo Paratha', category: 'North Indian', mealTime: ['breakfast'], price: 79, rating: 4.4, reviews: 189, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', description: 'Stuffed wheat bread with spiced potatoes', isPopular: true, isVeg: true, tags: ['filling', 'homestyle'] },
  { id: '4', name: 'Poha', category: 'Snacks', mealTime: ['breakfast'], price: 49, rating: 4.1, reviews: 156, image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400', description: 'Flattened rice with peanuts & spices', isPopular: false, isVeg: true, tags: ['light', 'quick'] },
  { id: '5', name: 'Pancake Stack', category: 'Desserts', mealTime: ['breakfast'], price: 149, rating: 4.6, reviews: 98, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400', description: 'Fluffy pancakes with maple syrup & berries', isPopular: true, isVeg: true, tags: ['sweet', 'fluffy'] },

  // LUNCH
  { id: '6', name: 'Chicken Biryani', category: 'Biryani', mealTime: ['lunch', 'dinner'], price: 249, rating: 4.7, reviews: 567, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400', description: 'Aromatic basmati rice with tender chicken', isPopular: true, isVeg: false, tags: ['spicy', 'aromatic'] },
  { id: '7', name: 'Veg Biryani', category: 'Biryani', mealTime: ['lunch', 'dinner'], price: 199, rating: 4.4, reviews: 312, image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400', description: 'Fragrant rice with mixed vegetables', isPopular: false, isVeg: true, tags: ['aromatic', 'wholesome'] },
  { id: '8', name: 'Butter Chicken', category: 'North Indian', mealTime: ['lunch', 'dinner'], price: 279, rating: 4.8, reviews: 890, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400', description: 'Creamy tomato-based chicken curry', isPopular: true, isVeg: false, tags: ['creamy', 'rich'] },
  { id: '9', name: 'Paneer Tikka Masala', category: 'North Indian', mealTime: ['lunch', 'dinner'], price: 229, rating: 4.5, reviews: 445, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', description: 'Grilled paneer in spiced gravy', isPopular: true, isVeg: true, tags: ['rich', 'grilled'] },
  { id: '10', name: 'Dal Makhani', category: 'North Indian', mealTime: ['lunch', 'dinner'], price: 189, rating: 4.6, reviews: 378, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400', description: 'Slow-cooked black lentils in butter', isPopular: false, isVeg: true, tags: ['creamy', 'protein'] },
  { id: '11', name: 'Chole Bhature', category: 'North Indian', mealTime: ['lunch'], price: 149, rating: 4.3, reviews: 267, image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400', description: 'Spicy chickpeas with fluffy fried bread', isPopular: true, isVeg: true, tags: ['spicy', 'filling'] },
  { id: '12', name: 'Thali Meal', category: 'North Indian', mealTime: ['lunch'], price: 199, originalPrice: 249, rating: 4.5, reviews: 534, image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', description: 'Complete meal with dal, sabzi, roti & rice', isPopular: true, isVeg: true, tags: ['complete', 'value'] },

  // PIZZA
  { id: '13', name: 'Margherita Pizza', category: 'Pizza', mealTime: ['lunch', 'dinner', 'snacks'], price: 199, rating: 4.3, reviews: 456, image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400', description: 'Classic pizza with mozzarella & basil', isPopular: false, isVeg: true, tags: ['cheesy', 'classic'] },
  { id: '14', name: 'Pepperoni Pizza', category: 'Pizza', mealTime: ['lunch', 'dinner', 'snacks'], price: 299, rating: 4.6, reviews: 678, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400', description: 'Loaded with spicy pepperoni & cheese', isPopular: true, isVeg: false, tags: ['spicy', 'loaded'] },
  { id: '15', name: 'BBQ Chicken Pizza', category: 'Pizza', mealTime: ['lunch', 'dinner'], price: 349, rating: 4.7, reviews: 345, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', description: 'Smoky BBQ sauce with grilled chicken', isPopular: true, isVeg: false, tags: ['smoky', 'grilled'] },

  // BURGERS
  { id: '16', name: 'Classic Cheese Burger', category: 'Burger', mealTime: ['lunch', 'dinner', 'snacks'], price: 149, rating: 4.4, reviews: 567, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', description: 'Juicy beef patty with melted cheese', isPopular: true, isVeg: false, tags: ['juicy', 'classic'] },
  { id: '17', name: 'Paneer Burger', category: 'Burger', mealTime: ['lunch', 'snacks'], price: 129, rating: 4.2, reviews: 234, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400', description: 'Crispy paneer patty with fresh veggies', isPopular: false, isVeg: true, tags: ['crispy', 'veggie'] },
  { id: '18', name: 'Double Decker Burger', category: 'Burger', mealTime: ['lunch', 'dinner'], price: 229, rating: 4.5, reviews: 189, image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400', description: 'Two patties stacked with special sauce', isPopular: true, isVeg: false, tags: ['loaded', 'double'] },

  // CHINESE
  { id: '19', name: 'Hakka Noodles', category: 'Chinese', mealTime: ['lunch', 'dinner'], price: 149, rating: 4.3, reviews: 345, image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400', description: 'Stir-fried noodles with vegetables', isPopular: false, isVeg: true, tags: ['stir-fried', 'spicy'] },
  { id: '20', name: 'Manchurian', category: 'Chinese', mealTime: ['snacks', 'dinner'], price: 169, rating: 4.4, reviews: 278, image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400', description: 'Deep-fried veg balls in tangy sauce', isPopular: true, isVeg: true, tags: ['tangy', 'crispy'] },
  { id: '21', name: 'Fried Rice', category: 'Chinese', mealTime: ['lunch', 'dinner'], price: 139, rating: 4.2, reviews: 456, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400', description: 'Wok-tossed rice with eggs & vegetables', isPopular: false, isVeg: false, tags: ['quick', 'filling'] },
  { id: '22', name: 'Spring Rolls', category: 'Chinese', mealTime: ['snacks'], price: 99, rating: 4.1, reviews: 167, image: 'https://images.unsplash.com/photo-1548507200-40daa tried?w=400', description: 'Crispy rolls stuffed with veggies', isPopular: false, isVeg: true, tags: ['crispy', 'appetizer'] },
  { id: '23', name: 'Chilli Chicken', category: 'Chinese', mealTime: ['lunch', 'dinner'], price: 219, rating: 4.6, reviews: 389, image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400', description: 'Spicy stir-fried chicken with peppers', isPopular: true, isVeg: false, tags: ['spicy', 'hot'] },

  // SNACKS
  { id: '24', name: 'Samosa (2 pcs)', category: 'Snacks', mealTime: ['snacks', 'breakfast'], price: 39, rating: 4.5, reviews: 890, image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=400', description: 'Crispy pastry with spiced potato filling', isPopular: true, isVeg: true, tags: ['crispy', 'street food'] },
  { id: '25', name: 'Pav Bhaji', category: 'Snacks', mealTime: ['snacks', 'dinner'], price: 119, rating: 4.4, reviews: 345, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880049?w=400', description: 'Buttery mashed veggies with toasted bread', isPopular: true, isVeg: true, tags: ['buttery', 'Mumbai'] },
  { id: '26', name: 'Vada Pav', category: 'Snacks', mealTime: ['snacks'], price: 29, rating: 4.3, reviews: 678, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880049?w=400', description: "Mumbai's iconic spicy potato burger", isPopular: true, isVeg: true, tags: ['Mumbai', 'spicy'] },
  { id: '27', name: 'French Fries', category: 'Snacks', mealTime: ['snacks'], price: 89, rating: 4.0, reviews: 234, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400', description: 'Crispy golden fries with seasoning', isPopular: false, isVeg: true, tags: ['crispy', 'classic'] },
  { id: '28', name: 'Momos (6 pcs)', category: 'Snacks', mealTime: ['snacks', 'dinner'], price: 99, rating: 4.5, reviews: 567, image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400', description: 'Steamed dumplings with spicy chutney', isPopular: true, isVeg: true, tags: ['steamed', 'dumplings'] },

  // WRAPS & SANDWICHES
  { id: '29', name: 'Chicken Shawarma', category: 'Wraps', mealTime: ['lunch', 'snacks', 'dinner'], price: 139, rating: 4.5, reviews: 456, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400', description: 'Grilled chicken wrap with garlic sauce', isPopular: true, isVeg: false, tags: ['grilled', 'Middle Eastern'] },
  { id: '30', name: 'Paneer Wrap', category: 'Wraps', mealTime: ['lunch', 'snacks'], price: 119, rating: 4.2, reviews: 189, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400', description: 'Grilled paneer with mint chutney wrap', isPopular: false, isVeg: true, tags: ['grilled', 'fresh'] },
  { id: '31', name: 'Club Sandwich', category: 'Sandwiches', mealTime: ['breakfast', 'lunch', 'snacks'], price: 159, rating: 4.3, reviews: 234, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', description: 'Triple-layer sandwich with chicken & cheese', isPopular: false, isVeg: false, tags: ['layered', 'filling'] },

  // PASTA
  { id: '32', name: 'Alfredo Pasta', category: 'Pasta', mealTime: ['lunch', 'dinner'], price: 219, rating: 4.4, reviews: 278, image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400', description: 'Creamy white sauce pasta with herbs', isPopular: false, isVeg: true, tags: ['creamy', 'Italian'] },
  { id: '33', name: 'Arrabbiata Penne', category: 'Pasta', mealTime: ['lunch', 'dinner'], price: 199, rating: 4.3, reviews: 167, image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400', description: 'Spicy tomato sauce penne pasta', isPopular: false, isVeg: true, tags: ['spicy', 'Italian'] },

  // SALADS
  { id: '34', name: 'Caesar Salad', category: 'Salads', mealTime: ['lunch', 'dinner'], price: 179, rating: 4.2, reviews: 145, image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400', description: 'Romaine lettuce with Caesar dressing', isPopular: false, isVeg: false, tags: ['healthy', 'light'] },
  { id: '35', name: 'Greek Salad', category: 'Salads', mealTime: ['lunch'], price: 159, rating: 4.1, reviews: 112, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400', description: 'Fresh veggies with feta & olives', isPopular: false, isVeg: true, tags: ['fresh', 'Mediterranean'] },

  // DESSERTS
  { id: '36', name: 'Gulab Jamun', category: 'Desserts', mealTime: ['lunch', 'dinner'], price: 79, rating: 4.6, reviews: 456, image: 'https://images.unsplash.com/photo-1666190094762-5b7b01e38bc0?w=400', description: 'Soft milk dumplings in sugar syrup', isPopular: true, isVeg: true, tags: ['sweet', 'traditional'] },
  { id: '37', name: 'Chocolate Brownie', category: 'Desserts', mealTime: ['snacks', 'dinner'], price: 129, rating: 4.7, reviews: 345, image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400', description: 'Rich chocolate brownie with ice cream', isPopular: true, isVeg: true, tags: ['chocolatey', 'warm'] },
  { id: '38', name: 'Rasgulla', category: 'Desserts', mealTime: ['lunch', 'dinner'], price: 69, rating: 4.3, reviews: 234, image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400', description: 'Soft cottage cheese balls in syrup', isPopular: false, isVeg: true, tags: ['sweet', 'Bengali'] },
  { id: '39', name: 'Ice Cream Sundae', category: 'Desserts', mealTime: ['snacks', 'dinner'], price: 149, rating: 4.5, reviews: 278, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400', description: 'Vanilla ice cream with toppings', isPopular: false, isVeg: true, tags: ['cold', 'creamy'] },

  // BEVERAGES
  { id: '40', name: 'Masala Chai', category: 'Beverages', mealTime: ['breakfast', 'snacks'], price: 29, rating: 4.4, reviews: 567, image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=400', description: 'Traditional Indian spiced tea', isPopular: true, isVeg: true, tags: ['hot', 'traditional'] },
  { id: '41', name: 'Cold Coffee', category: 'Beverages', mealTime: ['snacks'], price: 99, rating: 4.3, reviews: 345, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400', description: 'Chilled blended coffee with cream', isPopular: false, isVeg: true, tags: ['cold', 'refreshing'] },
  { id: '42', name: 'Mango Lassi', category: 'Beverages', mealTime: ['lunch', 'snacks'], price: 79, rating: 4.5, reviews: 289, image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=400', description: 'Creamy mango yogurt smoothie', isPopular: true, isVeg: true, tags: ['fruity', 'creamy'] },
  { id: '43', name: 'Fresh Lime Soda', category: 'Beverages', mealTime: ['lunch', 'snacks'], price: 49, rating: 4.0, reviews: 178, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400', description: 'Fizzy lime drink, sweet or salty', isPopular: false, isVeg: true, tags: ['refreshing', 'fizzy'] },

  // COMBOS
  { id: '44', name: 'Burger + Fries Combo', category: 'Combos', mealTime: ['lunch', 'dinner'], price: 199, originalPrice: 249, rating: 4.4, reviews: 345, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', description: 'Cheese burger with crispy fries & drink', isPopular: true, isVeg: false, tags: ['value', 'combo'] },
  { id: '45', name: 'Pizza + Pasta Combo', category: 'Combos', mealTime: ['lunch', 'dinner'], price: 349, originalPrice: 429, rating: 4.5, reviews: 234, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', description: 'Personal pizza with pasta & garlic bread', isPopular: true, isVeg: true, tags: ['Italian', 'value'] },
  { id: '46', name: 'Biryani + Kebab Combo', category: 'Combos', mealTime: ['lunch', 'dinner'], price: 399, originalPrice: 479, rating: 4.6, reviews: 189, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400', description: 'Chicken biryani with seekh kebab & raita', isPopular: true, isVeg: false, tags: ['Mughlai', 'value'] },
  { id: '47', name: 'South Indian Combo', category: 'Combos', mealTime: ['breakfast', 'lunch'], price: 149, originalPrice: 189, rating: 4.3, reviews: 167, image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400', description: 'Dosa + Idli + Vada with sambhar & chutney', isPopular: false, isVeg: true, tags: ['traditional', 'value'] },
  { id: '48', name: 'Chinese Combo', category: 'Combos', mealTime: ['lunch', 'dinner'], price: 279, originalPrice: 349, rating: 4.4, reviews: 145, image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400', description: 'Noodles + Manchurian + Spring Roll', isPopular: false, isVeg: true, tags: ['Chinese', 'value'] },

  // A FEW MORE
  { id: '49', name: 'Tandoori Chicken', category: 'North Indian', mealTime: ['dinner'], price: 299, rating: 4.7, reviews: 456, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400', description: 'Charcoal-grilled spiced chicken', isPopular: true, isVeg: false, tags: ['grilled', 'smoky'] },
  { id: '50', name: 'Hyderabadi Biryani', category: 'Biryani', mealTime: ['lunch', 'dinner'], price: 269, rating: 4.8, reviews: 789, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400', description: 'Authentic Hyderabadi dum biryani', isPopular: true, isVeg: false, tags: ['authentic', 'dum-cooked'] },
];
