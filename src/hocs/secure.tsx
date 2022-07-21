import { Component, FunctionalComponent, h } from 'preact'

import AdminLayout from '@layouts/admin'

export default (Page: FunctionalComponent) =>
  class SecureHoc extends Component {
    render() {
      return (
        <AdminLayout>
          <Page {...this.props} />
        </AdminLayout>
      )
    }
  }
