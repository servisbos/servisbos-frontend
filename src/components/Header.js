import React, { Component } from "react";
import "../assets/css/style.css";
import "../assets/css/menu.css";
import "../assets/css/vendors.css";
import "../assets/css/icon_fonts/css/all_icons_min.css";

class Header extends Component {
  render() {
    return (
      <header className="header_sticky">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div id="logo_home">
                <h1>
                  <a href="index.html" title="Klikboking">
                    Klikboking
                  </a>
                </h1>
              </div>
            </div>
            <nav className="col-lg-9 col-6">
              <a
                className="cmn-toggle-switch cmn-toggle-switch__htx open_close"
                href="#0"
              >
                <span>Menu mobile</span>
              </a>
              <ul id="top_access">
                <li>
                  <a href="login.html">
                    <i className="pe-7s-user" />
                  </a>
                </li>
                <li>
                  <a href="register-doctor.html">
                    <i className="pe-7s-add-user" />
                  </a>
                </li>
              </ul>
              <div className="main-menu">
                <ul>
                  <li className="submenu">
                    <a href="#0" className="show-submenu">
                      Home
                      <i className="icon-down-open-mini" />
                    </a>
                    <ul>
                      <li>
                        <a href="index.html">Home Default</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home Version 2</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home Version 3</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home Version 4</a>
                      </li>
                      <li>
                        <a href="index-6.html">Revolution Slider</a>
                      </li>
                      <li>
                        <a href="index-5.html">With Cookie Bar (EU law)</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#0" className="show-submenu">
                      Pages
                      <i className="icon-down-open-mini" />
                    </a>
                    <ul>
                      <li>
                        <a href="list.html">List page</a>
                      </li>
                      <li>
                        <a href="grid-list.html">List grid page</a>
                      </li>
                      <li>
                        <a href="list-map.html">List map page</a>
                      </li>
                      <li>
                        <a href="detail-page.html">Detail page</a>
                      </li>
                      <li>
                        <a href="detail-page-2.html">Detail page 2</a>
                      </li>
                      <li>
                        <a href="detail-page-3.html">Detail page 3</a>
                      </li>
                      <li>
                        <a href="blog-1.html">Blog</a>
                      </li>
                      <li>
                        <a href="badges.html">Badges</a>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="login-2.html">Login 2</a>
                      </li>
                      <li>
                        <a href="register-doctor.html">Register Doctor</a>
                      </li>
                      <li>
                        <a href="register.html">Register</a>
                      </li>
                      <li>
                        <a href="contacts.html">Contacts</a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#0" className="show-submenu">
                      Extra Elements
                      <i className="icon-down-open-mini" />
                    </a>
                    <ul>
                      <li>
                        <a href="detail-page-working-booking.html">
                          Detail working booking
                        </a>
                      </li>
                      <li>
                        <a href="booking-page.html">Booking page</a>
                      </li>
                      <li>
                        <a href="confirm.html">Confirm page</a>
                      </li>
                      <li>
                        <a href="faq.html">Faq page</a>
                      </li>
                      <li>
                        <a href="coming_soon/index.html">Coming soon</a>
                      </li>
                      <li>
                        <a href="pricing-tables.html">
                          Responsive pricing tables
                        </a>
                      </li>
                      <li>
                        <a href="pricing-tables-2.html">
                          Responsive pricing tables 2
                        </a>
                      </li>
                      <li>
                        <a href="register-doctor-working.html">
                          Working doctor register
                        </a>
                      </li>
                      <li>
                        <a href="icon-pack-1.html">Icon pack 1</a>
                      </li>
                      <li>
                        <a href="icon-pack-2.html">Icon pack 2</a>
                      </li>
                      <li>
                        <a href="icon-pack-3.html">Icon pack 3</a>
                      </li>
                      <li>
                        <a href="404.html">404 page</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
