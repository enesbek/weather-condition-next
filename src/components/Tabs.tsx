interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="flex mb-4">
      <button
        className={`mr-2 px-4 py-2 rounded ${
          activeTab === "cities" ? "text-primary" : "text-white-text"
        }`}
        onClick={() => setActiveTab("cities")}
      >
        Cities
      </button>
      <button
        className={`px-4 py-2 rounded ${
          activeTab === "map" ? "text-primary" : "text-white-text"
        }`}
        onClick={() => setActiveTab("map")}
      >
        Map
      </button>
    </div>
  );
}
