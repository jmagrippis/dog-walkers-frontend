import React, { Component } from "react"
import { Provider } from "react-redux"

import DogWalkerApp from "./DogWalkerApp"
import DevTools from "./DevTools"

export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div>
          <DogWalkerApp />
          <DevTools />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = { store: React.PropTypes.object }
