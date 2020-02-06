import axios from "axios";

let obj = axios.create({
  baseURL: "https://swapi.co/api/"
});

export default obj;
