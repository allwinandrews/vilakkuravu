import React from "react";

import BannerImage from "../../../../assets/images/2.jpg";

export default function Banner() {
  return (
    <div className="col-md-9">
      <article className="banner-wrap">
        <img src={BannerImage} alt="" className="w-100 rounded" />
      </article>
    </div>
  );
}
