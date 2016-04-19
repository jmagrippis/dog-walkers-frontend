import {Map, fromJS} from "immutable"
import {expect} from "chai"

import filters from "./../../src/reducers/filters"

describe("filters reducer", () => {

  const currentDate = new Date()
  const tomorrow = (new Date()).setDate(currentDate.getDate() + 1)

  it("handles SET_FILTERS", () => {
    const initialState = Map()
    const action = {
      type: "SET_FILTERS",
      filters: Map({
        postCode: "SW1A 1AA",
        availability: Map({
          fromDate: currentDate,
          fromTime: currentDate,
          toDate: tomorrow,
          toTime: tomorrow
        }),
        experience: 2
      })
    }

    const nextState = filters(initialState, action)

    expect(nextState).to.equal(fromJS({
      postCode: "SW1A 1AA",
      availability: {
        fromDate: currentDate,
        fromTime: currentDate,
        toDate: tomorrow,
        toTime: tomorrow
      },
      experience: 2
    }))
  })

  it("handles SET_FILTERS with plain JS payload", () => {
    const initialState = Map()
    const action = {
      type: "SET_FILTERS",
      filters: {
        postCode: "SW1A 1AB",
        availability: {
          fromDate: currentDate,
          fromTime: currentDate,
          toDate: tomorrow,
          toTime: tomorrow
        },
        experience: 3
      }
    }

    const nextState = filters(initialState, action)

    expect(nextState).to.equal(fromJS({
      postCode: "SW1A 1AB",
      availability: {
        fromDate: currentDate,
        fromTime: currentDate,
        toDate: tomorrow,
        toTime: tomorrow
      },
      experience: 3
    }))
  })

  it("handles SET_FILTERS without initial state", () => {
    const action = {
      type: "SET_FILTERS",
      filters: {
        postCode: "SW1A 1AC",
        availability: {
          fromDate: currentDate,
          fromTime: currentDate,
          toDate: tomorrow,
          toTime: tomorrow
        },
        experience: 10
      }
    }

    const nextState = filters(undefined, action)

    expect(nextState).to.equal(fromJS({
      postCode: "SW1A 1AC",
      availability: {
        fromDate: currentDate,
        fromTime: currentDate,
        toDate: tomorrow,
        toTime: tomorrow
      },
      experience: 10
    }))
  })

})
