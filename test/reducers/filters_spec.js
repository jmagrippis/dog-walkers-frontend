import {Map, fromJS} from "immutable"
import {expect} from "chai"

import filters from "./../../src/reducers/filters"

describe("filters reducer", () => {

  const currentDate = new Date()
  let tomorrow = new Date()
  tomorrow.setDate(currentDate.getDate() + 1)
  let pastTwo = new Date()
  pastTwo.setHours(2)

  it("handles SET_FILTERS", () => {
    const initialState = Map()
    const action = {
      type: "SET_FILTERS",
      filters: Map({
        postCode: "SW1A 1AA",
        availability: Map({
          fromDateTime: currentDate,
          fromDate: currentDate,
          fromTime: currentDate,
          toDateTime: tomorrow,
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
        fromDateTime: currentDate,
        fromDate: currentDate,
        fromTime: currentDate,
        toDateTime: tomorrow,
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
          fromDateTime: currentDate,
          fromDate: currentDate,
          fromTime: currentDate,
          toDateTime: currentDate,
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
        fromDateTime: currentDate,
        fromDate: currentDate,
        fromTime: currentDate,
        toDateTime: currentDate,
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
          fromDateTime: currentDate,
          fromDate: currentDate,
          fromTime: currentDate,
          toDateTime: currentDate,
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
        fromDateTime: currentDate,
        fromDate: currentDate,
        fromTime: currentDate,
        toDateTime: currentDate,
        toDate: tomorrow,
        toTime: tomorrow
      },
      experience: 10
    }))
  })

  it("handles SET_POST_CODE", () => {
    const action = {
      type: "SET_POST_CODE",
      postCode: "SW1A 1AA"
    }

    const nextState = filters(undefined, action)

    expect(nextState).to.equal(fromJS({
      postCode: "SW1A 1AA",
      availability: {
        fromDateTime: undefined,
        fromDate: undefined,
        fromTime: undefined,
        toDateTime: undefined,
        toDate: undefined,
        toTime: undefined
      },
      experience: undefined
    }))
  })

  it("handles SET_FROM_AVAILABILITY", () => {
    const action = {
      type: "SET_FROM_AVAILABILITY",
      fromDate: currentDate,
      fromTime: pastTwo
    }

    let expectedDateTime = new Date(currentDate.getTime())
    expectedDateTime.setHours(pastTwo.getHours())

    const nextState = filters(undefined, action)

    expect(nextState).to.equal(fromJS({
      postCode: undefined,
      availability: {
        fromDateTime: expectedDateTime,
        fromDate: currentDate,
        fromTime: pastTwo,
        toDateTime: undefined,
        toDate: undefined,
        toTime: undefined
      },
      experience: undefined
    }))
  })

  it("handles SET_FROM_AVAILABILITY without a fromTime", () => {
    const action = {
      type: "SET_FROM_AVAILABILITY",
      fromDate: currentDate
    }

    const nextState = filters(undefined, action)

    expect(nextState).to.equal(fromJS({
      postCode: undefined,
      availability: {
        fromDateTime: currentDate,
        fromDate: currentDate,
        fromTime: currentDate,
        toDateTime: undefined,
        toDate: undefined,
        toTime: undefined
      },
      experience: undefined
    }))
  })

  it("handles SET_FROM_AVAILABILITY without a fromDate", () => {
    const action = {
      type: "SET_FROM_AVAILABILITY",
      fromTime: currentDate
    }

    const nextState = filters(undefined, action)

    expect(nextState).to.equal(fromJS({
      postCode: undefined,
      availability: {
        fromDateTime: currentDate,
        fromDate: currentDate,
        fromTime: currentDate,
        toDateTime: undefined,
        toDate: undefined,
        toTime: undefined
      },
      experience: undefined
    }))
  })

  it("handles SET_TO_AVAILABILITY", () => {
    const action = {
      type: "SET_TO_AVAILABILITY",
      toDate: currentDate,
      toTime: pastTwo
    }

    let expectedDateTime = new Date(currentDate.getTime())
    expectedDateTime.setHours(pastTwo.getHours())

    const nextState = filters(undefined, action)

    expect(nextState).to.equal(fromJS({
      postCode: undefined,
      availability: {
        fromDateTime: undefined,
        fromDate: undefined,
        fromTime: undefined,
        toDateTime: expectedDateTime,
        toDate: currentDate,
        toTime: pastTwo
      },
      experience: undefined
    }))
  })

})
