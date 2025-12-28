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
    <form
      onSubmit={handleSubmit}
      className="p-4 max-w-3xl mx-auto flex flex-col gap-2"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..."
        className="border p-3 rounded w-full"
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white">
        Search
      </button>
    </form>
  );
}
