import { useState } from "react";
import type { ReactNode } from "react";

import HornetBackground from "./assets/HornetBackground.png";
import { FileUpload } from "./components/FileUpload";
import { TabBar } from "./components/TabBar";
import { TotalProgress } from "./components/TotalProgress";
import { useSaveFile } from "./hooks/useSaveFile";
import { tabDefinitions } from "./components/tabs";
import type { TabId } from "./components/tabs/types";
import { useI18n, type TranslationKey } from "./i18n";

type PlatformId = "SteamWindows" | "SteamDeck" | "GamePassPC" | "macOS" | "Linux" | "Switch";

type PlatformOption = {
  id: PlatformId;
  label: string;
  path: string;
  note?: ReactNode;
};

function getPlatformOptions(t: (key: TranslationKey) => string): PlatformOption[] {
  return [
    {
      id: "SteamWindows",
      label: "Steam (Windows)",
      path: "%USERPROFILE%/AppData/LocalLow/Team Cherry/Hollow Knight Silksong/",
      note: (
        <>
          {t('platforms.steamSaveslot')}{" "}
          <a
            href="https://store.steampowered.com/account/remotestorageapp/?appid=1030300"
            className="underline text-green-300 hover:text-green-200"
            target="_blank"
            rel="noreferrer"
          >
            ({t('platforms.steamCloudSaves')})
          </a>
        </>
      ),
    },
    {
      id: "SteamDeck",
      label: "Steam Deck (Linux)",
      path: "~/.local/share/Team Cherry/Hollow Knight Silksong/",
      note: (
        <>
          {t('platforms.steamSaveslot')}{" "}
          <a
            href="https://store.steampowered.com/account/remotestorageapp/?appid=1030300"
            className="underline text-green-300 hover:text-green-200"
            target="_blank"
            rel="noreferrer"
          >
            ({t('platforms.steamCloudSaves')})
          </a>
        </>
      ),
    },
    {
      id: "GamePassPC",
      label: "Game Pass (Windows)",
      path: "%LOCALAPPDATA%/Packages/TeamCherry.Silksong_y4jvztpgccj42/SystemAppData/wgs/",
      note: t('platforms.gamePassNote'),
    },
    {
      id: "macOS",
      label: "macOS",
      path: "~/Library/Application Support/unity.Team-Cherry.Silksong/",
    },
    {
      id: "Linux",
      label: "Linux",
      path: "~/.config/unity3d/Team Cherry/Hollow Knight Silksong/",
      note: t('platforms.linuxFolder'),
    },
    {
      id: "Switch",
      label: "Nintendo Switch",
      path: "sdmc:/atmosphere/contents/<title-id>/saves/hollow_knight_silksong/",
      note: (
        <>
          {t('platforms.switchNote')} (
          <a
            className="underline text-green-300 hover:text-green-200"
            href="https://www.reddit.com/r/HollowKnight/comments/1dacmy1/gamesave_from_switch_to_steam/"
            rel="noreferrer"
            target="_blank"
          >
            {t('platforms.switchGuide')}
          </a>
          )
        </>
      ),
    },
  ];
}

export default function App() {
  const { t, locale, setLocale } = useI18n();
  const {
    fileName,
    decrypted,
    jsonText,
    setJsonText,
    parsedJson,
    handleFile,
    handleDrop,
    handleDragOver,
    saveEncrypted,
    savePlain,
  } = useSaveFile();
  const [activeTab, setActiveTab] = useState<TabId>("Stats");
  const [showToast, setShowToast] = useState(false);
  const [activePlatformId, setActivePlatformId] = useState<PlatformId>("SteamWindows");

  const platformOptions = getPlatformOptions(t);
  const activePlatform =
    platformOptions.find(platform => platform.id === activePlatformId) ?? platformOptions[0];

  const handleCopyPath = () => {
    navigator.clipboard.writeText(activePlatform.path);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const activeTabConfig = tabDefinitions.find(tab => tab.id === activeTab);

  return (
    <div
      className="min-h-screen flex justify-center items-start p-4"
      style={{
        backgroundImage: `url(${HornetBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full max-w-4xl bg-[#1a1313cc] rounded-lg shadow-lg p-5 mt-0 space-y-5 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white text-center flex-1">
            {t('app.title')}
          </h1>
          <button
            type="button"
            onClick={() => setLocale(locale === 'en' ? 'zh-CN' : 'en')}
            className="px-3 py-1 text-sm font-semibold rounded border border-white/30 text-white/80 hover:border-white hover:text-white transition-colors bg-transparent"
          >
            {locale === 'en' ? '中文' : 'English'}
          </button>
        </div>

        <div className="text-center text-sm">
          <div className="flex flex-wrap justify-center gap-2 mb-3">
            {platformOptions.map(platform => {
              const isActive = platform.id === activePlatform.id;

              return (
                <button
                  key={platform.id}
                  type="button"
                  onClick={() => setActivePlatformId(platform.id)}
                  className={`px-3 py-1 text-xs font-semibold rounded border transition-colors ${
                    isActive
                      ? "bg-green-600 border-green-500 text-white"
                      : "bg-transparent border-white/30 text-white/80 hover:border-white hover:text-white"
                  }`}
                >
                  {platform.label}
                </button>
              );
            })}
          </div>

          <p className="font-bold text-white mb-4">
            <span
              className="text-green-500 hover:underline cursor-pointer"
              onClick={handleCopyPath}
            >
              {activePlatform.path}
            </span>
            <br />
            {activePlatform.note ? (
              <span className="font-light italic text-white mb-4">{activePlatform.note}</span>
            ) : null}
          </p>
        </div>

        <FileUpload
          fileName={fileName}
          onFileSelected={handleFile}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        />

        {showToast && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#454d5c] text-white px-4 py-2 rounded shadow-lg z-50">
            {t('app.copiedToClipboard')}
          </div>
        )}

        <TotalProgress parsedJson={parsedJson} />

        <TabBar
          tabs={tabDefinitions}
          activeTab={activeTab}
          onSelect={tab => setActiveTab(tab)}
          parsedJson={parsedJson}
          decrypted={decrypted}
        />

        <div className="mt-4">
          {decrypted && activeTabConfig ? (
            activeTabConfig.render({
              parsedJson,
              decrypted,
              jsonText,
              setJsonText,
              saveEncrypted,
              savePlain,
            })
          ) : (
            <div className="text-white text-center">{t('app.noSavefileLoaded')}</div>
          )}
        </div>
        <footer className="w-full mt-8 py-4  text-white text-center text-sm  ">
          {t('footer.i18nBy')}: <a href="https://github.com/Lu-Jiejie" target="_blank" className="underline">LuJiejie</a><br />
          {t('footer.originalAuthor')}: <a href="https://github.com/br3zzly" target="_blank" className="underline">Br3zzly</a><br />
          {t('footer.withHelp')}: <a href="https://github.com/theezeb" target="_blank" className="underline">theezeb</a>, <a href="https://github.com/btastic" target="_blank" className="underline">btastic</a>, <a href="https://github.com/TheSaneWriter" target="_blank" className="underline">TheSaneWriter</a>, <a href="https://github.com/saiki-k" target="_blank" className="underline">saiki-k</a><br />
          <a href="https://github.com/Lu-Jiejie/hk-silksong-savegame-analyzer" target="_blank"className="underline">{t('footer.githubRepo')}</a>
        </footer>
      </div>
    </div>
  );
}

