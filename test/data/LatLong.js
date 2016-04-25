import { random } from "lodash"

export function randomLatLongInLondon() {
  return {
    lat: random(51.005, 52.005),
    lng:  random(-0.555, 0.555)
  }
}
