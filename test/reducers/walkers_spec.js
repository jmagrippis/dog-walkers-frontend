import {List, Map, fromJS} from "immutable"
import {expect} from "chai"

import walkers from "./../../src/reducers/walkers"

describe("walkers reducer", () => {

  it("handles SET_CENTER", () => {
    const initialState = Map({
      center: { lat: 99.99, lng: 99.99 },
      nearest: List()
    })

    const action = {
      type: "SET_CENTER",
      center: Map({ lat: 12.34, lng: 56.78 })
    }

    const nextState = walkers(initialState, action)

    expect(nextState).to.equal(fromJS({
      center: Map({ lat: 12.34, lng: 56.78 }),
      nearest: List()
    }))
  })

  it("handles SET_CENTER with plain JS payload", () => {
    const initialState = Map({
      center: { lat: 99.99, lng: 99.99 },
      nearest: List()
    })

    const action = {
      type: "SET_CENTER",
      center: { lat: 12.34, lng: 56.78 }
    }

    const nextState = walkers(initialState, action)

    expect(nextState).to.equal(fromJS({
      center: Map({ lat: 12.34, lng: 56.78 }),
      nearest: List()
    }))
  })

  it("handles SET_CENTER without initial state", () => {
    const action = {
      type: "SET_CENTER",
      center: { lat: 12.34, lng: 56.78 }
    }

    const nextState = walkers(undefined, action)

    expect(nextState).to.equal(fromJS({
      center: Map({ lat: 12.34, lng: 56.78 }),
      nearest: List()
    }))
  })

})
