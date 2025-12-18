import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import useRecipeStore from "./store/recipeStore";

export default function App() {
  const recipes = useRecipeStore((state) => state.recipes);
  const isLoading = useRecipeStore((state) => state.isLoading);
  const error = useRecipeStore((state) => state.error);

  return (
    <div>
      <Header />
      <SearchBar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
