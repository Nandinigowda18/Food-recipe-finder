import React from "react";

function Favorites({ favorites, onSelect }) {
  if (favorites.length === 0) return null;

  return (
    <div className="my-4">
      <h2 className="h5 fw-bold mb-3">Favorites</h2>
      <div className="row g-3">
        {favorites.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="col-6 col-md-3"
            onClick={() => onSelect(recipe)}
            style={{ cursor: "pointer" }}
          >
            <div className="card h-100 text-center shadow-sm">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="card-img-top"
                style={{
                  height: "100px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body p-2">
                <p className="card-title small text-truncate mb-0">
                  {recipe.strMeal}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;

