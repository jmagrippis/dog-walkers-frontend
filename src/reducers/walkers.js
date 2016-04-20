import { RESET_WALKERS } from "../constants/ActionTypes"

const initialState = []

export default function walkers(state = initialState, action) {
  switch (action.type) {
    case RESET_WALKERS:
      return []

    default:
      return state
  }
}
