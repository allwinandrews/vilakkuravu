import React from "react";
import { Link } from "react-router-dom";

import { useStore } from "../hooks-store/store";

const ProductGrid = React.memo((props) => {
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    dispatch("TOGGLE_FAV", props.id);
  };

  return (
    <div className="col-md-3" key={props.id}>
      <div className="card card-product-grid">
        <Link to={props.link}>
          <a className="img-wrap">
            <img src={props.image} alt={props.title} />
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
