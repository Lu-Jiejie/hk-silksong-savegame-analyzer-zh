import { createContext } from "react";
import type { Locale } from "./index";
import type { TranslationKey } from "./translations/en";

export interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined);
