import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import beta from "./.photos/beta.png";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Stats
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Tips
            </a>
          </li>
        </ul>
        <ul class="nav navbar-nav ml-auto">
          <li>
            <img src={beta} alt="beta verion" className="beta"/>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
