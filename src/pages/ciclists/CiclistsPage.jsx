import React, { useState } from "react";
import "./ciclistsPage.css";

// Components
import Item from "../../components/item/Item";
import Modal from "../../components/modal/Modal";

const CiclistsPage = () => {
  const [isModal, setIsModal] = useState(false);
  const [ciclistSelected, setCiclistSelected] = useState({});

  const ciclists = [
    { name: "ciclista 1" },
    { name: "ciclista 2" },
    { name: "ciclista 3" },
    { name: "ciclista 4" },
    { name: "ciclista 5" },
  ];

  const handleClickModal = (ciclist) => {
    setCiclistSelected({
      name: ciclist.name,
    });
    setIsModal(true);
  };

  const handleCloseModal = () => {
    console.log("closeando");
    setIsModal(false);
  };

  return (
    <div className="ciclists-page">
      <div className="list-ciclists">
        {ciclists.map((ciclist, key) => (
          <Item handleClick={() => handleClickModal(ciclist)} key={key}>
            <div>{ciclist.name}</div>
          </Item>
        ))}
      </div>
      {isModal && (
        <Modal handleClose={handleCloseModal}>{ciclistSelected.name}</Modal>
      )}
    </div>
  );
};

export default CiclistsPage;
