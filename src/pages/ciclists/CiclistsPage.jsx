import React from "react";
import "./ciclistsPage.css";

// Components
import Item from "../../components/item/Item";

const CiclistsPage = () => {
  const ciclists = [
    { name: "ciclista 1" },
    { name: "ciclista 2" },
    { name: "ciclista 3" },
    { name: "ciclista 4" },
    { name: "ciclista 5" },
  ];

  return (
    <div className="ciclists-page">
      <div className="list-ciclists">
        {ciclists.map((ciclist) => (
          <Item>
            <div>{ciclist.name}</div>
          </Item>
        ))}
      </div>
    </div>
  );
};

export default CiclistsPage;
