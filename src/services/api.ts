import axios from "axios";

export const api = axios.create({
  baseURL: "https://webcustons.onrender.com",
  timeout: 7000,
});

export const apiKenzie = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 7000,
});
