import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./public/static/locales/en.json";
import ru from "./public/static/locales/ru.json";
import ro from "./public/static/locales/ro.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
    ro: {
      translation: ro,
    },
  },
  lng: "ru",
  fallbackLng: "en",
});

export default i18n;
