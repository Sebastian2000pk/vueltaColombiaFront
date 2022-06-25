import axios from "axios";

export function getCiclist() {
  return axios.get(process.env.REACT_APP_API + "cyclist");
}

export function setCiclist(ciclist) {
  return axios.post(process.env.REACT_APP_API + "cyclist", ciclist  );
}

export function updateCyclist(ciclist) {
  return axios.put(process.env.REACT_APP_API + "cyclist", ciclist  );
}
