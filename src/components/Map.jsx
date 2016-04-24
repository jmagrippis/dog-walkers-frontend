import React, { PropTypes } from "react"
import GoogleMap from "google-map-react"

import WalkerMarker from "./WalkerMarker"
import { GOOGLE_MAPS_JS_API_KEY } from "../constants/Keys"

const Map = ({ center, walkers, expandWalker }) => (
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
          {walkers.map((walker, index) => (
            <WalkerMarker
              index={index}
              key={walker.get("id")}
              lat={walker.get("location").lat}
              lng={walker.get("location").lng}
              avatar={walker.get("avatar")}
            />
          ))}
        </GoogleMap>
      )}
    </div>
  )
Map.propTypes = {
  center: PropTypes.object.isRequired,
  walkers: PropTypes.object.isRequired,
  expandWalker: PropTypes.func.isRequired
}

export default Map
