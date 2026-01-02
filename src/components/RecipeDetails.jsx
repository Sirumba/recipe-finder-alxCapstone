import useRecipeStore from "../store/recipeStore";
import { use, useEffect, useRef } from "react";

export default function RecipeDetails() {
  const recipe = useRecipeStore((state) => state.selectedRecipe);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

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
    <section ref={detailsRef} className="p-4 border-t mt-8 max-w-3xl mx-auto">
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
      {recipe.strSource && (
        <p className="mt-4 text-sm">
          Source:{" "}
          <a
            href={recipe.strSource}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View full recipe
          </a>
        </p>
      )}
      <p className="mt-4 text-sm leading-relaxed whitespace-pre-line">
        {recipe.strInstructions}
      </p>
    </section>
  );
}
