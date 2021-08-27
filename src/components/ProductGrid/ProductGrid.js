import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useStore } from "../../hooks-store/store";
import classes from "./ProductGrid.module.css";

const ProductGrid = React.memo((props) => {
  const dispatch = useStore(false)[1];
  const [imageLoading, setImageLoading] = useState(false);

  const toggleFavHandler = () => {
    dispatch("TOGGLE_FAV", props.id);
  };

  return (
    <div className="col-md-3" key={props.id}>
      <div className="card card-product-grid">
        <Link to={props.link}>
          <a className="img-wrap">
            <img
              className={`smooth-image image-${
                imageLoading ? "visible" : "hidden"
              }`}
              src={props.image}
              alt={props.title}
              onLoad={() => setImageLoading(true)}
            />
            {!imageLoading && (
              <div className="smooth-preloader">
                <span className="loader" />
              </div>
            )}
          </a>
        </Link>
        <figcaption className="info-wrap">
          <a className="title">{props.title}</a>
          {props.price && <div className="price mt-1">${props.price}</div>}
          {props.price && (
            <button>
              <a className="icon icon-sm rounded-circle border">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </button>
          )}
          {props.price && (
            <button
              className={props.isFavorite ? "favorite" : ""}
              onClick={toggleFavHandler}
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
});

export default ProductGrid;
