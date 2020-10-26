import React from "react";
import Items from "./Item";
import "./Item.css";

function ItemsGroups(props) {
  const { headline, data, boxShadow } = props;
  return (
    <div>
      <div className="group-headline">{headline}</div>
      <div class="items-group" style={{ boxShadow: boxShadow }}>
        {data.map((item, index) => (
          <Items
            key={index}
            icon={item.icon}
            texttitle={item.title}
            textwrite={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemsGroups;
