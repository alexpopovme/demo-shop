import { Category } from './common'

export interface ApiResCategories {
  total:	number
  count:	number
  offset:	number
  limit:	number
  items:	[Category]
}

export interface CategoriesDataObj {
  items: ApiResCategories.items
}

export type CategoriesData = CategoriesDataObj | null
