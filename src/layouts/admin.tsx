import { Component, h } from 'preact'

class AdminLayout extends Component {
  render() {
    return (
      <div class="page">
        <h3>admin layout</h3>
        <div class="admin">{this.props.children}</div>
      </div>
    )
  }
}

export default AdminLayout
