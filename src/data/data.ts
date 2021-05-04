import {Food, Steps} from "../types/types"
import panItaliano from "../assets/panItaliano.png"
import panOregano from "../assets/panOregano.png"
import panRye from "../assets/panRye.png"
import jamon from "../assets/jamon.png"
import ketchup from "../assets/ketchup.png"
import lechuga from "../assets/lechuga.png"
import mayonesa from "../assets/mayonesa.png"
import mostaza from "../assets/mostaza.png"
import quesoCheddar from "../assets/quesoCheddar.png"
import quesoDanbo from "../assets/quesoDanbo.png"
import roastBeef from "../assets/roastBeef.png"
import tomate from "../assets/tomate.png"
import cebolla from "../assets/cebolla.png"

export const breads: Food[] = [
  {name: "Italian Bread", price: 20, url: `${panItaliano}`, value: "1"},
  {name: "Oregan + Cheese", price: 10, url: `${panOregano}`, value: "2"},
  {name: "Rye Bread", price: 30, url: `${panRye}`, value: "3"},
]

export const meats: Food[] = [
  {name: "Roast Beef", price: 20, url: `${roastBeef}`, value: "1"},
  {name: "Ham", price: 10, url: `${jamon}`, value: "2"},
  {name: "none", price: 0, url: "", value: "3"},
]

export const cheeses: Food[] = [
  {name: "Danbo", price: 10, url: `${quesoDanbo}`, value: "1"},
  {name: "Cheddar", price: 20, url: `${quesoCheddar}`, value: "2"},
  {name: "none", price: 0, url: "", value: "3"},
]

export const vegetables: Food[] = [
  {name: "Lettuce", price: 15, url: `${lechuga}`, value: "1"},
  {name: "Tomato", price: 20, url: `${tomate}`, value: "2"},
  {name: "Onion", price: 16, url: `${cebolla}`, value: "3"},
]

export const ingredients: Food[] = [
  {name: "Mayo", price: 10, url: `${mayonesa}`, value: "1"},
  {name: "Mustard", price: 15, url: `${mostaza}`, value: "2"},
  {name: "Ketchup", price: 20, url: `${ketchup}`, value: "3"},
  {name: "none", price: 0, url: "", value: "4"},
]

export const steps: Steps[] = [
  {title: "1. Bread", selection: "Select one", food: breads, name: "bread"},
  {title: "2. Meat", selection: "Select one", food: meats, name: "meat"},
  {title: "3. Cheese", selection: "Select one", food: cheeses, name: "cheese"},
  {title: "4. Vegetables", selection: "Select Multiple", food: vegetables, name: "vegetable"},
  {title: "5. Ingredients", selection: "Select Multiple", food: ingredients, name: "ingredient"},
]
