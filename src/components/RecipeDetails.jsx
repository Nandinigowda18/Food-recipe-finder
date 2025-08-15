import React from "react";

function RecipeDetails({ recipe, onClose }) {
  if (!recipe) return null;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) ingredients.push(`${ingredient} - ${measure}`);
  }

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{recipe.strMeal}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="img-fluid rounded mb-3"
            />
            <h6 className="fw-bold">Ingredients:</h6>
            <ul className="list-unstyled mb-3">
              {ingredients.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
            <h6 className="fw-bold">Instructions:</h6>
            <p>{recipe.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
