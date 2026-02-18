import { useMemo } from 'react';
import { foodItems, FoodItem } from '@/data/foodData';

type MealTime = 'breakfast' | 'lunch' | 'snacks' | 'dinner';

const getMealTime = (): MealTime => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 11) return 'breakfast';
  if (hour >= 11 && hour < 15) return 'lunch';
  if (hour >= 15 && hour < 19) return 'snacks';
  return 'dinner';
};

export const useRecommendations = () => {
  const mealTime = getMealTime();

  const timeBasedItems = useMemo(() =>
    foodItems.filter(f => f.mealTime.includes(mealTime)).slice(0, 8),
    [mealTime]
  );

  const popularItems = useMemo(() =>
    foodItems.filter(f => f.isPopular).sort((a, b) => b.reviews - a.reviews).slice(0, 8),
    []
  );

  const topRated = useMemo(() =>
    [...foodItems].sort((a, b) => b.rating - a.rating).slice(0, 8),
    []
  );

  const budgetFriendly = useMemo(() =>
    [...foodItems].sort((a, b) => a.price - b.price).slice(0, 8),
    []
  );

  const comboOffers = useMemo(() =>
    foodItems.filter(f => f.category === 'Combos'),
    []
  );

  const getHistoryBased = (): FoodItem[] => {
    const orders = JSON.parse(localStorage.getItem('smartbite_orders') || '[]');
    if (orders.length === 0) return popularItems;

    const catCount: Record<string, number> = {};
    orders.forEach((order: any) => {
      order.items?.forEach((item: any) => {
        const cat = item.food?.category;
        if (cat) catCount[cat] = (catCount[cat] || 0) + item.quantity;
      });
    });

    const topCat = Object.entries(catCount).sort((a, b) => b[1] - a[1])[0]?.[0];
    if (!topCat) return popularItems;

    return foodItems.filter(f => f.category === topCat).slice(0, 8);
  };

  const mealTimeLabel = {
    breakfast: '🌅 Good Morning! Breakfast Picks',
    lunch: '☀️ Afternoon Cravings',
    snacks: '🍿 Evening Snack Time',
    dinner: '🌙 Dinner Delights',
  }[mealTime];

  return { timeBasedItems, popularItems, topRated, budgetFriendly, comboOffers, getHistoryBased, mealTimeLabel };
};
