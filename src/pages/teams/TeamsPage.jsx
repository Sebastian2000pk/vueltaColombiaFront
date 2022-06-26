import React, { useState, useEffect } from "react";
import "./teamsPage.css";

// Components
import Item from "../../components/item/Item";
import Modal from "../../components/modal/Modal";

// Utils
import { getTeam, setTeam, updateTeam } from "../../utils/teamsService";

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);
  const [teamSeleted, setTeamSeleted] = useState({});
  const [isModal, setIsModal] = useState(false);

  const handleClickModal = (team) => {
    setTeamSeleted({ ...team, isEditing: true });
    setIsModal(true);
  };

  const getTeamsList = () => {
    getTeam()
      .then((res) => {
        const { data } = res.data;
        setTeams(data);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    const newData = { ...teamSeleted, [name]: value };
    setTeamSeleted(newData);
  };

  const handleCloseModal = () => {
    setIsModal(false);
    setTeamSeleted({});
  };

  const handleSaveModal = () => {
    if (!teamSeleted.name) return;
    if (!teamSeleted.country) return;
    if (!teamSeleted.director) return;
    if (!teamSeleted.sponsor_bike) return;
    if (!teamSeleted.sponsor_computer) return;
    if (!teamSeleted.address) return;
    if (!teamSeleted.phone) return;
    if (!teamSeleted.email) return;
    setIsModal(false);
    if (teamSeleted.team_number) {
      updateTeam(teamSeleted)
        .then((res) => {
          getTeamsList();
        })
        .catch((error) => console.log(error));
    } else {
      setTeam(teamSeleted)
        .then((res) => {
          getTeamsList();
        })
        .catch((error) => console.log(error));
    }
    setTeamSeleted({});
  };

  const newTeam = () => {
    setTeamSeleted({
      name: "",
      country: "",
      director: "",
      sponsor_bike: "",
      sponsor_computer: "",
      address: "",
      phone: "",
      email: "",
    });
    setIsModal(true);
  };

  useEffect(() => {
    getTeamsList();
  }, []);

  return (
    <div className="teams-page">
      <div className="container-new-button">
        <button onClick={newTeam} className="new-button">
          Agregar equipo
        </button>
      </div>
      <div className="list-teams">
        {teams.map((team, key) => (
          <Item handleClick={() => handleClickModal(team)} key={key}>
            <div>{team.name}</div>
          </Item>
        ))}
      </div>
      {isModal && (
        <Modal handleClose={handleCloseModal} handleSave={handleSaveModal}>
          <div className="container-input">
            <label htmlFor="name">Nombre: </label>
            <input
              id="name"
              name="name"
              type="text"
              value={teamSeleted.name}
              disabled={teamSeleted.isEditing}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="container-input">
            <label htmlFor="name">Pais: </label>
            <input
              id="country"
              name="country"
              type="text"
              value={teamSeleted.country}
              disabled={teamSeleted.isEditing}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="container-input">
            <label htmlFor="director">Director: </label>
            <input
              id="director"
              name="director"
              type="text"
              value={teamSeleted.director}
              disabled={teamSeleted.isEditing}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="container-input">
            <label htmlFor="sponsor_bike">Marca Bicicleta: </label>
            <input
              id="sponsor_bike"
              name="sponsor_bike"
              type="text"
              value={teamSeleted.sponsor_bike}
              disabled={teamSeleted.isEditing}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="container-input">
            <label htmlFor="sponsor_computer">Marca Computadora: </label>
            <input
              id="sponsor_computer"
              name="sponsor_computer"
              type="text"
              value={teamSeleted.sponsor_computer}
              disabled={teamSeleted.isEditing}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="container-input">
            <label htmlFor="address">Direccion: </label>
            <input
              id="address"
              name="address"
              type="text"
              value={teamSeleted.address}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="container-input">
            <label htmlFor="phone">Telefono: </label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={teamSeleted.phone}
              disabled={teamSeleted.isEditing}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="container-input">
            <label htmlFor="email">Correo: </label>
            <input
              id="email"
              name="email"
              type="text"
              value={teamSeleted.email}
              disabled={teamSeleted.isEditing}
              onChange={handleChange}
              className="input"
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default TeamsPage;
