import { useState } from "react";
import WeatherDisplay from "@/components/WeatherDisplay";
import { TURKISH_CITIES } from "@/constants/constants";

export default function CityList() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-3 text-white-text">
        Select a City
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {TURKISH_CITIES.map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`p-2 rounded-md transition-colors ${
              selectedCity === city
                ? "bg-primary text-white-text"
                : "bg-secondary text-white-text hover:bg-opacity-80"
            }`}
          >
            {city}
          </button>
        ))}
      </div>
      {selectedCity && (
        <div className="mt-6">
          <WeatherDisplay city={selectedCity} />
        </div>
      )}
    </div>
  );
}
