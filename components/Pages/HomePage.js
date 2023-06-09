import { useQuery } from "@tanstack/react-query";
import React from "react";
import Meal from "../Meal";

export default function HomePage() {
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
          <p>Home page - coming up...</p>
        </div>
      </div>
    </section>
  );
}
