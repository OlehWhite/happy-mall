import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "/public/locales/en.json";
import uaTranslation from "/public/locales/ua.json";
import heTranslation from "/public/locales/he.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: enTranslation,
    },
    ua: {
      translation: uaTranslation,
    },
    he: {
      translation: heTranslation,
    },
  },
});

export default i18n;
