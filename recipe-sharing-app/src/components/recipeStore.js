import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) => {
    const updated = [...get().recipes, newRecipe];
    set({ recipes: updated });
    get().filterRecipes();
  },

  updateRecipe: (updatedRecipe) => {
    const updated = get().recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    set({ recipes: updated });
    get().filterRecipes();
  },

  deleteRecipe: (id) => {
    const updated = get().recipes.filter((r) => r.id !== id);
    set({ recipes: updated });
    get().filterRecipes();
    set((state) => ({
      favorites: state.favorites.filter((fid) => fid !== id),
    }));
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((r) =>
      r.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  // ✅ FAVORITES
  addFavorite: (id) =>
    set((state) => ({
      favorites: [...state.favorites, id],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((fid) => fid !== id),
    })),

  isFavorite: (id) => get().favorites.includes(id),

  // ✅ RECOMMENDATIONS
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    // 🔁 Mock: randomly suggest from favorites
    const recommended = recipes.filter(
      (r) =>
        favorites.includes(r.id) && Math.random() > 0.4 // ~60% chance
    );
    set({ recommendations: recommended });
  },
}));
