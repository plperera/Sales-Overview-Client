import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACK_END_URL;

function GetOrdersWithPagination({page, sellerId, country}) {
  console.log(typeof country)
  const sellerIdFilter = sellerId ? (`&sellerId=${sellerId}`):("")
  const countryFilter = country ? (`&country=${country}`):("")
  return axios.get(`${BASE_URL}/orders/pagination?page=${page}&pageSize=${10}${sellerIdFilter}${countryFilter}`);
}

const api = {
  GetOrdersWithPagination,
};

export default api;
