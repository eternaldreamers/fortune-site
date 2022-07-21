import { Component, h } from 'preact'
import { Route, Router } from 'preact-router'

import routesData from '@config/routes-data'

type ChildrenProps = {}

class App extends Component<ChildrenProps> {
  render() {
    return (
      <Router>
        {routesData.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            component={route.component as any}
          />
        ))}
      </Router>
    )
  }
}

export default App
