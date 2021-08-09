import React from "react";

import Header from "./Header/Header";
import MainSection from "./MainSection/MainSection";
import BottomSection from "./BottomSection/BottomSection";
import { Container } from "react-bootstrap";

export default function Layout(props) {
  return (
    <div className="App">
      <Header />
      {/* <MainSection /> */}
      {props.children}
      {/* <BottomSection /> */}
    </div>
  );
}
