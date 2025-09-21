import { useRecipeStore } from '../stores/recipeStore';

const FavoriteToggleButton = ({ recipeId }) => {
  const isFavorite = useRecipeStore((state) => state.favorites.includes(recipeId));
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const handleToggle = () => {
    isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId);
  };

  return (
    <button onClick={handleToggle} style={{ marginLeft: '1rem' }}>
      {isFavorite ? '★ Remove Favorite' : '☆ Add to Favorites'}
    </button>
  );
};

export default FavoriteToggleButton;
