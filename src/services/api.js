import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACK_END_URL;

function GetOrdersWithPagination({page, sellerId, country, orderBy}) {
  const sellerIdFilter = sellerId ? (`&sellerId=${sellerId}`):("")
  const countryFilter = country ? (`&country=${country}`):("")
  const orderByParam = orderBy ? (`&orderBy=${orderBy}`):("")
  return axios.get(`${BASE_URL}/orders/pagination?page=${page}&pageSize=${6}${sellerIdFilter}${countryFilter}${orderByParam}`);
}

function GetTopSellers() {
  return axios.get(`${BASE_URL}/sellers/top`);
}

function GetSellers() {
  return axios.get(`${BASE_URL}/sellers/all`);
}

function GetSellerById(sellerId) {
  return axios.get(`${BASE_URL}/sellers/unique/${sellerId}`);
}

const api = {
  GetOrdersWithPagination,
  GetTopSellers,
  GetSellers,
  GetSellerById
};

export default api;
