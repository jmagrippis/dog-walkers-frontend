import {List, Map, fromJS} from "immutable"
import {expect} from "chai"

import walkers from "./../../src/reducers/walkers"

describe("walkers reducer", () => {

  it("handles SET_CENTER", () => {
    const initialState = Map({
      center: { lat: 99.99, lng: 99.99 },
      nearest: List(),
      isFetching: false
    })

    const action = {
      type: "SET_CENTER",
      center: Map({ lat: 12.34, lng: 56.78 })
    }

    const nextState = walkers(initialState, action)

    expect(nextState).to.equal(fromJS({
      center: Map({ lat: 12.34, lng: 56.78 }),
      nearest: List(),
      isFetching: false
    }))
  })

  it("handles SET_CENTER with plain JS payload", () => {
    const initialState = Map({
      center: { lat: 99.99, lng: 99.99 },
      nearest: List(),
      isFetching: false
    })

    const action = {
      type: "SET_CENTER",
      center: { lat: 12.34, lng: 56.78 }
    }

    const nextState = walkers(initialState, action)

    expect(nextState).to.equal(fromJS({
      center: Map({ lat: 12.34, lng: 56.78 }),
      nearest: List(),
      isFetching: false
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
      nearest: List(),
      isFetching: false
    }))
  })

  it("handles RESET_NEAREST_WALKERS", () => {
    const initialState = Map({
      center: Map({ lat: 99.99, lng: 99.99 }),
      nearest: List.of(
        Map({ lat: 90.34, lng: 90.78 }),
        Map({ lat: 91.34, lng: 91.78 }),
        Map({ lat: 92.34, lng: 92.78 }),
        Map({ lat: 93.34, lng: 93.78 }),
        Map({ lat: 94.34, lng: 94.78 })
      ),
      isFetching: false
    })

    const action = {
      type: "RESET_NEAREST_WALKERS"
    }

    const nextState = walkers(initialState, action)

    expect(nextState).to.equal(fromJS({
      center: Map({ lat: 99.99, lng: 99.99 }),
      nearest: List(),
      isFetching: false
    }))
  })

  it("handles ADD_NEAREST_WALKERS", () => {
    const initialState = Map({
      center: Map({ lat: 99.99, lng: 99.99 }),
      nearest: List(),
      isFetching: false
    })

    const action = {
      type: "ADD_NEAREST_WALKERS",
      nearest: List.of(
        Map({ lat: 90.34, lng: 90.78 }),
        Map({ lat: 91.34, lng: 91.78 }),
        Map({ lat: 92.34, lng: 92.78 }),
        Map({ lat: 93.34, lng: 93.78 }),
        Map({ lat: 94.34, lng: 94.78 })
      )
    }

    const nextState = walkers(initialState, action)

    expect(nextState).to.equal(fromJS({
      center: Map({ lat: 99.99, lng: 99.99 }),
      nearest: List.of(
        Map({ lat: 90.34, lng: 90.78, expanded: false }),
        Map({ lat: 91.34, lng: 91.78, expanded: false }),
        Map({ lat: 92.34, lng: 92.78, expanded: false }),
        Map({ lat: 93.34, lng: 93.78, expanded: false }),
        Map({ lat: 94.34, lng: 94.78, expanded: false })
      ),
      isFetching: false
    }))
  })

  it("handles ADD_NEAREST_WALKERS with plain JS payload", () => {
    const initialState = Map({
      center: Map({ lat: 99.99, lng: 99.99 }),
      nearest: List(),
      isFetching: false
    })

    const action = {
      type: "ADD_NEAREST_WALKERS",
      nearest: [
        { lat: 90.34, lng: 90.78 },
        { lat: 91.34, lng: 91.78 },
        { lat: 92.34, lng: 92.78 },
        { lat: 93.34, lng: 93.78 },
        { lat: 94.34, lng: 94.78 }
      ]
    }

    const nextState = walkers(initialState, action)

    expect(nextState).to.equal(fromJS({
      center: Map({ lat: 99.99, lng: 99.99 }),
      nearest: List.of(
        Map({ lat: 90.34, lng: 90.78, expanded: false }),
        Map({ lat: 91.34, lng: 91.78, expanded: false }),
        Map({ lat: 92.34, lng: 92.78, expanded: false }),
        Map({ lat: 93.34, lng: 93.78, expanded: false }),
        Map({ lat: 94.34, lng: 94.78, expanded: false })
      ),
      isFetching: false
    }))
  })

  it("handles ADD_NEAREST_WALKERS by adding to the List", () => {
    const initialState = Map({
      center: Map({ lat: 99.99, lng: 99.99 }),
      nearest: List.of(
        Map({ lat: 10.34, lng: 10.78, expanded: false }),
        Map({ lat: 11.34, lng: 11.78, expanded: false }),
        Map({ lat: 12.34, lng: 12.78, expanded: true }),
        Map({ lat: 13.34, lng: 13.78, expanded: false }),
        Map({ lat: 14.34, lng: 14.78, expanded: false })
      ),
      isFetching: false
    })

    const action = {
      type: "ADD_NEAREST_WALKERS",
      nearest: [
        { lat: 90.34, lng: 90.78 },
        { lat: 91.34, lng: 91.78 },
        { lat: 92.34, lng: 92.78 },
        { lat: 93.34, lng: 93.78 },
        { lat: 94.34, lng: 94.78 }
      ]
    }

    const nextState = walkers(initialState, action)

    expect(nextState).to.equal(fromJS({
      center: Map({ lat: 99.99, lng: 99.99 }),
      nearest: List.of(
        Map({ lat: 10.34, lng: 10.78, expanded: false }),
        Map({ lat: 11.34, lng: 11.78, expanded: false }),
        Map({ lat: 12.34, lng: 12.78, expanded: true }),
        Map({ lat: 13.34, lng: 13.78, expanded: false }),
        Map({ lat: 14.34, lng: 14.78, expanded: false }),
        Map({ lat: 90.34, lng: 90.78, expanded: false }),
        Map({ lat: 91.34, lng: 91.78, expanded: false }),
        Map({ lat: 92.34, lng: 92.78, expanded: false }),
        Map({ lat: 93.34, lng: 93.78, expanded: false }),
        Map({ lat: 94.34, lng: 94.78, expanded: false })
      ),
      isFetching: false
    }))
  })

  it("handles TOGGLE_WALKER by toggling the given walker's expanded status", () => {
    const initialState = Map({
      center: Map({ lat: 99.99, lng: 99.99 }),
      nearest: List.of(
        Map({ lat: 10.34, lng: 10.78, expanded: false }),
        Map({ lat: 11.34, lng: 11.78, expanded: false }),
        Map({ lat: 12.34, lng: 12.78, expanded: false }),
        Map({ lat: 13.34, lng: 13.78, expanded: false }),
        Map({ lat: 14.34, lng: 14.78, expanded: false })
      ),
      isFetching: false
    })

    const action = {
      type: "TOGGLE_WALKER",
      key: 2
    }

    const nextState = walkers(initialState, action)

    expect(nextState).to.equal(fromJS({
      center: Map({ lat: 99.99, lng: 99.99 }),
      nearest: List.of(
        Map({ lat: 10.34, lng: 10.78, expanded: false }),
        Map({ lat: 11.34, lng: 11.78, expanded: false }),
        Map({ lat: 12.34, lng: 12.78, expanded: true }),
        Map({ lat: 13.34, lng: 13.78, expanded: false }),
        Map({ lat: 14.34, lng: 14.78, expanded: false })
      ),
      isFetching: false
    }))

    const lastState = walkers(nextState, action)

    expect(lastState).to.equal(fromJS({
      center: Map({ lat: 99.99, lng: 99.99 }),
      nearest: List.of(
        Map({ lat: 10.34, lng: 10.78, expanded: false }),
        Map({ lat: 11.34, lng: 11.78, expanded: false }),
        Map({ lat: 12.34, lng: 12.78, expanded: false }),
        Map({ lat: 13.34, lng: 13.78, expanded: false }),
        Map({ lat: 14.34, lng: 14.78, expanded: false })
      ),
      isFetching: false
    }))
  })

})
