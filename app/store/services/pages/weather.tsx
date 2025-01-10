import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchWeather } from '../services/weather';
import { startLoading, setWeatherData, setError } from '../store/weatherSlice';

const Weather = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    const getWeather = async () => {
      dispatch(startLoading());
      try {
        const weatherData = await fetchWeather('New York');
        dispatch(setWeatherData(weatherData));
      } catch (err) {
        dispatch(setError('Failed to fetch weather data'));
      }
    };

    getWeather();
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <div>{JSON.stringify(data)}</div>;
};

export default Weather;