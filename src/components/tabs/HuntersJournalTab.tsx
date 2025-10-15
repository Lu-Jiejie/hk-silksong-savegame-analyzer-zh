import type { TabRenderProps } from "./types";
import {
  CATEGORIES,
  isItemUnlockedInPlayerSave,
} from "../../parsers/dictionary";
import { useI18n } from "../../i18n";

const JOURNAL_CATEGORY_NAME = "Hunter's Journal";

export function HuntersJournalTab({ parsedJson, decrypted }: TabRenderProps) {
  const { tCategory, tDescription, tItem, t } = useI18n();
  if (!decrypted || !parsedJson) {
    return (
      <div className="text-white text-center">
        {t("huntersJournal.loadSavefile")}
      </div>
    );
  }

  const journalCategory = CATEGORIES.find(
    (cat) => cat.name === JOURNAL_CATEGORY_NAME
  );
  const journalEntries =
    journalCategory && "items" in journalCategory ? journalCategory.items : [];

  return (
    <div className="text-white">
      {journalCategory && (
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2 text-blue-200">
            {tCategory(journalCategory.id, journalCategory.name)}
          </h2>
          {journalCategory.description &&
            journalCategory.description.trim() &&
            journalCategory.description.trim() !== journalCategory.name && (
              <p className="text-sm text-gray-300 mb-2">
                {tDescription(journalCategory.id, journalCategory.description)}
              </p>
            )}
        </div>
      )}
      <div className="max-w-3xl mx-auto">
        <table className="w-full table-auto border-collapse divide-y divide-gray-600">
          <thead>
            <tr className="text-left">
              <th className="px-2 py-1 w-[56px]" />
              <th className="px-2 py-1 w-[56px] text-center" />
              <th className="px-2 py-1 min-w-[120px] max-w-[220px]">
                {t("huntersJournal.name")}
              </th>
              <th className="px-2 py-1  w-[130px] text-center">
                {t("huntersJournal.killsAchieved")}
              </th>
              <th className="px-2 py-1  w-[130px] text-center">
                {t("huntersJournal.killsRequired")}
              </th>
              <th className="px-2 py-1 w-[64px]" />
            </tr>
          </thead>
          <tbody>
            {journalEntries.map((item, index) => {
              const { unlocked, returnValue: killsAchieved } =
                isItemUnlockedInPlayerSave(item.parsingInfo, parsedJson);
              return (
                <tr
                  key={index}
                  className="border-b border-gray-700 last:border-b-0"
                >
                  <td className="px-2 py-1 text-center w-[56px] align-middle">
                    <span
                      className={getHuntersJournalStatusColor(
                        unlocked,
                        killsAchieved,
                        item.killsRequired
                      )}
                    >
                      {unlocked &&
                      (killsAchieved ?? 0) >= (item.killsRequired ?? 0)
                        ? "[x]"
                        : "[ ]"}
                    </span>
                  </td>
                  <td className="px-2 py-1 text-center w-[56px] align-middle">
                    <span className="text-xs text-blue-200 mt-1 font-normal" />
                  </td>
                  <td
                    className={`px-2 py-1 min-w-[120px] max-w-[220px] truncate
                    ${
                      !unlocked
                        ? "blur-sm hover:blur-none transition duration-100"
                        : ""
                    }`}
                  >
                    {tItem(item.id, item.name)}
                  </td>
                  <td className="px-2 py-1 min-w-[100px] max-w-[150px] text-center">
                    {killsAchieved}
                  </td>
                  <td className="px-2 py-1 min-w-[100px] max-w-[150px] text-center">
                    {item.killsRequired ?? "N/A"}
                  </td>
                  <td className="px-2 py-1 w-[64px] text-center">
                    <button
                      className={`flex-1 min-w-[48px] py-2 rounded font-semibold transition-colors text-xs ${
                        item.mapLink
                          ? "bg-[#24344d] text-white hover:bg-blue-600"
                          : "bg-[#24344d] text-blue-200 opacity-50 cursor-not-allowed"
                      }`}
                      onClick={() => {
                        if (item.mapLink)
                          window.open(item.mapLink, "_blank", "noopener");
                      }}
                      disabled={!item.mapLink}
                      tabIndex={item.mapLink ? 0 : -1}
                    >
                      {t("huntersJournal.map")}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function getHuntersJournalStatusColor(
  unlocked: boolean,
  killsAchieved: number | undefined,
  killsRequired: number | undefined
): string {
  if (!unlocked) {
    return "text-red-400";
  }

  if (killsAchieved !== undefined && killsRequired !== undefined) {
    return killsAchieved >= killsRequired
      ? "text-green-400"
      : "text-yellow-400";
  }

  return "";
}
