import React, { PropTypes } from "react"
import { StyleSheet, css } from "aphrodite"
import Paper from "material-ui/Paper"
import RaisedButton from "material-ui/RaisedButton"
import TextField from "material-ui/TextField"

import DateAndTimePickers from "./DateAndTimePickers"

const styles = StyleSheet.create({
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

const Filters = ({ postCode, onPostCodeChange, availability, experience }) => (
  <Paper zDepth={1} className={css(styles.padded)}>
    <aside className={css(styles.flexContainerColumn)}>
      <TextField
        hintText="SW1A 1AA"
        floatingLabelText="Post Code"
        value={postCode}
        onChange={(event) => { onPostCodeChange(event.target.value) }}
      />
      <DateAndTimePickers
        prefix="From"
        dateValue={availability.fromDate}
        timeValue={availability.fromTime}
      />
      <DateAndTimePickers
        prefix="To"
        dateValue={availability.toDate}
        timeValue={availability.toTime}
      />
      <TextField
        hintText="in years"
        floatingLabelText="Experience"
        type="number"
        value={experience}
      />
      <RaisedButton label="Submit" primary={true} className={css(styles.marginTop)} />
    </aside>
  </Paper>
  )

Filters.propTypes = {
  postCode: PropTypes.string,
  onPostCodeChange: PropTypes.func.isRequired,
  availability: PropTypes.object,
  experience: PropTypes.number
}

export default Filters
