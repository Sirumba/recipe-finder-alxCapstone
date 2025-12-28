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

  let youtubeId = null;
  if (recipe.strYoutube) {
    const url = recipe.strYoutube;
    youtubeId = url.split("v=")[1];
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
      {youtubeId && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Video Tutorial</h3>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <p className="mt-4 text-sm">{recipe.strInstructions}</p>
    </section>
  );
}
