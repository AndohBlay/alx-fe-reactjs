// src/components/RecipeDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json") // fetch mock data
      .then((res) => res.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) return <p className="text-center text-lg p-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Recipe Title */}
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{recipe.title}</h1>
      
      {/* Image */}
      <img 
        src={recipe.image} 
        alt={recipe.title} 
        className="w-full h-64 object-cover rounded-xl shadow-lg mb-6" 
      />

      {/* Summary */}
      <p className="text-lg text-gray-600 mb-6">{recipe.summary}</p>

      {/* Ingredients */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Ingredients</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Steps */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Cooking Steps</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          {recipe.steps?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
