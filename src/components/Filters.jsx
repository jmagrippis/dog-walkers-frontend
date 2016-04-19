import React, { Component } from "react"
import { connect } from "react-redux"
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

const marginless = {
  marginTop: 0
}

export class Filters extends Component {
  render() {
    return (
      <Paper zDepth={1} className={css(styles.padded)}>
        <aside className={css(styles.flexContainerColumn)}>
          <TextField
            hintText="SW1A 1AA"
            floatingLabelText="Post Code"
            value={this.props.postCode}
          />
          <DateAndTimePickers
            prefix="From"
            dateValue={this.props.availability.fromDate}
            timeValue={this.props.availability.fromTime}
          />
          <DateAndTimePickers
            prefix="To"
            dateValue={this.props.availability.toDate}
            timeValue={this.props.availability.toTime}
          />
          <TextField
            hintText="in years"
            floatingLabelText="Experience"
            type="number"
            style={marginless}
            value={this.props.experience}
          />
          <RaisedButton label="Submit" primary={true} className={css(styles.marginTop)} />
        </aside>
      </Paper>
    )
  }
}

Filters.propTypes = {
  postCode: React.PropTypes.string,
  availability: React.PropTypes.object,
  experience: React.PropTypes.number
}

function mapStateToProps(state) {
  return {
    postCode: state.filters.get("postCode"),
    availability: state.filters.get("availability").toJS(),
    experience: state.filters.get("experience")
  }
}

export const FiltersContainer = connect(mapStateToProps)(Filters)
