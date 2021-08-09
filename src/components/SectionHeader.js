import React from "react";

const SectionHeader = React.memo((props) => {
  return (
    <header className="section-heading">
      <a className="btn btn-outline-primary float-right">See all</a>
      <h3 className="section-title">{props.title}</h3>
    </header>
  );
});

export default SectionHeader;
