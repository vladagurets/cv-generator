import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import i18n from './i18n'
import Language from 'components/Language'
import { I18nextProvider, useTranslation, Trans } from 'react-i18next'

const Routes = props => {
  const { t } = useTranslation()
  return (
    <Router>
      <Language />
      <nav>
        <ul>
          <li>
            <Link to='/'>
              <Trans>{t('Home')}</Trans>
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <Trans>{t('Create CV')}</Trans>
            </Link>
          </li>
          <li>
            <Link to='/users'>
              <Trans>{t('Download CV')}</Trans>
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/about'>
          Home
        </Route>
        <Route path='/users'>
          Create CV
        </Route>
        <Route path='/'>
          Download CV
        </Route>
      </Switch>
    </Router>
  )
}

const App = () => (
  <I18nextProvider i18n={i18n}>
    <Routes />
  </I18nextProvider>
)

export default App
