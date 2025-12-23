import axios from "axios";

const mealApi = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
});

export const searchRecipesByName = async (query) => {
  const response = await mealApi.get(`/search.php?s=${query}`);
  return response.data.meals;
};
