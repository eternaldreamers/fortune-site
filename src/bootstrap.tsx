import { Component, Fragment, h } from 'preact'
import { Route, Router } from 'preact-router'
import { Provider } from 'react-redux'

import routesData from '@config/routes-data'
import { store } from '@redux/store'

type ChildrenProps = {}

class App extends Component<ChildrenProps> {
  render() {
    return (
      <Provider store={store}>
        {
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
        }
      </Provider>
    )
  }
}

export default App
