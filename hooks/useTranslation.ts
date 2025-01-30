import { useTranslation as originalUseTranslation } from 'react-i18next';

// Custom hook untuk terjemahan
const useTranslation = (ns: string) => {
  const { t, i18n } = originalUseTranslation(ns);

  const setLanguage = (language: string) => {
    i18n.changeLanguage(language);  // Memastikan i18n tersedia di sini
  };

  return { t, lang: i18n.language, setLanguage };
};

export default useTranslation;
