import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStateStore = create(persist(
  (set) => ({
    wishlistCount: [], 
    cart: [], 
    quantities: {}, 
    searchTerms: '',






    
    toggleWishlist: (title) => set((state) => ({
      wishlistCount: state.wishlistCount.includes(title)
        ? state.wishlistCount.filter(item => item !== title)
        : [...state.wishlistCount, title],
    })),

    increaseQuantity: (title) => set((state) => ({
      quantities: {
        ...state.quantities,
        [title]: (state.quantities[title] || 0) + 1,
      },
    })),

    decreaseQuantity: (title) => set((state) => ({
      quantities: {
        ...state.quantities,
        [title]: Math.max((state.quantities[title] || 1) - 1, 1),
      },
    })),

    addToCart: (title) => set((state) => ({
      cart: [...state.cart, title],
    })),

    removeFromCart: (title) => set((state) => ({
      cart: state.cart.filter(item => item !== title),
      quantities: { ...state.quantities, [title]: undefined }, 
    })),

    updateSearchTerm: (search) => set(() => ({
      searchTerms: search,
    })),

  }),
  {
    name: 'zustand-storage',
  }
));

export default useStateStore;
