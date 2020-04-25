import React from "react";

import './styles/styles.css'
import Header from "./Header";
import CovidData from "./CovidData";
import News from "./News";
import Footer from "./Footer";

function AppContainer(props) {
  return (
    <div className="divikryesor">
      <Header
        isNewsClicked={props.isNewsClicked}
        handleNews={props.handleNews}
      />
      <CovidData 
      data={props.data} isLoading={props.isLoading} />
      {props.isNewsClicked && <News />}
      <div className="Home"></div>
      <News />
      <Footer />
    </div>
  );
}

export default AppContainer;
