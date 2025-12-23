import { useState } from "react";
import useRecipeStore from "../store/recipeStore";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const fetchRecipes = useRecipeStore((state) => state.fetchRecipes);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes(query);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..."
        className="border p-2 w-full"
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white">
        Search
      </button>
    </form>
  );
}
