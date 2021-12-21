import { createContext, useCallback, useContext, useState } from 'react';

import { languages } from './languages';

import translations from './translations.json';

const browserLang = navigator.language.split('-')[0];

const isSupported = Object.values(languages).includes(browserLang);

const TranslationContext = createContext(
  isSupported ? browserLang : languages.en
);

function TranslationProvider({ children }) {
  const [currentLang, setLang] = useState(
    isSupported ? browserLang : languages.en
  );

  const setLanguage = useCallback(
    lang => {
      setLang(lang);
    },
    [setLang]
  );

  const t = useCallback(
    key => {
      return translations[currentLang][key];
    },
    [currentLang]
  );

  return (
    <TranslationContext.Provider
      value={{
        setLanguage,
        t,
        lang: currentLang,
        supportedLanguages: languages,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export const useTranslations = () => {
  const context = useContext(TranslationContext);

  return context;
};

export default TranslationProvider;
