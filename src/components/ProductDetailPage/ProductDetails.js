import React, { useState } from "react";

import classes from "./ProductDetails.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

export default function ProductDetails(props) {
  const {
    image,
    title,
    price,
    handleFavorite,
    description,
    availableSizes,
    brand,
    specifications,
  } = props;

  const availableSizesList = Object.keys(availableSizes).map((size) => size);
  const [imageLoading, setImageLoading] = useState(false);

  // const loaderUI = (
  //   <div className="centered">
  //     <LoadingSpinner />
  //   </div>
  // );

  return (
    <div className={classes.card}>
      <div className={classes["container-fliud"]}>
        <div className={`${classes.wrapper} ${classes.row}`}>
          <div className={`${classes.preview} ${classes["col-md-6"]}`}>
            <div
              className={`${classes["preview-pic"]} ${classes["tab-content"]}`}
            >
              {/* <div
                className={`${classes["tab-pane"]} ${classes.active}`}
                id="pic-1"
              >
                <img
                  src={image}
                  style={style}
                  onLoad={() => {
                    setImageLoading(false);
                    console.log(false);
                  }}
                />
              </div> */}

              <div className={classes["smooth-image-wrapper"]}>
                <img
                  src={image}
                  alt={title}
                  className={`${classes["smooth-image"]} ${
                    classes[`image-${imageLoading ? "visible" : "hidden"}`]
                  }`}
                  onLoad={() => setImageLoading(true)}
                />
                {!imageLoading && (
                  <div className={classes["smooth-preloader"]}>
                    <span className={classes.loader} />
                  </div>
                )}
              </div>
            </div>
          </div>
          {imageLoading && (
            <div className="details col-md-6">
              <h3 className={classes["product-title"]}>{title}</h3>
              {/* <div className={classes.rating}>
              <div className={classes.stars}>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
              <span className={classes["review-no"]}>41 reviews</span>
            </div> */}
              <p className={classes["product-description"]}>{description}</p>
              <h4 className={classes.price}>
                current price <span>₹ {price}</span>
              </h4>
              {/* <p className={classes.vote}>
              <strong>91%</strong> of buyers enjoyed this product!{" "}
              <strong>(87 votes)</strong>
            </p> */}
              <h5 className={classes.price}>
                sizes{"             "}
                {availableSizesList.map((size, index) => {
                  const sizeText = index === 0 ? size : ", " + size;
                  return <span key={size + "-" + index}>{sizeText}</span>;
                })}
              </h5>
              <br />
              <br />
              {/* <h5 className={classes.colors}>
              colors:
              <span
                className="color orange not-available"
                data-toggle="tooltip"
                title="Not In store"
              ></span>
              <span className="color green"></span>
              <span className="color blue"></span>
            </h5> */}
              <div className={classes.action}>
                <button className={classes.button}>
                  <a className="icon icon-sm rounded-circle border">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                </button>
                <br />
                <br />
                <button
                  className={classes.button} // onClick={toggleFavHandler}
                >
                  <a className={"icon icon-sm rounded-circle border"}>
                    <i className="fa fa-heart"></i>
                  </a>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
