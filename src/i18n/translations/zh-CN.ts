import type { DeepPartial, TranslationKeys } from "./en";

export const zhCN: DeepPartial<TranslationKeys> = {
  app: {
    title: "空洞骑士：丝之歌 存档分析器",
    noSavefileLoaded: "未加载存档文件。",
    copiedToClipboard: "已复制到剪贴板。",
  },
  fileUpload: {
    dragAndDrop: "将存档文件拖放到此处，或点击浏览并上传...",
    fileSelected: "已选择",
  },
  platforms: {
    steamCloudSaves: "Steam 云存档",
    switchNote: "不是简单的操作！需要 Homebrew 和 JKSV",
    switchGuide: "Reddit 教程",
    gamePassNote: "存档文件名很长且没有扩展名",
    steamSaveslot: "/SteamID/userX.dat（其中 X = 1-4，表示存档槽位）",
    linuxFolder: "/（随机字符文件夹）/userX.dat（其中 X = 1-4，表示存档槽位）",
  },
  huntersJournal: {
    loadSavefile: '加载存档文件以查看"猎人日志"数据。',
    name: "名称",
    killsAchieved: "已击杀数量",
    killsRequired: "需要击杀数量",
    map: "地图",
    completed: "已完成",
    encountered: "已遭遇",
  },
  common: {
    name: "名称",
    details: "详情",
    act: "章节",
  },
  stats: {
    loadSavefile: '加载存档文件以查看"统计数据"。',
    playtime: "游戏时长",
    rosaries: "念珠",
    shellShards: "甲壳碎片",
    gameMode: "游戏模式",
    classic: "经典模式",
    steelSoul: "钢魂模式",
  },
  footer: {
    originalAuthor: "原作者",
    i18nBy: "汉化",
    withHelp: "帮助者",
    githubRepo: "GitHub 仓库",
    steamGuide: "Steam 指南",
    buyMeCoffee: "请我喝咖啡",
  },
};
