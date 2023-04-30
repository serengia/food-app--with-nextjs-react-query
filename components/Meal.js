import React from "react";

export default function Meal({ meal }) {
  return (
    <div className="item">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div class="item-meta-data">
        <h2 class="name">{meal.strMeal}</h2>
        <span class="item-icon-container">
          <i data-id={meal.idMeal} class="item-icon fa-solid fa-heart"></i>
          <span class="likes">
            <span class="likes-count">3</span> Likes
          </span>
        </span>
      </div>

      <button data-id-meal={meal.idMeal} class="card-btn">
        View details
      </button>
    </div>
  );
}
