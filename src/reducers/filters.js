import { SET_FILTERS, SET_POST_CODE, SET_FROM_AVAILABILITY, SET_TO_AVAILABILITY,
  SET_EXPERIENCE } from "../constants/ActionTypes"
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
  let resetToDate = availability.get("toDateTime") < newDateTime
  let newAvailability = Map({
    fromDateTime: newDateTime,
    fromDate: fromDate,
    fromTime: fromTime,
    toDateTime: resetToDate ? undefined : availability.get("toDateTime"),
    toDate: resetToDate ? undefined : availability.get("toDate"),
    toTime: resetToDate ? undefined : availability.get("toTime")
  })
  return state.set("availability", newAvailability)
}

function setToAvailability(state, toDate, toTime) {
  if (!toDate && !toTime) {
    return state
  }

  toDate = !toDate ? new Date(toTime.getTime()) : toDate
  let newDateTime = new Date(toDate.getTime())
  if (!toTime) {
    toTime = new Date(toDate.getTime())
  } else {
    newDateTime.setHours(toTime.getHours())
    newDateTime.setMinutes(toTime.getMinutes())
  }
  let availability = state.get("availability")
  let newAvailability = Map({
    fromDateTime: availability.get("fromDateTime"),
    fromDate: availability.get("fromDate"),
    fromTime: availability.get("fromTime"),
    toDateTime: newDateTime,
    toDate: toDate,
    toTime: toTime
  })
  return state.set("availability", newAvailability)
}

function setExperience(state, experience) {
  if (typeof experience === "undefined") {
    return state.set("experience", parsedExperience)
  }
  let parsedExperience = parseInt(experience)
  if (isNaN(parsedExperience)) return state

  parsedExperience = parsedExperience < 0 ? 0 : parsedExperience
  return state.set("experience", parsedExperience)
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
    case SET_TO_AVAILABILITY:
      return setToAvailability(state, action.toDate, action.toTime)
    case SET_EXPERIENCE:
      return setExperience(state, action.experience)
  }
  return state
}
