import { List, Map } from "immutable"

import { SET_CENTER, RESET_WALKERS } from "../constants/ActionTypes"

const defaultState = Map({
  center: {
    lat: 51.5074,
    lng: -0.125
  },
  nearest: List()
})

export default function(state = defaultState, action) {
  switch (action.type) {
    case SET_CENTER:
      return state.set("center", Map(action.center))
    case RESET_WALKERS:
      return state.set("nearest", List())
  }
  return state
}
