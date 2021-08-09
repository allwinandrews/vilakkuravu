import React from "react";

import SectionNameCard from "../../Cards/SectionNameCard";

import MiscImage1 from "../../../../assets/images/misc/appstore.png";
import MiscImage2 from "../../../../assets/images/misc/appstore.png";

export default function DownloadAppSection() {
  return (
    <SectionNameCard padding="padding-y bg">
      <div className="row">
        <div className="col-md-6">
          <h3>Download app demo text</h3>
          <p>Get an amazing app to make Your life easy</p>
        </div>
        <div className="col-md-6 text-md-right">
          <a>
            <img src={MiscImage1} alt="" height="40" />
          </a>
          <a>
            <img src={MiscImage2} alt="" height="40" />
          </a>
        </div>
      </div>
    </SectionNameCard>
  );
}
