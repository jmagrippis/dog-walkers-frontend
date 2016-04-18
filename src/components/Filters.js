import React, { Component } from "react"
import { StyleSheet, css } from "aphrodite"
import DatePicker from "material-ui/DatePicker/DatePicker"
import Paper from "material-ui/Paper"
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import TimePicker from "material-ui/TimePicker/TimePicker"

const styles = StyleSheet.create({
  flexContainerSpaceAround: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 24
  },
  flexContainerColumn: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 720,
    margin: "0 auto"
  },
  padded: {
    padding: 24
  },
  marginTop: {
    marginTop: 24
  }
})

const marginless = {
  marginTop: 0
}

class Filters extends Component {
  render() {
    return (
      <Paper zDepth={1} className={css(styles.padded)}>
        <aside className={css(styles.flexContainerColumn)}>
          <TextField
            hintText="SW1A 1AA"
            floatingLabelText="Post Code"
          />
          <div className={css(styles.flexContainerSpaceAround)}>
            <DatePicker
            hintText="From Date"
            mode="landscape"
            />
            <TimePicker
            hintText="From Time"
            format="24hr"
            pedantic={true}
            />
          </div>
          <div className={css(styles.flexContainerSpaceAround)}>
            <DatePicker
            hintText="To Date"
            mode="landscape"
            />
            <TimePicker
            hintText="To Time"
            format="24hr"
            pedantic={true}
            />
          </div>
          <TextField
            hintText="in years"
            floatingLabelText="Experience"
            type="number"
            style={marginless}
          />
          <RaisedButton label="Submit" primary={true} className={css(styles.marginTop)} />
        </aside>
      </Paper>
    )
  }
}

export default Filters
