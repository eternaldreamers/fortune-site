import { FunctionalComponent, h } from 'preact'

import secureHoc from '@hocs/secure'

const AdminPage: FunctionalComponent = () => {
  return <div>admin page</div>
}

export default secureHoc(AdminPage)
