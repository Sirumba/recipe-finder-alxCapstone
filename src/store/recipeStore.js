import { create } from "zustand";
import { searchRecipesByName } from "../api/mealApi";

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

  // Async action to fetch recipes
  fetchRecipes: async (query) => {
    if (!query) return;

    set({ isLoading: true, error: null });

    try {
      const meals = await searchRecipesByName(query);
      set({ recipes: meals || [] });
    } catch (err) {
      set({ error: "Failed to fetch recipes. Please try again." });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useRecipeStore;
