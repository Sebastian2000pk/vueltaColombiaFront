import React from "react";

// Components
import Item from "../../components/item/Item";

const CiclistsPage = () => {
  const ciclists = [1, 2, 3, 4, 5];

  return (
    <div className="ciclists-page">
      {ciclists.map((ciclist) => (
        <Item>
          <div>test</div>
        </Item>
      ))}
    </div>
  );
};

export default CiclistsPage;
