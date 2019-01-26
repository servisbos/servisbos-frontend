import React, { Component } from "react";
import "../assets/css/style.css";
import "../assets/css/menu.css";
import "../assets/css/vendors.css";
import "../assets/css/icon_fonts/css/all_icons_min.css";
import Logo from "../assets/img/logo.png";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container margin_60_35">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <p>
                <a href="index.html" title="Findoctor">
                  <img
                    src={Logo}
                    data-retina="true"
                    alt=""
                    width="163"
                    height="36"
                    className="img-fluid"
                  />
                </a>
              </p>
            </div>
            <div className="col-lg-3 col-md-4">
              <h5>About</h5>
              <ul className="links">
                <li>
                  <a href="#0">About us</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="#0">FAQ</a>
                </li>
                <li>
                  <a href="login.html">Login</a>
                </li>
                <li>
                  <a href="register.html">Register</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4">
              <h5>Useful links</h5>
              <ul className="links">
                <li>
                  <a href="#0">Doctors</a>
                </li>
                <li>
                  <a href="#0">Clinics</a>
                </li>
                <li>
                  <a href="#0">Specialization</a>
                </li>
                <li>
                  <a href="#0">Join as a Doctor</a>
                </li>
                <li>
                  <a href="#0">Download App</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4">
              <h5>Contact with Us</h5>
              <ul className="contacts">
                <li>
                  <a href="tel://61280932400">
                    <i className="icon_mobile" /> + 61 23 8093 3400
                  </a>
                </li>
                <li>
                  <a href="mailto:info@findoctor.com">
                    <i className="icon_mail_alt" /> help@findoctor.com
                  </a>
                </li>
              </ul>
              <div className="follow_us">
                <h5>Follow us</h5>
                <ul>
                  <li>
                    <a href="#0">
                      <i className="social_facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="social_twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="social_linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="social_instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <ul id="additional_links">
                <li>
                  <a href="#0">Terms and conditions</a>
                </li>
                <li>
                  <a href="#0">Privacy</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div id="copy">© 2017 Findoctor</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
