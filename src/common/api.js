import axios from 'axios';

export const API = axios.create({
  baseURL: `https://www.amiiboapi.com/api/amiibo/`
})