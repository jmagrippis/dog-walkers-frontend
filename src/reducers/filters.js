import { SET_FILTERS, SET_POST_CODE } from "../constants/ActionTypes"
import { Map } from "immutable"

function setState(state, newState) {
  return state.merge(newState)
}

function setPostCode(state, postCode) {
  return state.set("postCode", postCode)
}

const defaultState = Map({
  postCode: undefined,
  availability: Map({
    fromDate: undefined,
    fromTime: undefined,
    toDate: undefined,
    toTime: undefined
  }),
  experience: undefined
})

export default function(state = defaultState, action) {
  switch (action.type) {
    case SET_FILTERS:
      return setState(state, action.filters)
    case SET_POST_CODE:
      return setPostCode(state, action.postCode)
  }
  return state
}
