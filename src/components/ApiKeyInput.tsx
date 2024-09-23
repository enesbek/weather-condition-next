import { useState } from "react";
import { ERROR_MESSAGES } from "@/constants/constants";

interface ApiKeyInputProps {
  onApiKeySubmit: (apiKey: string) => void;
}

export default function ApiKeyInput({ onApiKeySubmit }: ApiKeyInputProps) {
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState("");

  const validateApiKey = (key: string) => {
    const apiKeyRegex = /^[a-f0-9]{32}$/i;
    return apiKeyRegex.test(key);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateApiKey(apiKey)) {
      onApiKeySubmit(apiKey);
      setError("");
    } else {
      setError(ERROR_MESSAGES.INVALID_API_KEY);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="OpenWeatherMap API Key"
          className="w-full p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
      </div>
      <button
        type="submit"
        className="w-full p-3 bg-primary text-white-text rounded-md hover:bg-opacity-90 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}
