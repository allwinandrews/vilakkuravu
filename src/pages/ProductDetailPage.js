import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import { useStore } from "../hooks-store/store";

export default function ProductDetailPage() {
  const params = useParams();

  const { productId } = params;

  const productDetails = useStore()[0].products.filter(
    (product) => product.id === productId
  )[0];

  return (
    <div className="row">
      <div className="col-md-3" key={productDetails.id}>
        <div className="card card-product-grid">
          <a className="img-wrap">
            <img src={productDetails.image} alt={productDetails.title} />
          </a>
        </div>
      </div>
      <div className="col-md-9">
        <figcaption className="info-wrap">
          <a className="title">{productDetails.title}</a>
          {productDetails.price && (
            <div className="price mt-1">${productDetails.price}</div>
          )}
          {productDetails.price && (
            <button>
              <a className="icon icon-sm rounded-circle border">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </button>
          )}
          {productDetails.price && (
            <button
              className={productDetails.isFavorite ? "favorite" : ""}
              // onClick={toggleFavHandler}
            >
              <a className={"icon icon-sm rounded-circle border"}>
                <i className="fa fa-heart"></i>
              </a>
            </button>
          )}
        </figcaption>
      </div>
    </div>
  );
}
