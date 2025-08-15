import React from "react";

function RecipeCard({ recipe, onClick }) {
  return (
    <div
      className="card h-100 shadow-sm"
      style={{
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
      }}
      onClick={() => onClick(recipe)}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="card-img-top"
        style={{
          height: "160px",
          objectFit: "cover",
        }}
      />
      <div className="card-body text-center p-2">
        <h6 className="card-title mb-0">{recipe.strMeal}</h6>
      </div>
    </div>
  );
}

export default RecipeCard;


