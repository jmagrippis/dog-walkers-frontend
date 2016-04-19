import { Map } from "immutable"

function setState(state, newState) {
  return state.merge(newState)
}

export default function(state = Map(), action) {
  switch (action.type) {
    case "SET_FILTERS":
      return setState(state, action.filters)
  }
  return state
}
