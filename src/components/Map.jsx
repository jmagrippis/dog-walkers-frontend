import React, { PropTypes } from "react"
import GoogleMap from "google-map-react"

import WalkerMarker from "./WalkerMarker"
import { GOOGLE_MAPS_JS_API_KEY } from "../constants/Keys"

const Map = ({ center, walkers }) => (
    <div style={{height: 396}}>
      {walkers.count() < 1 ? (
        <GoogleMap
          bootstrapURLKeys={{key: GOOGLE_MAPS_JS_API_KEY }}
          center={center}
          defaultZoom={14}>
        </GoogleMap>
      ) :
      (
        <GoogleMap
          bootstrapURLKeys={{key: GOOGLE_MAPS_JS_API_KEY }}
          center={center}
          defaultZoom={14}>
          {walkers.map((walker) => (
            <WalkerMarker
              key={walker.get("id")}
              lat={walker.get("location").get("lat")}
              lng={walker.get("location").get("lng")}
            />
          ))}
        </GoogleMap>
      )}
    </div>
  )
Map.propTypes = {
  center: PropTypes.object.isRequired,
  walkers: PropTypes.object.isRequired
}

export default Map
