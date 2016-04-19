import React, { Component } from "react"
import { css } from "aphrodite"
import DatePicker from "material-ui/DatePicker/DatePicker"
import TimePicker from "material-ui/TimePicker/TimePicker"
import styles from "./../constants/Styles"

class DateAndTimePickers extends Component {
  render() {
    return (
      <div className={css(styles.flexContainerSpaceAround)}>
        <DatePicker
          minDate={new Date()}
          hintText={this.props.prefix + " Date"}
          mode="landscape"
          value={this.props.dateValue}
        />
        <TimePicker
          hintText={this.props.prefix + " Time"}
          format="24hr"
          pedantic={true}
          value={this.props.timeValue}
        />
      </div>
    )
  }
}

DateAndTimePickers.propTypes = {
  prefix: React.PropTypes.string.isRequired,
  dateValue: React.PropTypes.object,
  timeValue: React.PropTypes.object
}

export default DateAndTimePickers
