import { Component, h } from 'preact'

class ThemeLayout extends Component {
  render() {
    return (
      <div class="page">
        <h3>theme layout</h3>
        <div class="theme">{this.props.children}</div>
      </div>
    )
  }
}

export default ThemeLayout
