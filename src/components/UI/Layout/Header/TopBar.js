import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { useStore } from "../../../../hooks-store/store";
import AuthContext from "../../../../hooks-store/auth-context";

export default function TopBar() {
  const state = useStore()[0];
  const authCtx = useContext(AuthContext);

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
              <div title="My Cart" className="widget-header  mr-3">
                <a className="icon icon-sm rounded-circle border">
                  <i className="fa fa-shopping-cart"></i>
                </a>
                <span className="badge badge-pill badge-danger notify">0</span>
              </div>
              <div title="My Wishlist" className="widget-header  mr-3">
                <a className="icon icon-sm rounded-circle border">
                  <i className="fa fa-heart"></i>
                </a>
                <span className="badge badge-pill badge-danger notify">
                  {favoritesCount}
                </span>
              </div>
              {!authCtx.isLoggedIn && (
                <>
                  <div title="Sign In" className="widget-header  mr-3">
                    <NavLink
                      to="/sign-in"
                      className="icon icon-sm rounded-circle border"
                    >
                      <i className="fa fa-sign-in-alt"></i>
                    </NavLink>
                  </div>
                  <div title="Sign Up" className="widget-header  mr-3">
                    <NavLink
                      to="/sign-up"
                      className="icon icon-sm rounded-circle border"
                    >
                      <i className="fa fa-user-plus"></i>
                    </NavLink>
                  </div>
                </>
              )}
              {authCtx.isLoggedIn && (
                <div className="widget-header icontext">
                  <a className="icon icon-sm rounded-circle border">
                    <i className="fa fa-user"></i>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
