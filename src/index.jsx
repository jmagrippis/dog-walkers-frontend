import React from "react"
import { render } from "react-dom"
import { AppContainer } from "react-hot-loader"
import injectTapEventPlugin from "react-tap-event-plugin"
import {Map} from "immutable"
import "./../node_modules/normalize.css/normalize.css"

import configureStore from "./store/configureStore"
import Root from "./containers/Root"

const store = configureStore()

store.dispatch({
  type: "SET_FILTERS",
  filters: Map({
    postCode: undefined,
    availability: Map({
      fromDate: undefined,
      fromTime: undefined,
      toDate: undefined,
      toTime: undefined
    }),
    experience: undefined
  })
})

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
