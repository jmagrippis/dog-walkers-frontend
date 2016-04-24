import { SET_POST_CODE, SET_FROM_AVAILABILITY, SET_TO_AVAILABILITY,
  SET_EXPERIENCE, SET_CENTER, RESET_NEAREST_WALKERS,
  ADD_NEAREST_WALKERS } from "../constants/ActionTypes"

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

export const setToAvailability = (toDate, toTime ) => {
  return {
    type: SET_TO_AVAILABILITY,
    toDate,
    toTime
  }
}

export const setExperience = (experience) => {
  return {
    type: SET_EXPERIENCE,
    experience
  }
}

export const setCenter = (center) => {
  return {
    type: SET_CENTER,
    center
  }
}

export const resetNearestWalkers = () => {
  return {
    type: RESET_NEAREST_WALKERS
  }
}

export const addNearestWalkers = (nearest) => {
  return {
    type: ADD_NEAREST_WALKERS,
    nearest
  }
}

const geocode = (postCode) => {
  // TODO: This should actually hit the geocoding API
  let payload = {
    address: postCode
  }
  return Promise.resolve({
    results: [
      {
        geometry: {
          lat: 51.5,
          lng: -0.12
        }
      }
    ],
    payload
  })
}

const fetchNearestWalkers = (location, availabilityFrom, availabilityTo, experience) => {
  // TODO: This would actually query our backend
  // possibly fetching from /api/v1/walkers/nearest/{location}?availabilityFrom={availability.from}&availabilityTo={availability.to}experience={experience}
  // for now, we just return some fake walkers at random
  return Promise.resolve({
    walkers: [
      {
        id: 1,
        location: {
          lat: location.lat,
          lng: location.lng
        },
        avatar: "avatars/1.png",
        bio: "The most casual dog walker."
      },
      {
        id: 2,
        location: {
          lat: location.lat + 0.01,
          lng: location.lng - 0.005
        },
        avatar: "avatars/2.png",
        bio: "The best dog walker."
      },
      {
        id: 3,
        location: {
          lat: location.lat - 0.0075,
          lng: location.lng + 0.002
        },
        avatar: "avatars/3.png",
        bio: "The worst dog walker."
      }
    ],
    experience: {
      location,
      availability: {
        from: availabilityFrom,
        to: availabilityTo
      },
      experience
    }
  })
}

export const fetchForFilters = (postCode, availabilityFrom, availabilityTo, experience) => {

  if (!postCode || postCode.length < 4) {
    // TODO: Log the early out on small postCode
  }

  return function (dispatch) {
    return geocode(postCode).then(
      (response) => {
        if (!response.results || !response.results[0] || !response.results[0].geometry) {
          // TODO: Handle bad response
          return { response }
        }

        dispatch(setCenter(response.results[0].geometry))

        dispatch(resetNearestWalkers())
        return fetchNearestWalkers(response.results[0].geometry, availabilityFrom, availabilityTo, experience)
        .then((response) => {
          dispatch(addNearestWalkers(response.walkers))
        })
      },
      (error) => {
        // TODO: Handle a bad response
        return { error }
      }
    )
  }
}
