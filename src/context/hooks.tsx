import React from "react"

import UserContext, {Context} from "./context"

export function useStatus(): Context["state"]["status"] {
  const {
    state: {status},
  } = React.useContext(UserContext)

  return status
}

export function useOrder(): Context["state"]["order"] {
  const {
    state: {order},
  } = React.useContext(UserContext)

  return order
}

export function useBgAndBorder(): Context["state"]["bgAndBorder"] {
  const {
    state: {bgAndBorder},
  } = React.useContext(UserContext)

  return bgAndBorder
}

export function viewFinal(): Context["state"]["final"] {
  const {
    state: {final},
  } = React.useContext(UserContext)

  return final
}

export function useChangeStatus(): Context["actions"]["changeStatus"] {
  const {
    actions: {changeStatus},
  } = React.useContext(UserContext)

  return changeStatus
}

export function useAddToOrder(): Context["actions"]["addToOrder"] {
  const {
    actions: {addToOrder},
  } = React.useContext(UserContext)

  return addToOrder
}

export function useAddVegetables(): Context["actions"]["addVegetablesOrIngredients"] {
  const {
    actions: {addVegetablesOrIngredients},
  } = React.useContext(UserContext)

  return addVegetablesOrIngredients
}

export function useFinal(): Context["actions"]["final"] {
  const {
    actions: {final},
  } = React.useContext(UserContext)

  return final
}

export function useReset(): Context["actions"]["reset"] {
  const {
    actions: {reset},
  } = React.useContext(UserContext)

  return reset
}
