import React from "react";
import Map from "../images/map.jpg"
function Location() {
  return (
    <>
      <div className="w3-container">
        <img
          src={Map}
          className="w3-image"
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
}

export default Location;
