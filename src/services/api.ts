const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeatherData(city: string) {
  const apiKey = localStorage.getItem("weatherApiKey");
  if (!apiKey) {
    throw new Error("API key not found");
  }

  const response = await fetch(
    `${API_BASE_URL}?q=${city}&appid=${apiKey}&units=metric`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return response.json();
}
