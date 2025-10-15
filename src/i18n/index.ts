export type Locale = "en" | "zh-CN";

export type { TranslationKey } from "./translations/en";
export { I18nProvider, T } from "./context";
export { useI18n } from "./logic";
