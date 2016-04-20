import React from "react"
import { render } from "react-dom"
import { AppContainer } from "react-hot-loader"
import injectTapEventPlugin from "react-tap-event-plugin"
import "./../node_modules/normalize.css/normalize.css"

import configureStore from "./store/configureStore"
import Root from "./containers/Root"

const store = configureStore()

injectTapEventPlugin()

render(
  <AppContainer
    component={Root}
    props={{ store }}
  />,
  document.getElementById("app")
)

if (module.hot) {
  module.hot.accept("./containers/Root", () => {
    render(
      <AppContainer
        component={require("./containers/Root").default}
        props={{ store }}
      />,
      document.getElementById("root")
    )
  })
}
