import React, { Component, Fragment } from "react";
import Icon1 from "../assets/img/cuci-mobil.svg";
import Icon2 from "../assets/img/nyuci-motor.svg";
import Icon3 from "../assets/img/ganti-oli.svg";
import Icon4 from "../assets/img/ganti-ban.svg";
import Icon5 from "../assets/img/tuneup-car.svg";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <div className="hero_home version_2">
          <div className="content">
            <h3>Servis Bos!</h3>
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
                  <input
                    type="submit"
                    className="btn_search"
                    defaultValue="Search"
                  />
                </div>
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="all"
                      name="radio_search"
                      defaultValue="all"
                      defaultChecked
                    />
                    <label htmlFor="all">All</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="mechanic"
                      name="radio_search"
                      defaultValue="mechanic"
                    />
                    <label htmlFor="mechanic">Mechanic</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="workshop"
                      name="radio_search"
                      defaultValue="workshop"
                    />
                    <label htmlFor="workshop">Workshop</label>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>

        <div className="container margin_120_95">
          <div className="main_title">
            <h2>
              Discover the <strong>online</strong> appointment!
            </h2>
            <p>
              Usu habeo equidem sanctus no. Suas summo id sed, erat erant
              oporteat cu pri. In eum omnes molestie. Sed ad debet scaevola, ne
              mel.
            </p>
          </div>
          <div className="row add_bottom_30">
            <div className="col-lg-4">
              <div className="box_feat" id="icon_1">
                <span />
                <h3>Find a Mechanic</h3>
                <p>
                  Usu habeo equidem sanctus no. Suas summo id sed, erat erant
                  oporteat cu pri. In eum omnes molestie.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box_feat" id="icon_2">
                <span />
                <h3>View profile</h3>
                <p>
                  Usu habeo equidem sanctus no. Suas summo id sed, erat erant
                  oporteat cu pri. In eum omnes molestie.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box_feat" id="icon_3">
                <h3>Book a visit</h3>
                <p>
                  Usu habeo equidem sanctus no. Suas summo id sed, erat erant
                  oporteat cu pri. In eum omnes molestie.
                </p>
              </div>
            </div>
          </div>
          {/* End row */}
          <p className="text-center">
            <a href="list.html" className="btn_1 medium">
              Find Mechanic
            </a>
          </p>
        </div>
        {/* End container */}

        <div className="container margin_120_95">
          <div className="main_title">
            <h2>Find by specialization</h2>
            <p>
              Nec graeci sadipscing disputationi ne, mea ea nonumes percipitur.
              Nonumy ponderum oporteat cu mel, pro movet cetero at.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <a href="list.html" className="box_cat_home">
                <i className="icon-info-4" />
                <img src={Icon1} width={100} height={100} alt="" />
                <h3>Car Wash</h3>
                <ul className="clearfix">
                  <li>
                    <strong>124</strong>Mechanics
                  </li>
                  <li>
                    <strong>60</strong>Workshops
                  </li>
                </ul>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a href="list.html" className="box_cat_home">
                <i className="icon-info-4" />
                <img src={Icon2} width={100} height={100} alt="" />
                <h3>Motorcycle Wash</h3>
                <ul className="clearfix">
                  <li>
                    <strong>124</strong>Mechanics
                  </li>
                  <li>
                    <strong>60</strong>Workshops
                  </li>
                </ul>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a href="list.html" className="box_cat_home">
                <i className="icon-info-4" />
                <img src={Icon3} width={100} height={100} alt="" />
                <h3>Oil Change</h3>
                <ul className="clearfix">
                  <li>
                    <strong>124</strong>Mechanics
                  </li>
                  <li>
                    <strong>60</strong>Workshops
                  </li>
                </ul>
              </a>
            </div>
            <div className="col-lg-6 col-md-6">
              <a href="list.html" className="box_cat_home">
                <i className="icon-info-4" />
                <img src={Icon4} width={120} height={120} alt="" />
                <h3>Tyres Change</h3>
                <ul className="clearfix">
                  <li>
                    <strong>124</strong>Mechanics
                  </li>
                  <li>
                    <strong>60</strong>Workshops
                  </li>
                </ul>
              </a>
            </div>
            <div className="col-lg-6 col-md-6">
              <a href="list.html" className="box_cat_home">
                <i className="icon-info-4" />
                <img src={Icon5} width={120} height={120} alt="" />
                <h3>Machine Tuneup</h3>
                <ul className="clearfix">
                  <li>
                    <strong>124</strong>Mechanics
                  </li>
                  <li>
                    <strong>60</strong>Workshops
                  </li>
                </ul>
              </a>
            </div>
            {/* <div className="col-lg-3 col-md-6">
              <a href="list.html" className="box_cat_home">
                <i className="icon-info-4" />
                <img src={Icon6} width={100} height={100} alt="" />
                <h3>Dentistry</h3>
                <ul className="clearfix">
                  <li>
                    <strong>124</strong>Doctors
                  </li>
                  <li>
                    <strong>60</strong>Clinics
                  </li>
                </ul>
              </a>
            </div> */}
            {/* <div className="col-lg-3 col-md-6">
              <a href="list.html" className="box_cat_home">
                <i className="icon-info-4" />
                <img src={Icon7} width={100} height={100} alt="" />
                <h3>X - Ray</h3>
                <ul className="clearfix">
                  <li>
                    <strong>124</strong>Doctors
                  </li>
                  <li>
                    <strong>60</strong>Clinics
                  </li>
                </ul>
              </a>
            </div> */}
            {/* <div className="col-lg-3 col-md-6">
              <a href="list.html" className="box_cat_home">
                <i className="icon-info-4" />
                <img src={Icon8} width={100} height={100} alt="" />
                <h3>Piscologist</h3>
                <ul className="clearfix">
                  <li>
                    <strong>124</strong>Doctors
                  </li>
                  <li>
                    <strong>60</strong>Clinics
                  </li>
                </ul>
              </a>
            </div> */}
          </div>
        </div>
        <div id="app_section">
          <div className="container">
            <div className="row justify-content-around">
              <div className="agileinfo-subscribe-grid text-center">
                <img src="images/mail.png" alt="" />
                <h4>stay upto date with our newsletter!</h4>
                <p>Sign up to recieve info on upcoming services and more.</p>
                <form action="#" method="post">
                  <input
                    type="email"
                    placeholder="Enter your email.."
                    name="Subscribe"
                    required=""
                  />
                  <button class="btn1">sign up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Main;
