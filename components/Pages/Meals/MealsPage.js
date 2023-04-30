import Meal from "@/components/Meal";
import React from "react";

export default function MealsPage({ meals }) {
  return (
    <section className="section section-main">
      <div className="foods-container row">
        <div className="menu-heading">
          <h1>Meals</h1>
        </div>
        <div className="cards">
          {meals.map((m) => (
            <Meal key={m.idMeal} meal={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
