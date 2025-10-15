import type { TabDefinition, TabId } from "../tabs/types";
import { useI18n } from "../../i18n";
import { CATEGORIES } from "../../parsers/dictionary";

interface TabBarProps {
  tabs: TabDefinition[];
  activeTab: TabId;
  onSelect: (tab: TabId) => void;
  parsedJson: unknown;
  decrypted: boolean;
}

export function TabBar({
  tabs,
  activeTab,
  onSelect,
  parsedJson,
  decrypted,
}: TabBarProps) {
  return (
    <div className="flex justify-between mt-4 mb-2 flex-wrap gap-2">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        const progress =
          decrypted && parsedJson
            ? tab.getProgress?.({ parsedJson, decrypted })
            : null;
        return (
          <TabButton
            key={tab.id}
            tab={tab}
            isActive={isActive}
            disabled={!decrypted}
            onSelect={onSelect}
            progress={progress}
          />
        );
      })}
    </div>
  );
}

interface TabButtonProps {
  tab: TabDefinition;
  isActive: boolean;
  disabled: boolean;
  onSelect: (tab: TabId) => void;
  progress: React.ReactNode;
}

function TabButton({
  tab,
  isActive,
  disabled,
  onSelect,
  progress,
}: TabButtonProps) {
  const { tCategory } = useI18n();

  // 动态查找对应的 category，获取其 ID 用于翻译
  const category = CATEGORIES.find((cat) => cat.name === tab.tabLabel);
  const translatedLabel = category
    ? tCategory(category.id, tab.tabLabel)
    : tab.tabLabel; // 没有对应 category 的 tab（如 Save Editor）直接显示原文

  return (
    <button
      onClick={() => onSelect(tab.id)}
      disabled={disabled}
      className={`flex-1 min-w-[120px] py-2 rounded font-semibold transition-colors ${
        isActive ? "bg-blue-700 text-white" : "bg-[#24344d] text-blue-200"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
    >
      <div className="flex flex-col items-center">
        <span>{translatedLabel}</span>
        {progress}
      </div>
    </button>
  );
}
