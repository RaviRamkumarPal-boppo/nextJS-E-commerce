import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStateStore = create(persist(
  (set) => ({
    wishlistCount: [],
    cart: [],
    quantities: {},

    updateWishlistCount: (wishlistCount) => set({ wishlistCount }),
    updateQuantity: (title) => set((state) => ({
      quantities: {
        ...state.quantities,
        [title]: (state.quantities[title] || 1) + 1,
      },
    })),
    removeQuantity: (title) => set((state) => ({
      quantities: {
        ...state.quantities,
        [title]: Math.max((state.quantities[title] || 1) - 1, 1),
      },
    })),
    updateCart: (cart) => set({ cart }),
  }),
  {
    name: 'zustand-storage',
  }
));

export default useStateStore;
