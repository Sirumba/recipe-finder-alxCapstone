import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  isLoading: false,
  error: null,
  favorites: [],
  selectedRecipe: null,
  searchQuery: "",

  // Empty functions for now
  setRecipes: (recipes) => set({ recipes }),
  setSelectedRecipe: (recipe) => set({ selectedRecipe: recipe }),
  setLoading: (status) => set({ isLoading: status }),
  setError: (message) => set({ error: message }),
  clearError: () => set({ error: null }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));

export default useRecipeStore;
