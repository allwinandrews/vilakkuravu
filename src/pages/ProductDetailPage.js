import React, { useCallback, useState, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import firebase from "firebase";

import { useStore } from "../hooks-store/store";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import ProductDetails from "../components/ProductDetailPage/ProductDetails";

export default function ProductDetailPage() {
  const params = useParams();

  const { productId } = params;

  const productDetail = useStore()[0].products.filter(
    (product) => product.id === productId
  )[0];
  const [productDetails, setProductDetails] = useState(productDetail);
  const [loading, setLoading] = useState(true);

  const getDoc = useCallback(async () => {
    const db = firebase.firestore();
    const snapshot = await db.collection("products").doc(productId).get();
    const data = snapshot.data();
    console.log(data);
    setProductDetails(data);
    setLoading(false);
  }, [productId]);

  useEffect(() => {
    if (!productDetails) {
      getDoc();
    } else {
      setLoading(false);
    }
  }, [productId]);

  const loaderUI = (
    <div className="centered">
      <LoadingSpinner />
    </div>
  );

  return (
    <div className="row">
      {!loading && productDetails && (
        <ProductDetails
          image={productDetails.image}
          title={productDetails.title}
          price={productDetails.price}
          description={productDetails.description}
          availableSizes={productDetails.available_sizes}
          brand={productDetails.brand}
          specifications={productDetails.specifications}
          // handleFavorite={toggleFavHandler}
        />
      )}
      {loading && loaderUI}
    </div>
  );
}
