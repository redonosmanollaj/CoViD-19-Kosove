import React from "react";
import "./styles.css";

function Footer() {
  return (
    <div className="footer">
      Feedback
      <br />
      <br />
      <div className="row">
        <div className="col">
          <i className="fas fa-envelope pr-1" />
          <h4>lirimimeri17@gmail.com</h4> 
        </div>
        <div className="col">
          <i className="fab fa-github pr-1" />
          <h4>lirimimeri</h4> 
        </div>
        <div className="col">
          <i className="fab fa-facebook"/>
          <h4>lirimimeri.1</h4>
        </div>
      </div>
      <div className="footer-copyright text-center">
        © 2020 Copyrights Reserved
      </div>
    </div>
  );
}

export default Footer;
