import React, { Component, Fragment } from "react";
import "../assets/css/style.css";
import "../assets/css/menu.css";
import "../assets/css/vendors.css";
import "../assets/css/icon_fonts/css/all_icons_min.css";
import "../assets/css/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Content extends Component {
  render() {
    return (
      <Fragment>
        <div className="hero_home version_1">
          <div className="content">
            <h3>Click to Booking Our Services</h3>
            <p>
              Ridiculus sociosqu cursus neque cursus curae ante scelerisque
              vehicula.
            </p>
            <form method="post" action="list.html">
              <div id="custom-search-input">
                <div className="input-group">
                  <input
                    type="text"
                    className=" search-query"
                    placeholder="Ex. Name, Specialization ...."
                  />
                  <input type="submit" className="btn_search" value="Search" />
                </div>
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="all"
                      name="radio_search"
                      value="all"
                    />
                    <label htmlFor="all">All</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="mechanic"
                      name="radio_search"
                      value="Mechanic"
                    />
                    <label htmlFor="mechanic">Doctor</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="workshop"
                      name="radio_search"
                      value="workshop"
                    />
                    <label htmlFor="workshop">Clinic</label>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
        <div className="container margin_120_95">
          <div className="main_title">
            <h2>Find your doctor or clinic</h2>
            <p>
              Nec graeci sadipscing disputationi ne, mea ea nonumes percipitur.
              Nonumy ponderum oporteat cu mel, pro movet cetero at.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div className="list_home">
                <div className="list_title">
                  <i className="icon_pin_alt" />
                  <h3>Search by City or Zone</h3>
                </div>
                <ul>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Albany
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Albuquerque
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Atlanta
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Baltimore
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Baton Rouge
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Birmingham
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Boston
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Buffalo
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Charleston
                    </a>
                  </li>
                  <li>
                    <a href="#0">More...</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div className="list_home">
                <div className="list_title">
                  <i className="icon_archive_alt" />
                  <h3>Search by type</h3>
                </div>
                <ul>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Allergist
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Cardiologist
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Chiropractor
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Dentist
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Dermatologist
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Gastroenterologist
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Ophthalmologist
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Optometrist
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <strong>23</strong>Pediatrician
                    </a>
                  </li>
                  <li>
                    <a href="#0">More....</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Content;
