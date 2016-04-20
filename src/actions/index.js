import { SET_POST_CODE } from "../constants/ActionTypes"

export const setPostCode = (postCode) => {
  return {
    type: SET_POST_CODE,
    postCode
  }
}
