import React, { PropTypes } from "react"
import Avatar from "material-ui/Avatar"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

import { defaultTheme } from "../constants/Themes"

const WalkerMarker = ({ avatar }) => (
  <div>
    <MuiThemeProvider muiTheme={defaultTheme}>
      <Avatar src={avatar} />
    </MuiThemeProvider>
  </div>
)

WalkerMarker.propTypes = {
  avatar: PropTypes.string
}

WalkerMarker.defaultProps = {
  avatar: "avatars/default.png"
}

export default WalkerMarker
