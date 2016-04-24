import { connect } from "react-redux"

import Map from "../components/Map"

const mapStateToProps = (state) => {
  return {
    center: state.walkers.get("center")
  }
}

const MapContainer = connect(mapStateToProps)(Map)

export default MapContainer
