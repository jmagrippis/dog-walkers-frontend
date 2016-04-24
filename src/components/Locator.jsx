import React, { Component } from "react"
import { StyleSheet, css } from "aphrodite"

import ConnectedFilters from "../containers/ConnectedFilters"
import ConnectedMap from "../containers/ConnectedMap"

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex"
  },
  halfWidth: {
    width: "50%"
  }
})

class Locator extends Component {
  render() {
    return (
      <div className={css(styles.flexContainer)}>
        <div className={css(styles.halfWidth)}>
          <ConnectedFilters />
        </div>
        <div className={css(styles.halfWidth)}>
          <ConnectedMap />
        </div>
      </div>
    )
  }
}

export default Locator
