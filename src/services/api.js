import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACK_END_URL;

function GetOrdersWithPagination(page) {
  return axios.get(`${BASE_URL}/orders/pagination/?page=${page}&pageSize=${10}`);
}

const api = {
  GetOrdersWithPagination,
};

export default api;
