import React from "react";
import "./styles/covidData.css";

function CovidData(props) {
  return (
    <div className="te-dhenat">
        <div className="row">
          <div className="col">
      <div className="data">
            <h5>Të konfirmuara</h5>
            <h4>
              {props.isLoading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                props.data.infected
              )}
              <i className="fas fa-user-plus"></i>
            </h4>
          </div>
        </div>

        <div className="col">
          <div className="data">
            <h5> Të shëruar </h5>
            <h4>
              {props.isLoading ? (
                <i className="fas fa-spinner fa-spin" />
                ) : (
                  props.data.recovered
                )}{" "}
                <i className="far fa-smile-beam" />
            </h4>
          </div>
        </div>

        <div className="col">
          <div className="data">
            <h5> Të vdekur </h5>
            <h4>
              {props.isLoading ? (
                <i className="fas fa-spinner fa-spin" />
              ) : (
                props.data.deceased
              )}
              <i
                className="fas fa-heart-broken"
              ></i>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CovidData;
