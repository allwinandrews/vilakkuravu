import React from "react";

export default function FooterSection() {
  return (
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
  );
}
