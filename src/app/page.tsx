"use client";
import { useState } from "react";
import ApiKeyInput from "@/components/ApiKeyInput";
import { useApiKey } from "@/hooks/useApiKey";
import Tabs from "@/components/Tabs";
import CityList from "@/components/CityList";

export default function Home() {
  const { apiKey, saveApiKey } = useApiKey();
  const [activeTab, setActiveTab] = useState("cities");

  if (!apiKey) {
    return (
      <div className="container mx-auto p-4 text-black max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-white">Weather App</h1>
        <ApiKeyInput onApiKeySubmit={saveApiKey} />
      </div>
    );
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Weather App</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "cities" ? <CityList /> : <div>Map Component</div>}
    </main>
  );
}
