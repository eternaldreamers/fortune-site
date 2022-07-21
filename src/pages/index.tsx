import { FunctionalComponent, h } from 'preact'

import defaultHoc from '@hocs/default'

const IndexPage: FunctionalComponent = () => {
  return <div>index page</div>
}

export default defaultHoc(IndexPage)
