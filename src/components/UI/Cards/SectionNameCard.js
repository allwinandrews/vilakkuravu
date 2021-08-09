import React from "react";

export default function SectionNameCard(props) {
  return (
    <section className={`section-name ${props.padding}`}>
      <div className="container">{props.children}</div>
    </section>
  );
}
