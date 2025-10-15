import { CATEGORIES, isItemUnlockedInPlayerSave } from "../../parsers/dictionary";
import type { TabRenderProps } from "./types";
import { formatSecondsToHMS } from "./utils";
import { useI18n } from "../../i18n";

export function StatsTab({ parsedJson, decrypted }: TabRenderProps) {
  const { t } = useI18n();

  if (!decrypted || !parsedJson) {
    return <div className="text-white text-center">{t("stats.loadSavefile")}</div>;
  }

  const statsCategory = CATEGORIES.find(cat => cat.name === "Stats");
  const stats = (statsCategory && 'items' in statsCategory) ? statsCategory.items : [];

  return (
    <div className="text-white">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center">
          <table className="table-auto border-collapse divide-y divide-gray-600" style={{ minWidth: 0 }}>
            <thead>
              <tr className="text-left">
                <th className="px-2 py-1 whitespace-nowrap"></th>
                <th className="px-2 py-1 w-[100px] text-center whitespace-nowrap"></th>
              </tr>
            </thead>
            <tbody>
              {stats.map((item, index) => {
                const { returnValue } = isItemUnlockedInPlayerSave(item.parsingInfo, parsedJson);
                let displayValue = '';
                let displayName = item.name;

                // Translate stat names
                if (item.id === 'stat_playtime') {
                  displayName = t("stats.playtime");
                  if (typeof returnValue === 'number') {
                    displayValue = formatSecondsToHMS(returnValue);
                  }
                } else if (item.id === 'stat_rosaries') {
                  displayName = t("stats.rosaries");
                  if (returnValue !== undefined) {
                    displayValue = String(returnValue);
                  }
                } else if (item.id === 'stat_shell_shards') {
                  displayName = t("stats.shellShards");
                  if (returnValue !== undefined) {
                    displayValue = String(returnValue);
                  }
                } else if (item.id === 'stat_game_mode') {
                  displayName = t("stats.gameMode");
                  displayValue = returnValue === 1 ? t("stats.steelSoul") : returnValue === 0 ? t("stats.classic") : '';
                } else {
                  // Fallback for other stats
                  if (typeof returnValue === 'number') {
                    displayValue = formatSecondsToHMS(returnValue);
                  } else if (returnValue !== undefined) {
                    displayValue = String(returnValue);
                  }
                }

                return (
                  <tr key={index} className="border-b border-gray-700 last:border-b-0">
                    <td className="px-2 py-1 whitespace-nowrap">{displayName}</td>
                    <td className="px-2 py-1 w-[100px] text-center whitespace-nowrap">{displayValue}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
