import { useState, useEffect } from "react";

export function useApiKey() {
  const [apiKey, setApiKey] = useState<string | null>(null);

  useEffect(() => {
    const storedApiKey = sessionStorage.getItem("weatherApiKey");
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);

  const saveApiKey = (key: string) => {
    sessionStorage.setItem("weatherApiKey", key);
    setApiKey(key);
  };

  return { apiKey, saveApiKey };
}
