import React, { useState } from "react";
import "./ciclistsPage.css";

// Components
import Item from "../../components/item/Item";
import Modal from "../../components/modal/Modal";

const CiclistsPage = () => {
  const [isModal, setIsModal] = useState(false);
  const [ciclistSelected, setCiclistSelected] = useState({});
  const [teams, setTeams] = useState([
    {
      id: 0,
      name: "Seleccionar equipo",
    },
    {
      id: 1,
      name: "Movistar",
    },
  ]);
  const [ciclists, setCiclists] = useState([]);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    const newData = { ...ciclistSelected, [name]: value };
    setCiclistSelected(newData);
  };

  const handleClickModal = (ciclist) => {
    setCiclistSelected({ ...ciclist, isEditing: true });
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setIsModal(false);
    setCiclistSelected({});
  };

  const handleSaveModal = () => {
    if (!ciclistSelected.name) return;
    if (!ciclistSelected.lastname) return;
    if (!ciclistSelected.dni) return;
    if (!ciclistSelected.date) return;
    if (!ciclistSelected.country) return;
    if (!ciclistSelected.team) return;
    setIsModal(false);
    setCiclists([...ciclists, ciclistSelected]);
    setCiclistSelected({});
  };

  const newCiclist = () => {
    setCiclistSelected({
      name: "",
      lastname: "",
      dni: "",
      date: "",
      team: "",
      country: "",
    });
    setIsModal(true);
  };

  return (
    <div className="ciclists-page">
      <div>
        <button onClick={newCiclist}>Agregar ciclista</button>
      </div>
      <div className="list-ciclists">
        {ciclists.map((ciclist, key) => (
          <Item handleClick={() => handleClickModal(ciclist)} key={key}>
            <div>{ciclist.name}</div>
          </Item>
        ))}
      </div>
      {isModal && (
        <Modal handleClose={handleCloseModal} handleSave={handleSaveModal}>
          <div>
            <label htmlFor="name">Nombre: </label>
            <input
              id="name"
              name="name"
              type="text"
              value={ciclistSelected.name}
              disabled={ciclistSelected.isEditing}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastname">Apellido: </label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              value={ciclistSelected.lastname}
              disabled={ciclistSelected.isEditing}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="dni">ID/DNI: </label>
            <input
              id="dni"
              name="dni"
              type="number"
              value={ciclistSelected.dni}
              disabled={ciclistSelected.isEditing}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="date">Fecha de nacimiento: </label>
            <input
              id="date"
              type="date"
              name="date"
              value={ciclistSelected.date}
              disabled={ciclistSelected.isEditing}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="country">Nacionalidad: </label>
            <input
              id="country"
              name="country"
              type="text"
              value={ciclistSelected.country}
              disabled={ciclistSelected.isEditing}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="team">Equipo: </label>
            <select
              id="team"
              name="team"
              type="text"
              value={ciclistSelected.team}
              disabled={ciclistSelected.isEditing}
              onChange={handleChange}>
              {teams.map((team, key) => (
                <option key={key} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="photo">Foto: </label>

            <input
              id="photo"
              type="file"
              onChange={handleChange}
              disabled={ciclistSelected.isEditing}
            />
          </div>
          <div>
            <label htmlFor="uci">Ranking de UCI: </label>
            <input
              id="uci"
              name="uci"
              type="number"
              value={ciclistSelected.uci}
              onChange={handleChange}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CiclistsPage;
