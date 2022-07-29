import { Component, h } from 'preact'

import '@styles/theme.scss'

class ThemeLayout extends Component {
  render() {
    return (
      <div class="page">
        <div class="theme">{this.props.children}</div>
      </div>
    )
  }
}

export default ThemeLayout
