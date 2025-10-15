import { useContext } from "react";
import type { Locale } from "./index";
import { en, type TranslationKeys, type DeepPartial } from "./translations/en";
import { zhCN } from "./translations/zh-CN";
import { gameTranslationsZH, type GameTranslations } from "./translations/game";
import { I18nContext } from "./i18nContext";

const translations: Record<Locale, DeepPartial<TranslationKeys>> = {
  en: en,
  "zh-CN": zhCN,
};

const gameTranslations: Record<Locale, GameTranslations | null> = {
  en: null, // English uses the original text
  "zh-CN": gameTranslationsZH,
};

const LOCALE_STORAGE_KEY = "hk-silksong-locale";

function getNestedValue(obj: any, path: string): string | undefined {
  return path.split(".").reduce((current, key) => current?.[key], obj);
}

export function getTranslation(locale: Locale, key: string): string {
  const currentLocaleText = getNestedValue(translations[locale], key);
  if (currentLocaleText) {
    return currentLocaleText;
  }

  const englishText = getNestedValue(translations.en, key);
  return englishText ?? key;
}

export function getStoredLocale(): Locale {
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored === "en" || stored === "zh-CN") {
    return stored;
  }
  return "en";
}

export function saveLocale(locale: Locale): void {
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

/**
 * Translate game content by ID (preferred) or fallback to text
 * @param id - The unique ID of the item/category/section (e.g., 'ability_silkspear')
 * @param text - The English text as fallback (e.g., 'Silkspear')
 * @param type - The type of content: 'item', 'category', 'section', or 'description'
 * @param locale - The target locale
 * @returns Translated text, or original text if no translation found
 */
export function translateGame(
  id: string | undefined,
  text: string | undefined,
  type: 'item' | 'category' | 'section' | 'description',
  locale: Locale
): string {
  if (!text) return "";
  if (locale === "en") return text;

  const gameTranslation = gameTranslations[locale];
  if (!gameTranslation) return text;

  // Priority 1: Try ID-based translation
  if (id) {
    const translationByType = gameTranslation[type === 'item' ? 'items' : 
                                              type === 'category' ? 'categories' : 
                                              type === 'section' ? 'sections' : 'descriptions'];
    const idTranslation = translationByType[id];
    if (idTranslation) return idTranslation;
  }

  // Priority 2: Try text-based translation for backward compatibility
  const textTranslation = 
    gameTranslation.items[text] ||
    gameTranslation.categories[text] ||
    gameTranslation.sections[text] ||
    gameTranslation.descriptions[text];

  return textTranslation || text;
}

/**
 * Translate by item ID
 */
export function translateItem(id: string | undefined, name: string | undefined, locale: Locale): string {
  return translateGame(id, name, 'item', locale);
}

/**
 * Translate by category ID (with fallback to name)
 */
export function translateCategory(id: string | undefined, name: string | undefined, locale: Locale): string {
  return translateGame(id, name, 'category', locale);
}

/**
 * Translate by section ID (with fallback to name)
 */
export function translateSection(id: string | undefined, name: string | undefined, locale: Locale): string {
  return translateGame(id, name, 'section', locale);
}

/**
 * Translate description by ID (for category/section descriptions) or text (for backward compatibility)
 * @param id - The ID of the category or section (e.g., 'category_abilities', 'section_silk_skills')
 * @param text - The description text as fallback
 * @param locale - The target locale
 */
export function translateDescription(id: string | undefined, text: string | undefined, locale: Locale): string {
  return translateGame(id, text, 'description', locale);
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  // Convenience functions that use current locale from context
  const tItem = (id: string | undefined, name: string | undefined) => 
    translateItem(id, name, context.locale);
  
  const tCategory = (id: string | undefined, name: string | undefined) => 
    translateCategory(id, name, context.locale);
  
  const tSection = (id: string | undefined, name: string | undefined) => 
    translateSection(id, name, context.locale);
  
  const tDescription = (id: string | undefined, text: string | undefined) => 
    translateDescription(id, text, context.locale);

  // Legacy function for backward compatibility (text-only)
  const tGame = (text: string | undefined) => 
    translateDescription(undefined, text, context.locale);

  return {
    ...context,
    tItem,
    tCategory,
    tSection,
    tDescription,
    tGame, // Keep for backward compatibility
  };
}
