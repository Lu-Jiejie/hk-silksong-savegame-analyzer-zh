export const en = {
  app: {
    title: "Hollow Knight: Silksong Savegame Analyzer",
    noSavefileLoaded: "No Savefile loaded.",
    copiedToClipboard: "Copied to clipboard.",
  },
  fileUpload: {
    dragAndDrop:
      "Drag and drop a Savefile here, or click to browse and upload it...",
    fileSelected: "selected",
  },
  platforms: {
    steamWindows: "Steam (Windows)",
    steamDeck: "Steam Deck (Linux)",
    gamePass: "Game Pass (Windows)",
    macOS: "macOS",
    linux: "Linux",
    switch: "Nintendo Switch",
    steamCloudSaves: "Steam Cloud saves",
    switchNote: "Not a simple process! Requires Homebrew and JKSV",
    switchGuide: "Reddit guide",
    gamePassNote:
      "Savegame file has a really long name and doesn't have a file extension",
    steamSaveslot: "/SteamID/userX.dat (where X = 1-4, denotes the save slot)",
    linuxFolder:
      "/(a folder with random characters)/userX.dat (where X = 1-4, denotes the save slot)",
  },
  huntersJournal: {
    loadSavefile: 'Load a savefile to view "Hunter\'s Journal" data.',
    name: "Name",
    killsAchieved: "Kills Achieved",
    killsRequired: "Kills Required",
    map: "Map",
    completed: "Completed",
    encountered: "Encountered",
  },
  common: {
    name: "Name",
    details: "Details",
    act: "Act",
  },
  footer: {
    originalAuthor: "Original Author",
    i18nBy: "Localization by",
    withHelp: "With help from",
    githubRepo: "GitHub Repo",
    steamGuide: "Steam Guide",
    buyMeCoffee: "Buy me a coffee",
  },
  stats: {
    loadSavefile: 'Load a savefile to view "Stats" data.',
    playtime: "Playtime",
    rosaries: "Rosaries",
    shellShards: "Shell Shards",
    gameMode: "Game Mode",
    classic: "Classic",
    steelSoul: "Steel Soul",
  },
} as const;

export type TranslationKeys = typeof en;

// 获取所有可能的翻译键路径（用于类型提示）
type PathsToStringProps<T, P extends string = ""> = T extends string
  ? P
  : {
      [K in keyof T]: PathsToStringProps<
        T[K],
        `${P}${P extends "" ? "" : "."}${K & string}`
      >;
    }[keyof T];

export type TranslationKey = PathsToStringProps<TranslationKeys>;

// 深度部分类型 - 允许每个层级都是可选的，值可以是任意 string
type DeepPartialValue<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartialValue<T[P]> : string;
};

export type DeepPartial<T> = DeepPartialValue<T>;
