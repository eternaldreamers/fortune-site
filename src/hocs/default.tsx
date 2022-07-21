import { Component, FunctionalComponent, h } from 'preact'

import BlankLayout from '@layouts/blank'
import ThemeLayout from '@layouts/theme'

export enum layoutType {
  BLANK,
  THEME,
}

const layoutProps = {
  [layoutType.BLANK]: BlankLayout,
  [layoutType.THEME]: ThemeLayout,
}

export default (
  Page: FunctionalComponent,
  layout: layoutType = layoutType.THEME
) => {
  const Layout = layoutProps[layout]
  return class DefaultHoc extends Component {
    render() {
      return (
        <Layout>
          <Page {...this.props} />
        </Layout>
      )
    }
  }
}
