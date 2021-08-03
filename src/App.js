import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-4">Company Name</div>
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
                    <span className="badge badge-pill badge-danger notify">
                      0
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
        <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main_nav"
              aria-controls="main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Supermarket</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Partnership</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Baby &amp Toys</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Fitness sport</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Clothing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Furnitures</a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    More
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item">Foods and Drink</a>
                    <a className="dropdown-item">Home interior</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item">Category 1</a>
                    <a className="dropdown-item">Category 2</a>
                    <a className="dropdown-item">Category 3</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="section-main bg padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-md-3">
              <nav className="card">
                <ul className="menu-category">
                  <li>
                    <a>Best clothes</a>
                  </li>
                  <li>
                    <a>Automobiles</a>
                  </li>
                  <li>
                    <a>Home interior</a>
                  </li>
                  <li>
                    <a>Electronics</a>
                  </li>
                  <li>
                    <a>Technologies</a>
                  </li>
                  <li>
                    <a>Digital goods</a>
                  </li>
                  <li>
                    <a>Online goods</a>
                  </li>
                </ul>
              </nav>
            </aside>
            <div className="col-md-9">
              <article className="banner-wrap">
                <img src="assets/images/2.jpg" className="w-100 rounded" />
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-name padding-y-sm">
        <div className="container">
          <header className="section-heading">
            <a className="btn btn-outline-primary float-right">See all</a>
            <h3 className="section-title">Popular products</h3>
          </header>

          <div className="row">
            <div className="col-md-3">
              <div className="card card-product-grid">
                <a className="img-wrap">
                  <img src="assets/images/items/1.jpg" />
                </a>
                <figcaption className="info-wrap">
                  <a className="title">Just another product name</a>
                  <div className="price mt-1">$179.00</div>
                </figcaption>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-product-grid">
                <a className="img-wrap">
                  <img src="assets/images/items/2.jpg" />
                </a>
                <figcaption className="info-wrap">
                  <a className="title">Some item name here</a>
                  <div className="price mt-1">$280.00</div>
                </figcaption>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-product-grid">
                <a className="img-wrap">
                  <img src="assets/images/items/3.jpg" />
                </a>
                <figcaption className="info-wrap">
                  <a className="title">Great product name here</a>
                  <div className="price mt-1">$56.00</div>
                </figcaption>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-product-grid">
                <a className="img-wrap">
                  <img src="assets/images/items/4.jpg" />
                </a>
                <figcaption className="info-wrap">
                  <a className="title">Just another product name</a>
                  <div className="price mt-1">$179.00</div>
                </figcaption>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-product-grid">
                <a className="img-wrap">
                  <img src="assets/images/items/5.jpg" />
                </a>
                <figcaption className="info-wrap">
                  <a className="title">Just another product name</a>
                  <div className="price mt-1">$179.00</div>
                </figcaption>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-product-grid">
                <a className="img-wrap">
                  <img src="assets/images/items/6.jpg" />
                </a>
                <figcaption className="info-wrap">
                  <a className="title">Some item name here</a>
                  <div className="price mt-1">$280.00</div>
                </figcaption>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-product-grid">
                <a className="img-wrap">
                  <img src="assets/images/items/7.jpg" />
                </a>
                <figcaption className="info-wrap">
                  <a className="title">Great product name here</a>
                  <div className="price mt-1">$56.00</div>
                </figcaption>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-product-grid">
                <a className="img-wrap">
                  <img src="assets/images/items/9.jpg" />
                </a>
                <figcaption className="info-wrap">
                  <a className="title">Just another product name</a>
                  <div className="price mt-1">$179.00</div>
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-name padding-y bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Download app demo text</h3>
              <p>Get an amazing app to make Your life easy</p>
            </div>
            <div className="col-md-6 text-md-right">
              <a>
                <img src="assets/images/misc/appstore.png" height="40" />
              </a>
              <a>
                <img src="assets/images/misc/appstore.png" height="40" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="section-footer border-top bg">
        <div className="container">
          <section className="footer-top  padding-y">
            <div className="row">
              <aside className="col-md col-6">
                <h6 className="title">Brands</h6>
                <ul className="list-unstyled">
                  <li>
                    <a>Adidas</a>
                  </li>
                  <li>
                    <a>Puma</a>
                  </li>
                  <li>
                    <a>Reebok</a>
                  </li>
                  <li>
                    <a>Nike</a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md col-6">
                <h6 className="title">Company</h6>
                <ul className="list-unstyled">
                  <li>
                    <a>About us</a>
                  </li>
                  <li>
                    <a>Career</a>
                  </li>
                  <li>
                    <a>Find a store</a>
                  </li>
                  <li>
                    <a>Rules and terms</a>
                  </li>
                  <li>
                    <a>Sitemap</a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md col-6">
                <h6 className="title">Help</h6>
                <ul className="list-unstyled">
                  <li>
                    <a>Contact us</a>
                  </li>
                  <li>
                    <a>Money refund</a>
                  </li>
                  <li>
                    <a>Order status</a>
                  </li>
                  <li>
                    <a>Shipping info</a>
                  </li>
                  <li>
                    <a>Open dispute</a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md col-6">
                <h6 className="title">Account</h6>
                <ul className="list-unstyled">
                  <li>
                    <a> User Login </a>
                  </li>
                  <li>
                    <a> User register </a>
                  </li>
                  <li>
                    <a> Account Setting </a>
                  </li>
                  <li>
                    <a> My Orders </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md">
                <h6 className="title">Social</h6>
                <ul className="list-unstyled">
                  <li>
                    <a>
                      <i className="fab fa-facebook"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-twitter"></i> Twitter
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-instagram"></i> Instagram
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-youtube"></i> Youtube
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </section>
          <section className="footer-bottom row">
            <div className="col-md-2">
              <p className="text-muted"> 2021 Company name </p>
            </div>
            <div className="col-md-8 text-md-center">
              <span className="px-2">info@com</span>
              <span className="px-2">+000-000-0000</span>
              <span className="px-2">Street name 123, ABC</span>
            </div>
            <div className="col-md-2 text-md-right text-muted">
              <i className="fab fa-lg fa-cc-visa"></i>
              <i className="fab fa-lg fa-cc-paypal"></i>
              <i className="fab fa-lg fa-cc-mastercard"></i>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default App;
