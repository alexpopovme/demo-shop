import { Category, Product } from './common'

export interface ApiResCategories {
  total:	number
  count:	number
  offset:	number
  limit:	number
  items:	[Category]
}

export interface ApiResProducts extends ApiResCategories{
  items:	[Product]
}

export interface CategoriesDataObj {
  items: ApiResCategories.items
}

export type CategoriesData = CategoriesDataObj | null
