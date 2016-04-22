import React from "react"
import GoogleMap from "google-map-react"

import { GOOGLE_MAPS_JS_API_KEY } from "../constants/Keys"

const Map = () => (
  <div style={{height: 396}}>
    <GoogleMap
      bootstrapURLKeys={{key: GOOGLE_MAPS_JS_API_KEY }}
      defaultCenter={{lat: 51.5074, lng: -0.125}}
      defaultZoom={14}>
    </GoogleMap>
  </div>
)

export default Map
