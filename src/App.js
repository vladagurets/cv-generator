import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>Create CV</Link>
          </li>
          <li>
            <Link to='/users'>Download CV</Link>
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

export default App
