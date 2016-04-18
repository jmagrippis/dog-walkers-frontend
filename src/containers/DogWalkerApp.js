import React, { Component } from "react"
import { StyleSheet, css } from "aphrodite"

import Filters from "./../components/Filters"
import Map from "./../components/Map"

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex"
  },
  halfWidth: {
    width: "50%"
  }
})

class DogWalkerApp extends Component {
  render() {
    return (
      <div className={css(styles.flexContainer)}>
        <div className={css(styles.halfWidth)}>
          <Filters />
        </div>
        <div className={css(styles.halfWidth)}>
          <Map />
        </div>
      </div>
    )
  }
}

export default DogWalkerApp
