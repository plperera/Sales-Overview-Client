import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACK_END_URL;

function GetOrders() {
  return axios.get(`${BASE_URL}/orders`);
}

const api = {
  GetOrders,
};

export default api;
