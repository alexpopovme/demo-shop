import { Category, Product } from './common'

export interface ApiResCategories {
  total:	number
  count:	number
  offset:	number
  limit:	number
  items:	[Category]
}

export interface ApiResProducts {
  items:	Product[]
}

export interface CategoriesData {
  items: ApiResCategories.items
}
