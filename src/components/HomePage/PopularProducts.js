import React, { useEffect, useState } from "react";
import firebase from "firebase";

import SectionHeader from "../SectionHeader";
import SectionNameCard from "../UI/Cards/SectionNameCard";
import ProductGrid from "../ProductGrid/ProductGrid";
import LoadingSpinner from "../UI/LoadingSpinner";

import { useStore } from "../../hooks-store/store";

export default function PopularProducts() {
  const [state, dispatch] = useStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = firebase.firestore();
    return db.collection("products").onSnapshot((snapshot) => {
      const productsList = [];
      snapshot.forEach((doc) =>
        productsList.push({ ...doc.data(), id: doc.id })
      );

      dispatch("REPLACE_PRODUCTS", productsList);
      setLoading(false);
    });
  }, []);

  const loaderUI = (
    <div className="centered">
      <LoadingSpinner />
    </div>
  );

  return (
    <SectionNameCard padding="padding-y-sm">
      <SectionHeader title="Popular products" />

      <div className="row">
        {!loading && state.products.length === 0 && (
          <p>No Products Available</p>
        )}
        {!loading &&
          state.products &&
          state.products.map((section) => (
            <ProductGrid
              key={section.id}
              id={section.id}
              image={section.image}
              title={section.title}
              price={section.price}
              gender={section.gender}
              isFavorite={section.isFavorite}
              link={`/category/${
                section.gender
              }/${section.type.toLowerCase()}/${section.id}`}
            />
          ))}
        {loading && loaderUI}
      </div>
    </SectionNameCard>
  );
}
