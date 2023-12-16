import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "117bcd5592950f9f701a11f5ab982de0";

export const fetchWeather = createAsyncThunk(
  "weather/getWeather",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`?q=france&appid=${API_KEY}`);
      console.log(data);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
