import { useRecipeStore } from '../stores/recipeStore';
import { Link } from 'react-router-dom';
import FavoriteToggleButton from './FavoriteToggleButton';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No matching recipes.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '1rem' }}>
            <h3>{recipe.title}</h3>
            <Link to={`/recipes/${recipe.id}`}>View Details</Link>
            <FavoriteToggleButton recipeId={recipe.id} />
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
