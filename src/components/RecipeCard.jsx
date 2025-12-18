export default function RecipeCard({ recipe }) {
  return (
    <div className="border p-4 rounded-md">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover mb-2"
      />
      <h2 className="font-bold">{recipe.strMeal}</h2>
      <p className="text-sm text-gray">
        {recipe.strCategory} • {recipe.strArea}
      </p>
    </div>
  );
}
