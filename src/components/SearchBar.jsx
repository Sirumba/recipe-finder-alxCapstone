import useRecipeStore from "../store/recipeStore";

export default function SearchBar() {
  const setSearchQuery = useRecipeStore((state) => state.setSearchQuery);
  const searchQuery = useRecipeStore((state) => state.searchQuery);

  return (
    <div className="p-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for recipes..."
        className="border p-2 w-full"
      />
    </div>
  );
}
