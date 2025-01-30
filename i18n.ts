import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Menghubungkan i18next dengan React
  .init({
    lng: 'id', // bahasa default
    fallbackLng: 'id', // fallback jika bahasa yang dipilih tidak ditemukan
    resources: {
      id: {
        translation: {
          // terjemahan untuk bahasa Indonesia
        },
      },
      en: {
        translation: {
          // terjemahan untuk bahasa Inggris
        },
      },
    },
  });

export default i18n;
