import useRecipeStore from "../store/recipeStore";

export default function RecipeDetails() {
  const recipe = useRecipeStore((state) => state.selectedRecipe);

  if (!recipe) return null;

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <section className="p-4 border-t mt-6">
      <h2 className="text-2xl font-bold mb-4">{recipe.strMeal}</h2>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full max-w-md mb-4 rounded"
      />
      {ingredients.length > 0 && (
        <>
          <h3 className="mt-4 font-semibold">Ingredients</h3>
          <ul className="list-disc pl-5 mt-2">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
      <p className="mt-4 text-sm">{recipe.strInstructions}</p>
    </section>
  );
}
