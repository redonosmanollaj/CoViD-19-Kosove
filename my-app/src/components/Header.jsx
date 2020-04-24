import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Kosovo from "./photos/kosovo.png";

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="header">
          <img src={Kosovo} alt="Kosovo flag" className="logoks" /> <br />
          <a className="nav-link active" href="/#">
            <i className="fas fa-home fa-3x"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
