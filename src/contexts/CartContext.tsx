import { createContext, useContext, ReactNode } from 'react';
import { useCart, CartItem } from '@/hooks/useCart';
import { FoodItem } from '@/data/foodData';

interface CartContextType {
  items: CartItem[];
  addToCart: (food: FoodItem) => void;
  removeFromCart: (foodId: string) => void;
  updateQuantity: (foodId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const cart = useCart();
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCartContext must be used within CartProvider');
  return ctx;
};
