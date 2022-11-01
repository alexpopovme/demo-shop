export interface ItemInBasket {
  id: number
  quantity: number
}

export interface State {
  activeCatIndex: number
  itemsInBasket: ItemInBasket[]
}
