const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

interface WeatherParams {
  city?: string;
  lat?: number;
  lon?: number;
}

export async function fetchWeatherData({ city, lat, lon }: WeatherParams) {
  const apiKey = sessionStorage.getItem("weatherApiKey");

  try {
    if (!apiKey) {
      throw new Error("API key not found");
    }

    let queryParams = "";
    if (city) {
      queryParams = `q=${city}`;
    } else if (lat !== undefined && lon !== undefined) {
      queryParams = `lat=${lat}&lon=${lon}`;
    } else {
      throw new Error("Either city or lat/lon coordinates must be provided");
    }

    const response = await fetch(
      `${API_BASE_URL}?${queryParams}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch weather data. Please check the city name or your connection."
      );
    }

    return response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : "An unexpected error occurred. Please try again."
    );
  }
}
