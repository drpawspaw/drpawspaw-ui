import axios from "axios";
import {
  ACCESS_TOKEN,
  API_BASE_URL,
  HTTP_POST,
  REFRESH_TOKEN,
} from "../constants";
import jwt_decode from "jwt-decode";

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

// var axios = require('axios');

// var config = {
//   method: 'get',
//   maxBodyLength: Infinity,
//   url: 'https://api.drpawspaw.com/api/v1/pets',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiQUNDRVNTX1RPS0VOIiwidXNlcm5hbWUiOiJ2aXJhamxha3NoaXRoYWJhbmRhcmFAZ21haWwuY29tIiwiZXhwaXJhdGlvbiI6IjIwMjMtMDMtMjEgMTk6NDI6MjUuNjY3NDg1In0.DmeDcWx03ZmGKGuTgq2ePpZS4GB3yUjI7wVjQvJFK6o'
//   }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

export const getToken = () => {
  // If both access and refresh tokens available
  const rftoken = localStorage.getItem(REFRESH_TOKEN);
  const actoken = localStorage.getItem(ACCESS_TOKEN);

  if (rftoken && actoken) {
    return actoken;
  }
  return ""; // Return empty string, if token not found
};

export const postChat = (message) => {
  console.log(message);
  return wrapper(
    HTTP_POST,
    "chats",
    JSON.stringify({
      message: message,
      session: `drpawspaw_${new Date().valueOf()}`,
    })
  );
};
