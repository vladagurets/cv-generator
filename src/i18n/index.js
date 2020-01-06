import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        Home: 'Home',
        'Create CV': 'Create CV',
        'Download CV': 'Download CV'
      }
    },
    ru: {
      translations: {
        Home: 'Дом',
        'Create CV': 'Создать резюме',
        'Download CV': 'Скачать резюме'
      }
    }
  },
  fallbackLng: 'en',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false,
    formatSeparator: ','
  },

  react: {
    wait: true
  }
})

export default i18n
