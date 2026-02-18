import { useState, useEffect, useCallback } from 'react';
import { FoodItem } from '@/data/foodData';

export interface CartItem {
  food: FoodItem;
  quantity: number;
}

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('smartbite_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('smartbite_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = useCallback((food: FoodItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.food.id === food.id);
      if (existing) {
        return prev.map(i => i.food.id === food.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { food, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((foodId: string) => {
    setItems(prev => prev.filter(i => i.food.id !== foodId));
  }, []);

  const updateQuantity = useCallback((foodId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(i => i.food.id !== foodId));
    } else {
      setItems(prev => prev.map(i => i.food.id === foodId ? { ...i, quantity } : i));
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const total = items.reduce((sum, i) => sum + i.food.price * i.quantity, 0);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return { items, addToCart, removeFromCart, updateQuantity, clearCart, total, itemCount };
};
