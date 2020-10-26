import React from "react";
import "./Item.css";

function Items(props) {
  const { icon, texttitle, textwrite } = props;
  return (
    <div className="item">
      <div className="item-icon">
        <img src={icon} />
      </div>
      <div class="text">
        <div className="title">{texttitle}</div>
        <div className="description">{textwrite}</div>
      </div>
    </div>
  );
}

export default Items;
