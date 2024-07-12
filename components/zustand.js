import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStateStore = create(persist(
  (set) => ({
    wishlistCount: 0,
    quantity: 1, 
    cart: [], 
    

    updateWishlistCount: (count) => set({ wishlistCount: count }),
    updateQuantity: () => set((state) => ({ quantity: state.quantity + 1 })),
    removeQuantity: () => set((state) => ({ quantity: state.quantity - 1 })),
    updateCart: (count) => set({ cart: count }),

  }),
  {
    name: 'zustand-storage',
  }
));

export default useStateStore;
