import { connect } from "react-redux"

import { toggleWalker } from "../actions"

import Map from "../components/Map"

const mapStateToProps = (state) => {
  return {
    center: state.walkers.get("center").toJS(),
    walkers: state.walkers.get("nearest")
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    expandWalker: (key) => {
      dispatch(toggleWalker(key))
    }
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapContainer
