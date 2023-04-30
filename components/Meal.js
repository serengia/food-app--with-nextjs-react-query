import React from "react";

export default function Meal({ meal }) {
  return (
    <div className="item">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="item-meta-data">
        <h2 className="name">{meal.strMeal}</h2>
        <span className="item-icon-container">
          <i data-id={meal.idMeal} className="item-icon fa-solid fa-heart"></i>
          <span className="likes">
            <span className="likes-count">3</span> Likes
          </span>
        </span>
      </div>

      <button data-id-meal={meal.idMeal} className="card-btn">
        View details
      </button>
    </div>
  );
}
