import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
