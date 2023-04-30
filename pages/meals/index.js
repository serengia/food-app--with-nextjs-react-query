import React from "react";
import MEALS_API_URL from "@/globals";
import MealsPage from "@/components/Pages/Meals/MealsPage";

const url = `${MEALS_API_URL}/filter.php?c=Chicken`;

export default function index({ data }) {
  console.log("Data fron SSR", data);
  const meals = data?.meals;

  return (
    <main>
      <MealsPage meals={meals} />
    </main>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
