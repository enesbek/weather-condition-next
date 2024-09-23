import { useState, useEffect } from "react";

export function useApiKey() {
  const [apiKey, setApiKey] = useState<string | null>(null);

  useEffect(() => {
    const storedApiKey = localStorage.getItem("weatherApiKey");
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);

  const saveApiKey = (key: string) => {
    localStorage.setItem("weatherApiKey", key);
    setApiKey(key);
  };

  const clearApiKey = () => {
    localStorage.removeItem("weatherApiKey");
    setApiKey(null);
  };

  return { apiKey, saveApiKey, clearApiKey };
}
