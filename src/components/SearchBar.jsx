import useRecipeStore from "../store/recipeStore";

export default function SearchBar() {
  const setSearchQuery = useRecipeStore((state) => state.setSearchQuery);
  const searchQuery = useRecipeStore((state) => state.searchQuery);
  const setRecipes = useRecipeStore((state) => state.setRecipes);
  const setLoading = useRecipeStore((state) => state.setLoading);
  const setError = useRecipeStore((state) => state.setError);
  const clearError = useRecipeStore((state) => state.clearError);

  const handleSearch = async (e) => {
    e.preventDefault();

    setLoading(true);
    clearError();

    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      setRecipes(response.data.meals || []);
    } catch (error) {
      setError("Failed to fetch recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="p-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search recipes..."
        className="border p-2 w-full"
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white">
        Search
      </button>
    </form>
  );
}
