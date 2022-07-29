import { Component, Fragment, h } from 'preact'
import { Route, Router } from 'preact-router'
import { RouterGuard } from 'react-router-guard'
import { Provider } from 'react-redux'

import routesData from '@config/routes-data'
import routerConfig from '@config/routes.config'
import { store } from '@redux/store'

type ChildrenProps = {}

class App extends Component<ChildrenProps> {
  render() {
    return (
      <Provider store={store}>
        { /*
          (
            <Router>
              {routesData.map((route, idx) => (
                <Route
                  key={idx}
                  path={route.path}
                  component={route.component as any}
                />
              ))}
            </Router>
          ) as any
        */}
        {(<RouterGuard config={routerConfig} />) as any}
      </Provider>
    )
  }
}

export default App
