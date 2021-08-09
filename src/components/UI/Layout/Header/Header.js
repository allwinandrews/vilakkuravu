import React from "react";

import Navigation from "./Navigation";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <header className="section-header">
      <TopBar />
      <Navigation />
    </header>
  );
}
