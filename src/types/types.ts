export interface Food {
  name: string
  price: number
  url: string
  value: string
}

export enum Status {
  Bread = "bread",
  Meat = "meat",
  Cheese = "cheese",
  Vegetables = "vegetables",
  Ingredients = "ingredients",
  Final = "final",
}

export interface Order {
  bread: Food
  meat: Food
  cheese: Food
  vegetables: Food[]
  ingredients: Food
}

export interface bgAndBorder {
  bg: string
  border: string
}
