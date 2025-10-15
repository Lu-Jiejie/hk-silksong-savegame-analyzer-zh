import {
  CATEGORIES,
  isItemUnlockedInPlayerSave,
} from "../../parsers/dictionary";
import type { TabRenderProps } from "./types";
import type {
  CategoryItem,
  NormalisedTrackableCategory,
} from "../../parsers/types";
import { useI18n } from "../../i18n";

interface GenericTabProps extends TabRenderProps {
  tabLabel: string;
}

function GenericTableSection({
  section,
  sectionsLength,
  parsedJson,
}: {
  section: {
    id?: string;
    name: string | undefined;
    description: string | undefined;
    items: CategoryItem[];
  };
  sectionsLength: number;
  parsedJson: any;
}) {
  const { tSection, tDescription, tItem, t } = useI18n();

  if (section.items.length === 0) return null;

  return (
    <div className="mb-8">
      {sectionsLength > 1 && (
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2 text-blue-200">
            {tSection(section.id, section.name)}
          </h2>
          {section.description && section.description.trim() && (
            <p className="text-sm text-gray-300 mb-2">
              {tDescription(section.id, section.description)}
            </p>
          )}
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        <table className="w-full border-collapse divide-y divide-gray-600 table-fixed">
          <colgroup>
            <col style={{ width: "56px" }} />
            <col style={{ width: "56px" }} />
            <col style={{ width: "220px" }} />
            <col style={{ width: "260px" }} />
            <col style={{ width: "48px" }} />
            <col style={{ width: "64px" }} />
          </colgroup>
          <thead>
            <tr className="text-left">
              <th className="px-2 py-1" />
              <th className="px-2 py-1 text-center" />
              <th className="px-2 py-1">{t("common.name")}</th>
              <th className="px-2 py-1">{t("common.details")}</th>
              <th className="px-2 py-1">{t("common.act")}</th>
              <th className="px-2 py-1" />
            </tr>
          </thead>
          <tbody>
            {section.items.map((item, index) => {
              const { unlocked } = isItemUnlockedInPlayerSave(
                item.parsingInfo,
                parsedJson
              );
              return (
                <tr
                  key={index}
                  className="border-b border-gray-700 last:border-b-0"
                >
                  <td className="px-2 py-1 text-center align-middle">
                    <span
                      className={unlocked ? "text-green-400" : "text-red-400"}
                    >
                      {unlocked ? "[x]" : "[ ]"}
                    </span>
                  </td>
                  <td className="px-2 py-1 text-center align-middle">
                    <span className="text-xs text-blue-200 mt-1 font-normal">
                      {item.completionPercent
                        ? `+${item.completionPercent}%`
                        : ""}
                    </span>
                  </td>
                  <td className="px-2 py-1 break-words whitespace-pre-line">
                    {tItem(item.id, item.name)}
                  </td>
                  <td
                    className={`px-2 py-1 relative min-w-[140px] max-w-[260px] break-words whitespace-pre-line 
                      ${
                        !unlocked
                          ? "blur-sm hover:blur-none transition duration-100"
                          : ""
                      }`}
                  >
                    {tDescription(item.id, item.location)}
                  </td>
                  <td
                    className={`px-2 py-1 w-[48px] text-center ${
                      !unlocked
                        ? "blur-sm hover:blur-none transition duration-100"
                        : ""
                    }`}
                  >
                    {item.whichAct}
                  </td>
                  <td className="px-2 py-1 text-center">
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
                      Map
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

export function GenericTab({
  parsedJson,
  decrypted,
  tabLabel,
}: GenericTabProps) {
  const { tCategory, tDescription } = useI18n();

  if (!decrypted || !parsedJson) {
    return (
      <div className="text-white text-center">
        Load a savefile to view "{tabLabel}" data.
      </div>
    );
  }

  const categoryData = CATEGORIES.find(
    (cat) => cat.name === tabLabel
  ) as NormalisedTrackableCategory;
  if (!categoryData) {
    return (
      <div className="text-white text-center">
        Category "{tabLabel}" not found.
      </div>
    );
  }

  return (
    <div className="text-white">
      {categoryData.sections.length === 1 && (
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2 text-blue-200">
            {tCategory(categoryData.id, categoryData.name)}
          </h2>
          {categoryData.description &&
            categoryData.description.trim() &&
            categoryData.description.trim() !== categoryData.name && (
              <p className="text-sm text-gray-300 mb-2">
                {tDescription(categoryData.id, categoryData.description)}
              </p>
            )}
        </div>
      )}
      {categoryData.sections.map((section, sectionIndex) => (
        <GenericTableSection
          key={section.name || sectionIndex}
          section={section}
          sectionsLength={categoryData.sections.length}
          parsedJson={parsedJson}
        />
      ))}
    </div>
  );
}
