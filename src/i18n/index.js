import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        generate: 'generate',
        appDescription: 'generate your own modern CV in 2020',
        mainInfo: 'information',
        mainStepDesct: 'set your main information',
        photo: 'photo',
        photoStepDescr: 'upload your photo:',
        skills: 'skills',
        skillsStepDescr: 'set your skill level',

        userName: 'name',
        namePlchldr: 'enter your first and last name',
        jobTitle: 'job title',
        jobTitlePlchldr: 'e.g. software developer',
        professionalSummary: 'professional summary',
        professionalSummaryPlchlder: 'Include 2-3 clear sentences about your overall experience',
        cropImage: 'crop image',

        skillName: 'skill',
        skillNamePlchldr: 'enter skill'
      }
    },
    ru: {
      translations: {
        generate: 'создать',
        appDescription: 'создай свое совремменное резюме в 2020',
        mainInfo: 'информация',
        mainStepDesct: 'укажите вашу ключевую информацию',
        photo: 'фото',
        photoStepDescr: 'загрузите ваше фото:',
        skills: 'навыки',
        skillsStepDescr: 'укажите уровень ваших навыков',

        userName: 'имя',
        namePlchldr: 'укажите ваше имя и фамилию',
        jobTitle: 'название профессии',
        jobTitlePlchldr: 'e.g. разработчик программного обеспечения',
        professionalSummary: 'краткое описание',
        professionalSummaryPlchlder: 'включите 2-3 четких предложения о вашем общем опыте',
        cropImage: 'подготовьте фото',

        skillName: 'навык',
        skillNamePlchldr: 'введите навык'
      }
    }
  },
  fallbackLng: 'en',
  debug: false,

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
