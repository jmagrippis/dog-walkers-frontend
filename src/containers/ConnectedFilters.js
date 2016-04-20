import { connect } from "react-redux"
import { setPostCode, setFromAvailability } from "../actions"

import Filters from "../components/Filters"

const mapStateToProps = (state) => {
  return {
    postCode: state.filters.get("postCode"),
    availability: state.filters.get("availability").toJS(),
    experience: state.filters.get("experience")
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPostCodeChange: (postCode) => {
      dispatch(setPostCode(postCode))
    },
    onFromAvailabilityChange: (fromDate, fromTime) => {
      dispatch(setFromAvailability(fromDate, fromTime))
    }
  }
}

const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)

export default FiltersContainer