import { List, Map } from "immutable"

import { SET_CENTER, RESET_NEAREST_WALKERS,
  ADD_NEAREST_WALKERS } from "../constants/ActionTypes"

const defaultState = Map({
  center: Map({
    lat: 51.5074,
    lng: -0.125
  }),
  nearest: List(),
  isFetching: false
})

export default function(state = defaultState, action) {
  switch (action.type) {
    case SET_CENTER:
      return state.set("center", Map(action.center))
    case RESET_NEAREST_WALKERS:
      return state.set("nearest", List())
    case ADD_NEAREST_WALKERS:
      return state.set(
        "nearest",
        state.get("nearest").concat(action.nearest.map(walker => Map(walker)))
      )
  }
  return state
}
