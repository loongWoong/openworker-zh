import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

import { en, type Translations } from "./locales/en";
import { zh } from "./locales/zh";

export type { Translations } from "./locales/en";

export type Language = "en" | "zh";

const TRANSLATIONS: Record<Language, Translations> = { en, zh };

const STORAGE_KEY = "ocw:language";

function detectLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "zh" || stored === "en") return stored;
  } catch {}
  // Check browser language
  const nav = navigator.language?.toLowerCase() || "";
  if (nav.startsWith("zh")) return "zh";
  return "en";
}

interface I18nContextType {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  t: en,
  setLang: () => {},
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(detectLanguage);

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  }, []);

  return (
    <I18nContext.Provider value={{ lang, t: TRANSLATIONS[lang], setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextType {
  return useContext(I18nContext);
}

export function useT(): Translations {
  return useContext(I18nContext).t;
}
