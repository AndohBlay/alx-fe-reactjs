import React, { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load mock data
  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">🍴 Recipe Sharing Platform</h1>

      {/* Grid Layout for Recipes */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
