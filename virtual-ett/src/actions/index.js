export const SET_COLOR_LEFT = "SET_COLOR_LEFT";
export function setColorLeft(colorLeft) {
  return {
    type:SET_COLOR_LEFT,
    value:colorLeft
  }
}

export const SET_LOCATION_LEFT = "SET_LOCATION_LEFT";
export function setLocationLeft(locationLeft) {
  return {
    type:SET_LOCATION_LEFT,
    value:locationLeft
  }
}

export const SET_COLOR_RIGHT = "SET_COLOR_RIGHT";
export function setColorRight(colorRight) {
  return {
    type:SET_COLOR_RIGHT,
    value:colorRight
  }
}

export const SET_LOCATION_RIGHT = "SET_LOCATION_RIGHT";
export function setLocationRight(locationRight) {
  return {
    type:SET_LOCATION_RIGHT,
    value:locationRight
  }
}

export const SET_PES_VIEW_LEFT = "SET_PES_VIEW_LEFT";
export function setPesViewLeft(pesViewColorLeft) {
  return {
    type:SET_PES_VIEW_LEFT,
    value:pesViewColorLeft,
  }
}

export const SET_PES_VIEW_RIGHT = "SET_PES_VIEW_RIGHT";
export function setPesViewRight(pesViewColorRight) {
  return {
    type:SET_PES_VIEW_RIGHT,
    value:pesViewColorRight,
  }
}

export const SET_ADMIN = "SET_ADMIN";
export function setAdmin(admin) {
  return {
    type:SET_ADMIN,
    value:admin,
  }
}

export const SET_CLIENT = "SET_CLIENT";
export function setClient(client) {
  return {
    type:SET_CLIENT,
    value:client,
  }
}