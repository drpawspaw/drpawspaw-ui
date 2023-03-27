import axios from "axios";
import {
  ACCESS_TOKEN,
  API_BASE_URL,
  HTTP_GET,
  HTTP_POST,
  REFRESH_TOKEN,
} from "../constants";
import jwt_decode from "jwt-decode";

export const getEmailFromAccessToken = (token) => {
  const decodedHeader = jwt_decode(token);
  return decodedHeader?.username ?? ""
}

export const wrapper = (method, suffix, data) => {
  const token = getToken();
  console.log("token", token);

  const defaultHeaders = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  return axios({
    method: method,
    url: API_BASE_URL + suffix,
    data: data,
    headers: defaultHeaders,
  });
};

export const getToken = () => {
  const rftoken = localStorage.getItem(REFRESH_TOKEN);
  const actoken = localStorage.getItem(ACCESS_TOKEN);

  if (rftoken && actoken) {
    return actoken;
  }
  return "";
};

export const postChat = (message) => {
  return wrapper(
    HTTP_POST,
    "chats",
    JSON.stringify({
      message: message,
      session: `drpawspaw_${new Date().valueOf()}`,
    })
  );
};

export const getProfile = (email) => {
  return wrapper(
    HTTP_GET,
    `users/?email=${email}`
  )
}

export const getPetsByOwnerId = (id) => {
  return wrapper(
    HTTP_GET,
    `pets/?owner=${id}`
  )
}

export const getUpComingVaccineByOwnerId = (id) => {
  return wrapper(
    HTTP_GET,
    `vaccines/?owner=${id}`
  )
}

export const getVaccines = () => {
  return wrapper(
    HTTP_GET,
    `static/vaccines`
  )
}

export const createPetProfile = (data) => {
  return wrapper(
    HTTP_POST,
    "pets",
    JSON.stringify(data)
  )
}