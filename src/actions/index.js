import { SET_POST_CODE, SET_FROM_AVAILABILITY } from "../constants/ActionTypes"

export const setPostCode = (postCode) => {
  return {
    type: SET_POST_CODE,
    postCode
  }
}

export const setFromAvailability = (fromDate, fromTime ) => {
  return {
    type: SET_FROM_AVAILABILITY,
    fromDate,
    fromTime
  }
}