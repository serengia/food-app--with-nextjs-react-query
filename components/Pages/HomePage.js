import { useQuery } from "@tanstack/react-query";
import React from "react";
import Meal from "../Meal";

export default function HomePage({ data }) {
  const meals = data?.data?.meals || [];
  return (
    <section className="section section-main">
      <div className="foods-container row">
        <div className="menu-heading">
          <h1>Welcome to Chickenry Restaurants</h1>
          <span className="item-count-wrapper">
            Available Meals(<span className="item-count"></span>)
          </span>
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
