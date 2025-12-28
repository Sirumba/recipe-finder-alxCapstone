import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import useRecipeStore from "./store/recipeStore";
import RecipeDetails from "./components/RecipeDetails";

export default function App() {
  const recipes = useRecipeStore((state) => state.recipes);
  const isLoading = useRecipeStore((state) => state.isLoading);
  const error = useRecipeStore((state) => state.error);

  return (
    <div>
      <Header />
      <SearchBar />

      <main className="p-4 max-w-6xl mx-auto">
        {isLoading && <p>Loading recipes...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!isLoading && recipes.length === 0 && (
          <p>No recipes found. Try another search.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
          <RecipeDetails />
        </div>
      </main>

      <Footer />
    </div>
  );
}
