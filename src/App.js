import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'
import { Layout } from 'antd'

import MainHeader from 'components/MainHeader'
import MainContent from 'components/MainContent'
import MainFooter from 'components/MainFooter'

import { getCv, createCv } from 'utils/cvHelper'

import './App.styl'

const App = () => {
  useEffect(() => {
    !getCv() && createCv()
  }, [])
  return (
    <Router>
      <Layout>
        <Layout>
          <MainHeader />
          <MainContent />
          <MainFooter />
        </Layout>
      </Layout>
    </Router>
  )
}

const ie18nWrapper = () => (
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
)

export default ie18nWrapper
