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

const Filters = ({ postCode, onPostCodeChange, availability,
  onFromAvailabilityChange, onToAvailabilityChange, experience,
  onExperienceChange, submittable, onFormSubmit }) => (
  <Paper zDepth={1} className={css(styles.padded)}>
    <aside className={css(styles.flexContainerColumn)}>
      <TextField
        hintText="SW1A 1AA"
        floatingLabelText="Post Code"
        value={typeof postCode === "undefined" ? "" : postCode}
        onChange={(event) => { onPostCodeChange(event.target.value) }}
      />
      <DateAndTimePickers
        prefix="From"
        dateValue={availability.fromDate}
        timeValue={availability.fromTime}
        onChange={onFromAvailabilityChange}
      />
      <DateAndTimePickers
        prefix="To"
        dateValue={availability.toDate}
        timeValue={availability.toTime}
        onChange={onToAvailabilityChange}
      />
      <TextField
        hintText="in years"
        floatingLabelText="Experience"
        type="number"
        value={typeof experience === "undefined" ? "" : experience}
        onChange={(event) => { onExperienceChange(event.target.value) }}
      />
      <RaisedButton
        label="Submit"
        primary={true}
        disabled={!submittable}
        className={css(styles.marginTop)}
        onClick={() => {
          if (!submittable) return
          onFormSubmit(postCode, availability.fromDateTime, availability.toDateTime, experience)
        }}
      />
    </aside>
  </Paper>
)

Filters.propTypes = {
  postCode: PropTypes.string,
  onPostCodeChange: PropTypes.func.isRequired,
  availability: PropTypes.object,
  onFromAvailabilityChange: PropTypes.func.isRequired,
  onToAvailabilityChange: PropTypes.func.isRequired,
  experience: PropTypes.number,
  onExperienceChange: PropTypes.func.isRequired,
  submittable: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired
}

export default Filters
