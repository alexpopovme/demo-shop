import type { Product } from '@/types/common'

export interface ItemInBasket {
  id: number
  quantity: number
}

export interface State {
  activeCatIndex: number
  itemsInBasket: ItemInBasket[]
  activeProduct?: Product
  categoriesVisibility: boolean
}
