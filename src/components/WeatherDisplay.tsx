"use client";
import React from "react";
import { useState, useEffect } from "react";
import { fetchWeatherData } from "../services/api";

interface WeatherDisplayProps {
  city: string;
}

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: Array<{ description: string; icon: string }>;
  wind: {
    speed: number;
  };
}

export default function WeatherDisplay({ city }: WeatherDisplayProps) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getWeatherData() {
      try {
        setLoading(true);
        const data = await fetchWeatherData(city);
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch weather data");
        console.error(err);
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    }

    getWeatherData();
  }, [city]);

  if (loading)
    return <p className="text-white-text">Loading weather data...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!weatherData) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center justify-between">
        Current Weather
        {/* eslint-disable-next-line */}
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="Weather icon"
          className="w-16 h-16 mr-2"
        />
      </h3>
      <p className="text-gray-700">Temperature: {weatherData.main.temp}°C</p>
      <p className="text-gray-700">
        Feels like: {weatherData.main.feels_like}°C
      </p>
      <p className="text-gray-700">Humidity: {weatherData.main.humidity}%</p>
      <p className="text-gray-700">Wind Speed: {weatherData.wind.speed} m/s</p>
      <p className="text-gray-700 mt-2 font-semibold">
        Description: {weatherData.weather[0].description}
      </p>
    </div>
  );
}
