// import axios from 'axios';

// const API_KEY = 'your_openweathermap_api_key';
// const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

// export const fetchWeather = async (location: string) => {
//   const response = await axios.get(`${BASE_URL}weather?q=${location}&appid=${API_KEY}`);
//   return response.data;
// };


import axios from 'axios';

const API_KEY = 'your_openweathermap_api_key';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const fetchWeather = async (location: string) => {
  const response = await axios.get(`${BASE_URL}weather?q=${location}&appid=${API_KEY}`);
  return response.data;
};