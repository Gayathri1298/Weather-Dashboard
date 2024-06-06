import axios from 'axios';

const API_KEY = 'bbeb9694de794d83a2e124248240406';  

export const fetchWeatherData = async (location) => {
  try {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
