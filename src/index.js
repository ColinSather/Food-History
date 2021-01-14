import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './views/home'
import LayoutComponents from './views/layout-components'
import ReusableComponents from './views/reusable-components'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Home} path="/" />
        <Route exact component={LayoutComponents} path="/layout-components" />
        <Route exact component={ReusableComponents} path="/reusable-components" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
