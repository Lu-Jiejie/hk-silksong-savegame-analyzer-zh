import { useContext, useState, type ReactNode } from "react";
import type { TranslationKey } from "./translations/en";
import { I18nContext } from "./i18nContext";
import { getTranslation, getStoredLocale, saveLocale } from "./logic";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState(getStoredLocale);

  const setLocale = (newLocale: typeof locale) => {
    setLocaleState(newLocale);
    saveLocale(newLocale);
  };

  const t = (key: TranslationKey): string => {
    return getTranslation(locale, key);
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function T({ k }: { k: TranslationKey }) {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("T component must be used within I18nProvider");
  }
  return <>{context.t(k)}</>;
}
