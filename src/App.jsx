import React from 'react'
import LeapCalculator from './components/LeapCalculator'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()
  return (
    <div className="App">
      <Helmet htmlAttributes={{ lang: i18n.resolvedLanguage }}>
        <meta name={'description'} content={t('description')} />
        <title>{t('title')}</title>
      </Helmet>
      <LeapCalculator />
    </div>
  )
}

export default App
