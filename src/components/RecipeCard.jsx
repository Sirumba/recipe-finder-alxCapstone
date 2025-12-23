import useRecipeStore from "../store/recipeStore";

export default function RecipeCard({ recipe }) {
  if (!recipe) return null;

  const setSelectedRecipe = useRecipeStore((state) => state.setSelectedRecipe);

  return (
    <div
      onClick={() => setSelectedRecipe(recipe)}
      className="border rounded p-4 cursor-pointer hover:shadow"
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover mb-2"
      />

      <h2 className="font-bold">{recipe.strMeal}</h2>
      <p className="text-sm text-gray-600">{recipe.strCategory}</p>
      <p className="mt-2 text-gray-600">{recipe.strArea}</p>
    </div>
  );
}
