const i18n = require('i18next');
const { initReactI18next } = require('react-i18next');
let LanguageDetector = require('i18next-browser-languagedetector');
LanguageDetector = LanguageDetector.default || LanguageDetector;

const { enTranslationKeys, ptTranslationKeys } = require('./translations');

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { pages: enTranslationKeys.pages },
      pt: { pages: ptTranslationKeys.pages },
    },
    fallbackLng: 'en',
    ns: ['pages'],
    defaultNS: 'pages',
    keySeparator: '.',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'lang',
    },
    react: {
      useSuspense: true,
    },
    interpolation: {
      escapeValue: false,
    },
  });

module.exports = i18n;
