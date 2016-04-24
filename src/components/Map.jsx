import React, { PropTypes } from "react"
import GoogleMap from "google-map-react"

import { GOOGLE_MAPS_JS_API_KEY } from "../constants/Keys"

const Map = ({ center }) => (
  <div style={{height: 396}}>
    <GoogleMap
      bootstrapURLKeys={{key: GOOGLE_MAPS_JS_API_KEY }}
      center={center}
      defaultZoom={14}>
    </GoogleMap>
  </div>
)

Map.propTypes = {
  center: PropTypes.object
}

export default Map
