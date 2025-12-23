import useRecipeStore from "../store/recipeStore";

export default function RecipeDetails() {
  const recipe = useRecipeStore((state) => state.selectedRecipe);

  if (!recipe) return null;

  return (
    <section className="p-4 border-t mt-6">
      <h2 className="text-2xl font-bold mb-4">{recipe.strMeal}</h2>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full max-w-md mb-4 rounded"
      />

      <p className="mt-4 text-sm">{recipe.strInstructions}</p>
    </section>
  );
}
