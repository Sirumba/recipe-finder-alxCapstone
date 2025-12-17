import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  isLoading: false,
  error: null,
  favorites: [],
  selectedRecipe: null,

  // Empty functions for now
  setRecipes: (recipes) => set({ recipes }),
  setSelectedRecipe: (recipe) => set({ selectedRecipe: recipe}),
  setLoading: (status) => set({ isLoading: status }),
  setError: (message) => set({ error: message }),
  clearError: () => set({ error: null }),
}));

export default useRecipeStore;
