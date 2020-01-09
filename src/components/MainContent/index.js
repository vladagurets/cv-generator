import React from 'react'
import { Layout } from 'antd'
import { Switch, Route, Redirect } from 'react-router-dom'
import EntryPage from 'pages/EntryPage'
import CreatePage from 'pages/CreatePage'
import './index.styl'

const { Content } = Layout

const MainContent = () => (
  <Content className='MainContent'>
    <div className='MainContent-content'>
      <Switch>
        <Route exact path='/cv-generator' component={EntryPage} />
        <Route exact path='/create' component={CreatePage} />
        <Route exact path='/download'>
          Download CV
        </Route>
        {/* Fallback // redirect to entrypage */}
        <Route>
          <Redirect to='/cv-generator' />
        </Route>
      </Switch>
    </div>
  </Content>
)

export default MainContent
