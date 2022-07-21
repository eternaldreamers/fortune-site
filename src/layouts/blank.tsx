import { Component, h } from 'preact'

class BlankLayout extends Component {
  render() {
    return (
      <div class="page">
        <h3>blank layout</h3>
        <div class="blank">{this.props.children}</div>
      </div>
    )
  }
}

export default BlankLayout
