import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { enTranslationKeys, ptTranslationKeys } from './translations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { pages: enTranslationKeys.pages },
      pt: { pages: ptTranslationKeys.pages },
    },
    lng: 'en',
    fallbackLng: 'en',
    ns: ['pages'],
    defaultNS: 'pages',
    keySeparator: '.',
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    initImmediate: false,
  });

export default i18n;
