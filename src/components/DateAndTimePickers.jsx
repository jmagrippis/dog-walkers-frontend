import React, { PropTypes } from "react"
import { css } from "aphrodite"
import DatePicker from "material-ui/DatePicker/DatePicker"
import TimePicker from "material-ui/TimePicker/TimePicker"
import styles from "./../constants/Styles"

const DateAndTimePickers = ({ prefix, dateValue, timeValue, onChange }) => (
  <div className={css(styles.flexContainerSpaceAround)}>
    <DatePicker
      minDate={new Date()}
      hintText={prefix + " Date"}
      mode="landscape"
      value={dateValue}
      onChange={(_, newDate) => {
        onChange(newDate, timeValue) }}
    />
    <TimePicker
      hintText={prefix + " Time"}
      format="24hr"
      pedantic={true}
      value={timeValue}
      onChange={(_, newDate) => { onChange(dateValue, newDate) }}
    />
  </div>
)

DateAndTimePickers.propTypes = {
  prefix: PropTypes.string.isRequired,
  dateValue: PropTypes.object,
  timeValue: PropTypes.object,
  onChange: PropTypes.func.isRequired
}

export default DateAndTimePickers
