import React, { useState, useEffect } from "react";
import "./ciclistsPage.css";

// Utils
import {
  getCiclist,
  setCiclist,
  updateCyclist,
} from "../../utils/ciclistsService";
import { getTeam } from "../../utils/teamsService";

// Components
import Item from "../../components/item/Item";
import Modal from "../../components/modal/Modal";

const CiclistsPage = () => {
  const [isModal, setIsModal] = useState(false);
  const [ciclistSelected, setCiclistSelected] = useState({});
  const [teams, setTeams] = useState([]);
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

  const getCiclistList = () => {
    getCiclist()
      .then((res) => {
        const { data } = res.data;
        setCiclists(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCiclistList();
    getTeam()
      .then((res) => {
        const { data } = res.data;
        setTeams(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSaveModal = () => {
    if (!ciclistSelected.name) return;
    if (!ciclistSelected.lastname) return;
    if (!ciclistSelected.dni) return;
    if (!ciclistSelected.date) return;
    if (!ciclistSelected.country) return;
    if (!ciclistSelected.team) return;
    setIsModal(false);
    if (ciclistSelected.id) {
      updateCyclist(ciclistSelected)
        .then((res) => {
          getCiclistList();
        })
        .catch((error) => console.log(error));
    } else {
      setCiclist(ciclistSelected)
        .then((res) => {
          getCiclistList();
        })
        .catch((error) => console.log(error));
    }
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
      <div className="container-new-button">
        <button onClick={newCiclist} className="new-button">
          Agregar ciclista
        </button>
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
          <div className="container-input">
            <label htmlFor="name" className="label-input">
              Nombre:{" "}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={ciclistSelected.name}
              disabled={ciclistSelected.isEditing}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="container-input">
            <label htmlFor="lastname" className="label-input">
              Apellido:{" "}
            </label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              value={ciclistSelected.lastname}
              disabled={ciclistSelected.isEditing}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="container-input">
            <label htmlFor="dni" className="label-input">
              ID/DNI:{" "}
            </label>
            <input
              id="dni"
              name="dni"
              type="number"
              value={ciclistSelected.dni}
              disabled={ciclistSelected.isEditing}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="container-input">
            <label htmlFor="date" className="label-input">
              Fecha de nacimiento:{" "}
            </label>
            <input
              id="date"
              type="date"
              name="date"
              value={ciclistSelected.date}
              disabled={ciclistSelected.isEditing}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="container-input">
            <label htmlFor="country" className="label-input">
              Nacionalidad:{" "}
            </label>
            <input
              id="country"
              name="country"
              type="text"
              value={ciclistSelected.country}
              disabled={ciclistSelected.isEditing}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="container-input">
            <label htmlFor="team" className="label-input">
              Equipo:{" "}
            </label>
            <select
              id="team"
              name="team"
              type="text"
              value={ciclistSelected.team}
              disabled={ciclistSelected.isEditing}
              className="input"
              onChange={handleChange}>
              {teams.map((team, key) => (
                <option key={key} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
          <div className="container-input">
            <label htmlFor="photo" className="label-input">
              Foto:{" "}
            </label>

            <input
              id="photo"
              type="file"
              onChange={handleChange}
              disabled={ciclistSelected.isEditing}
              className="input"
            />
          </div>
          <div className="container-input">
            <label htmlFor="uci" className="label-input">
              Ranking de UCI:{" "}
            </label>
            <input
              id="uci"
              name="uci"
              type="number"
              value={ciclistSelected.uci}
              onChange={handleChange}
              className="input"
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CiclistsPage;
