import React from "react";

import SectionHeader from "../SectionHeader";
import SectionNameCard from "../UI/Cards/SectionNameCard";
import ProductGrid from "../ProductGrid";

import { useStore } from "../../hooks-store/store";

export default function PopularProducts() {
  const state = useStore()[0];

  return (
    <SectionNameCard padding="padding-y-sm">
      <SectionHeader title="Popular products" />

      <div className="row">
        {state.products &&
          state.products.map((section) => (
            <ProductGrid
              key={section.id}
              id={section.id}
              image={section.image}
              title={section.title}
              price={section.price}
              category={section.category}
              isFavorite={section.isFavorite}
              link={`/category/${
                section.category
              }/${section.type.toLowerCase()}/${section.id}`}
            />
          ))}
      </div>
    </SectionNameCard>
  );
}
