export enum TabNames {
  Cities = "cities",
  Map = "map",
}

interface TabsProps {
  activeTab: TabNames;
  setActiveTab: (tab: TabNames) => void;
}

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="flex mb-4">
      <button
        className={`mr-2 px-4 py-2 rounded ${
          activeTab === TabNames.Cities ? "text-primary" : "text-white-text"
        }`}
        onClick={() => setActiveTab(TabNames.Cities)}
      >
        Cities
      </button>
      <button
        className={`px-4 py-2 rounded ${
          activeTab === TabNames.Map ? "text-primary" : "text-white-text"
        }`}
        onClick={() => setActiveTab(TabNames.Map)}
      >
        Map
      </button>
    </div>
  );
}
