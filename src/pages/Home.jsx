import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import RecipeDetails from "../components/RecipeDetails";
import Favorites from "../components/Favorites";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      if (data.meals) setRecipes(data.meals);
      else setError("No recipes found!");
    } catch {
      setError("Failed to fetch recipes.");
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = (recipe) => {
    const exists = favorites.find((r) => r.idMeal === recipe.idMeal);
    if (!exists) {
      const updated = [...favorites, recipe];
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            🍳 Recipe Finder
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-4">
        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Loading */}
        {loading && (
          <div className="d-flex justify-content-center my-4">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        )}

        {/* Error */}
        {error && <p className="text-danger text-center">{error}</p>}

        {/* Favorites */}
        <Favorites favorites={favorites} onSelect={setSelectedRecipe} />

        {/* Recipes */}
        <div className="row g-4 my-4">
          {recipes.map((recipe) => (
            <div key={recipe.idMeal} className="col-6 col-sm-4 col-md-2"> 
              {/* col-md-2 → 6/12 columns = 5 items per row */}
              <RecipeCard
                recipe={recipe}
                onClick={(r) => {
                  setSelectedRecipe(r);
                  addToFavorites(r);
                }}
              />
            </div>
          ))}
        </div>

        {/* Recipe Details */}
        {selectedRecipe && (
          <RecipeDetails
            recipe={selectedRecipe}
            onClose={() => setSelectedRecipe(null)}
          />
        )}
      </div>
    </>
  );
}

export default Home;

