import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { initReactI18next } from 'react-i18next'
import translations from './translations.json'
import LanguageDetector from 'i18next-browser-languagedetector'
import i18n from 'i18next'
import dayjs from 'dayjs'
import 'dayjs/locale/de'
import 'dayjs/locale/it'
import 'dayjs/locale/es'
import 'dayjs/locale/ja'
import 'dayjs/locale/ru'
import 'dayjs/locale/fr'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .on('languageChanged', (language) => {
    dayjs.locale(language)
  })
  .init({
    resources: translations,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={dayjs.locale()}
    >
      <App />
    </LocalizationProvider>
  </React.StrictMode>,
)
