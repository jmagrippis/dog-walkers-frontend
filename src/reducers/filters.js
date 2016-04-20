import { SET_FILTERS, SET_POST_CODE,
  SET_FROM_AVAILABILITY } from "../constants/ActionTypes"
import { Map } from "immutable"

function setState(state, newState) {
  return state.merge(newState)
}

function setPostCode(state, postCode) {
  return state.set("postCode", postCode)
}

function setFromAvailability(state, fromDate, fromTime) {
  if (!fromDate && !fromTime) {
    return state
  }

  fromDate = !fromDate ? new Date(fromTime.getTime()) : fromDate
  let newDateTime = new Date(fromDate.getTime())
  if (!fromTime) {
    fromTime = new Date(fromDate.getTime())
  } else {
    newDateTime.setHours(fromTime.getHours())
    newDateTime.setMinutes(fromTime.getMinutes())
  }
  let availability = state.get("availability")
  let newAvailability = Map({
    fromDateTime: newDateTime,
    fromDate: fromDate,
    fromTime: fromTime,
    toDateTime: availability.get("toDateTime"),
    toDate: availability.get("toDate"),
    toTime: availability.get("toTime")
  })
  return state.set("availability", newAvailability)
}

const defaultState = Map({
  postCode: undefined,
  availability: Map({
    fromDateTime: undefined,
    fromDate: undefined,
    fromTime: undefined,
    toDateTime: undefined,
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
    case SET_FROM_AVAILABILITY:
      return setFromAvailability(state, action.fromDate, action.fromTime)
  }
  return state
}
