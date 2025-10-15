import type { ReactNode } from "react";
import {
  formatPercent,
  getGenericProgress,
  getHuntersJournalProgress,
} from "../tabs/utils";
import { useI18n } from "../../i18n";

interface TabProgressProps {
  parsedJson: unknown;
  decrypted: boolean;
  tabLabel: string;
  isPercentProgress?: boolean;
  isHuntersJournal?: boolean;
}

export function TabProgress({
  parsedJson,
  decrypted,
  tabLabel,
  isPercentProgress = true,
  isHuntersJournal = false,
}: TabProgressProps): ReactNode {
  const { t } = useI18n();
  if (!decrypted || !parsedJson) {
    return null;
  }

  if (isHuntersJournal) {
    const progressData = getHuntersJournalProgress({ parsedJson, decrypted });
    if (!progressData) return null;

    return (
      <div className="text-xs mt-1 font-normal">
        <span className="text-green-400 font-bold">{`${t(
          "huntersJournal.completed"
        )} ${progressData.completed} / ${progressData.total}`}</span>
        <br />
        <span className="text-yellow-400 font-bold">{`${t(
          "huntersJournal.encountered"
        )} ${progressData.encountered} / ${progressData.total}`}</span>
      </div>
    );
  }

  const progressData = getGenericProgress({
    parsedJson,
    decrypted,
    tabLabel,
    isPercentProgress,
  });
  if (!progressData) return null;

  if (progressData.type === "count") {
    return (
      <div className="text-xs text-blue-200 mt-1 font-normal">
        {`${progressData.current}/${progressData.total}`}
      </div>
    );
  } else {
    return (
      <div className="text-xs text-blue-200 mt-1 font-normal">
        {`${formatPercent(progressData.current)} / ${formatPercent(
          progressData.total
        )}`}
      </div>
    );
  }
}
