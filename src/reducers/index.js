import { combineReducers } from "redux"
import filters from "./filters"
import walkers from "./walkers"

const rootReducer = combineReducers({
  filters,
  walkers
})

export default rootReducer
