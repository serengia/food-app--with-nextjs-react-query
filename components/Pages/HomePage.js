import React from "react";

export default function HomePage() {
  return (
    <section class="section section-main">
      <div class="foods-container row">
        <div class="menu-heading">
          <h1>Welcome to Chickenry Restaurants</h1>
          <span class="item-count-wrapper">
            Available Meals(<span class="item-count"></span>)
          </span>
        </div>
        <div class="cards"></div>
      </div>
    </section>
  );
}
