import React, { Component } from "react"
import { Provider } from "react-redux"

import DogWalkerApp from "./DogWalkerApp"

export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <DogWalkerApp />
      </Provider>
    )
  }
}

Root.propTypes = { store: React.PropTypes.object }
