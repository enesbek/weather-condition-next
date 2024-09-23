"use client";
import { useState, useEffect } from "react";
import ApiKeyInput from "@/components/ApiKeyInput";

export default function Home() {
  const [apiKey, setApiKey] = useState<string | null>(null);

  useEffect(() => {
    const storedApiKey = localStorage.getItem("weatherApiKey");
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);

  const handleApiKeySubmit = (key: string) => {
    localStorage.setItem("weatherApiKey", key);
    setApiKey(key);
  };

  if (!apiKey) {
    return (
      <div className="container mx-auto p-4 text-black max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-white">Weather App</h1>
        <ApiKeyInput onApiKeySubmit={handleApiKeySubmit} />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Weather App</h1>
    </div>
  );
}
