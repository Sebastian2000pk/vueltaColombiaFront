import axios from "axios";

export function getTeam() {
  return axios.get(process.env.REACT_APP_API + "team");
}

export function setTeam(team) {
  return axios.post(process.env.REACT_APP_API + "team", team  );
}

export function updateTeam(team) {
  return axios.put(process.env.REACT_APP_API + "team", team  );
}
