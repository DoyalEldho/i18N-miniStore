import i18n from "i18next"; 
import { initReactI18next } from "react-i18next";


import enProducts from './locales/en/products.json';
import frProducts from './locales/fr/products.json';
import deProducts from './locales/de/products.json';    

const resources = {
  en: { products: enProducts },
  fr: { products: frProducts },
  de: { products: deProducts }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    ns: ['products'],
    defaultNS: 'products',
    interpolation: { escapeValue: false },
    detection: { order: ['localStorage', 'navigator'], caches: ['localStorage'] }
  });

export default i18n;
