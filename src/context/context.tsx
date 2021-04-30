import React from "react"

import {Status, Order, Food, bgAndBorder} from "../types/types"

export interface Context {
  state: {
    status: Status
    order: Order
    bgAndBorder: bgAndBorder[]
    final: boolean
  }
  actions: {
    changeStatus: (status: Status) => void
    addToOrder: (ingredient: Food, name: Status) => void
    addVegetablesOrIngredients: (vegetables: Food[], name: string) => void
    final: () => void
    reset: () => void
  }
}

const empty: Order = {
  bread: {name: "", price: 0, url: "", value: "1"},
  meat: {name: "", price: 0, url: "", value: "1"},
  cheese: {name: "", price: 0, url: "", value: "1"},
  vegetables: [],
  ingredients: [],
  price: 0,
}

const UserContext = React.createContext({} as Context)

const UserProvider: React.FC = ({children}) => {
  const [status, setStatus] = React.useState<Status>(Status.Bread)
  const [order, setOrder] = React.useState<Order>(empty)
  const [bgAndBorder, setBgAndBorder] = React.useState<bgAndBorder[]>([
    {bg: "#D9DBE9", border: "6px solid #FFD789"},
    {bg: "#D9DBE9", border: ""},
    {bg: "#D9DBE9", border: ""},
    {bg: "#D9DBE9", border: ""},
    {bg: "#D9DBE9", border: "6px solid #FFD789"},
  ])
  const [final, setFinal] = React.useState<boolean>(false)

  function handleChangeStatus(s: Status) {
    setStatus(s)

    if (s === "meat") {
      bgAndBorder[0].bg = "#FFD789"
      bgAndBorder[4].bg = "#FFD789"
      bgAndBorder[3].border = "6px solid #ED2E7E"
    }

    if (s === "cheese") {
      bgAndBorder[3].bg = "#ED2E7E"
      bgAndBorder[2].border = "6px solid #F4B740"
    }

    if (s === "vegetables") {
      bgAndBorder[2].bg = "#F4B740"
      bgAndBorder[1].border = "6px solid #34EAB9"
    }

    if (s === "ingredients") {
      bgAndBorder[1].bg = "#34EAB9"
    }
  }

  function handleAddToOrder(ingredient: Food, name: Status) {
    if (name === "bread") {
      order.bread = ingredient
      handleChangeStatus(Status.Meat)
    }
    if (name === "meat") {
      order.meat = ingredient
      handleChangeStatus(Status.Cheese)
    }
    if (name === "cheese") {
      order.cheese = ingredient
      handleChangeStatus(Status.Vegetables)
    }
    order.price = order.price + ingredient.price
  }

  function handleAddVegetablesOrIngredients(vegOrIng: Food[], name: string) {
    if (name === "vegetables") {
      order.vegetables = vegOrIng
      handleChangeStatus(Status.Ingredients)
      for (let i = 0; i < vegOrIng.length; i++) {
        order.price = order.price + vegOrIng[i].price
      }
    } else {
      order.ingredients = vegOrIng
      handleChangeStatus(Status.Final)
      for (let i = 0; i < vegOrIng.length; i++) {
        order.price = order.price + vegOrIng[i].price
      }
    }
  }

  function handleReset() {
    setStatus(Status.Bread)
    setOrder(empty)
    setBgAndBorder([
      {bg: "#D9DBE9", border: "6px solid #FFD789"},
      {bg: "#D9DBE9", border: ""},
      {bg: "#D9DBE9", border: ""},
      {bg: "#D9DBE9", border: ""},
      {bg: "#D9DBE9", border: "6px solid #FFD789"},
    ])
    setFinal(false)
    order.price = 0
  }

  function handleFinal() {
    setFinal(true)
  }

  const state: Context["state"] = {
    status,
    order,
    bgAndBorder,
    final,
  }

  const actions = {
    changeStatus: handleChangeStatus,
    addToOrder: handleAddToOrder,
    addVegetablesOrIngredients: handleAddVegetablesOrIngredients,
    final: handleFinal,
    reset: handleReset,
  }

  return <UserContext.Provider value={{state, actions}}>{children}</UserContext.Provider>
}

export {UserContext as default, UserProvider as Provider}
