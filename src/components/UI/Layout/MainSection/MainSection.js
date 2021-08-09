import React from "react";

import Banner from "./Banner";
import ListMenu from "./ListMenu";

export default function MainSection() {
  return (
    <section className="section-main bg padding-y">
      <div className="container">
        <div className="row">
          <ListMenu />
          <Banner />
        </div>
      </div>
    </section>
  );
}
