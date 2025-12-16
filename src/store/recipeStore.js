import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  selectedRecipe: null,

  // Empty functions for now
  setRecipes: () => {},
  oggleFavorite: () => {},
  setSelectedRecipe: () => {},
}));

export default useRecipeStore;
