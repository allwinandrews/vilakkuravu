import React from "react";

import { useStore } from "../../../../hooks-store/store";

export default function TopBar() {
  const state = useStore()[0];

  const favoritesCount = state.products.filter(
    (product) => product.isFavorite
  ).length;

  return (
    <section className="header-main border-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 col-4">Vilakkuravu</div>
          <div className="col-lg-6 col-sm-12">
            <form action="#" className="search">
              <div className="input-group w-100">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="widgets-wrap float-md-right">
              <div className="widget-header  mr-3">
                <a className="icon icon-sm rounded-circle border">
                  <i className="fa fa-shopping-cart"></i>
                </a>
                <span className="badge badge-pill badge-danger notify">0</span>
              </div>
              <div className="widget-header  mr-3">
                <a className="icon icon-sm rounded-circle border">
                  <i className="fa fa-heart"></i>
                </a>
                <span className="badge badge-pill badge-danger notify">
                  {favoritesCount}
                </span>
              </div>
              <div className="widget-header icontext">
                <a className="icon icon-sm rounded-circle border">
                  <i className="fa fa-user"></i>
                </a>
                <div className="text">
                  <span className="text-muted">Welcome!</span>
                  <div>
                    <a>Sign in</a> |<a> Register</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}