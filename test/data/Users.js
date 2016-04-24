import faker from "faker"
import { range, random } from "lodash"

export function randomUsers(amount, location, experience) {
  let ids = faker.helpers.shuffle(range(1, 10))

  return range(amount).map((number) => ({
    id: ids[number],
    location: {
      lat: random(location.lat - 0.011, location.lat + 0.011),
      lng:  random(location.lng - 0.022, location.lng + 0.022)
    },
    username: faker.internet.userName,
    bio: faker.lorem.paragraph,
    avatar: "avatars/" + ids[number] + ".png",
    experience: experience
  }))
}
