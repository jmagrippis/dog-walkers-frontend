import React, { Component } from "react"
import { StyleSheet, css } from "aphrodite"
import { lightGreen500, lightGreen700, orange500 } from "material-ui/styles/colors"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import getMuiTheme from "material-ui/styles/getMuiTheme"

import { FiltersContainer } from "./../components/Filters"
import Map from "./../components/Map"

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex"
  },
  halfWidth: {
    width: "50%"
  }
})

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightGreen500,
    primary2Color: lightGreen700,
    accent1Color: orange500,
    pickerHeaderColor: lightGreen500
  }
})

class DogWalkerApp extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className={css(styles.flexContainer)}>
          <div className={css(styles.halfWidth)}>
            <FiltersContainer />
          </div>
          <div className={css(styles.halfWidth)}>
            <Map />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default DogWalkerApp
