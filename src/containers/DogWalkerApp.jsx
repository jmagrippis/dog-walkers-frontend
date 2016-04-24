import React, { Component } from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

import Locator from "../components/Locator"
import { defaultTheme } from "../constants/Themes"

class DogWalkerApp extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={defaultTheme}>
        <Locator />
      </MuiThemeProvider>
    )
  }
}

export default DogWalkerApp
