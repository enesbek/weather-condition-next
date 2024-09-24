"use client";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

import ApiKeyInput from "@/components/ApiKeyInput";
import { useApiKey } from "@/hooks/useApiKey";
import Tabs, { TabNames } from "@/components/Tabs";
import CityList from "@/components/CityList";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabNames>(TabNames.Cities);
  const { apiKey, saveApiKey } = useApiKey();

  useEffect(() => {
    console.log("HomePage component mounted");
  }, []);

  const Map = useMemo(
    () => dynamic(() => import("@/components/Map"), { ssr: false }),
    []
  );

  if (!apiKey) {
    return (
      <div className="container mx-auto p-4 text-black max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-white">Weather App</h1>
        <ApiKeyInput onApiKeySubmit={saveApiKey} />
      </div>
    );
  }

  return (
    <main className="container mx-auto p-4 max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Weather App</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === TabNames.Cities ? <CityList /> : <Map />}
    </main>
  );
}
