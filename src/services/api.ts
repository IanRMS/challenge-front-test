import Axios from "axios";

const Api = Axios.create({
  baseURL: "https://corebiz-test.herokuapp.com/api/v1/",
  timeout: 10000,
});

Api.interceptors.response.use((response) => {
  return response.data;
},
(error) => {
  return Promise.reject(error);
});

export default Api;