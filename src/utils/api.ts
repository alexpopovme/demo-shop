import type { ApiResCategories, CategoriesData, ApiResProducts } from '@/types/api'
import type { ItemInBasket } from '@/types/state'

const storeId = '58958138'
const apiBaseUrl = `https://app.ecwid.com/api/v3/${storeId}/`
const headers = {
  accept: 'application/json',
  Authorization: 'Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD'
}

const getData = async <R>(url: string): Promise<R|null> => {
  const options = {
    method: 'GET',
    headers
  }
  try {
    const response = await fetch(url, options)
    return response.json()
  } catch (err) {
    console.error('getData error')
    return null
  }
}

export const getCategories = async (limit: number|undefined = 10): Promise<CategoriesData> => {
  const urlData = new URL('categories', apiBaseUrl)
  urlData.searchParams.set('limit', `${limit}`)
  const url = urlData.href
  const response = await getData<ApiResCategories>(url)
  if (!response) return null
  return {
    items: response.items
  }
}

export const getProducts = async (url: string): Promise<ApiResProducts> => {
  const response = await getData<ApiResProducts>(url)
  if (!response) return null
  return {
    items: response.items
  }
}

export const getProductsByCategory = async (categoryId: number): Promise<CategoriesData> => {
  const urlData = new URL('products', apiBaseUrl)
  urlData.searchParams.set('categories', `${categoryId}`)
  const url = urlData.href
  return getProducts(url)
}

export const getProductsByIDs = async (idList: ItemInBasket[]): Promise<CategoriesData> => {
  const urlData = new URL('products', apiBaseUrl)
  urlData.searchParams.set('productId', idList.map((item) => item.id).join())
  const url = urlData.href
  return getProducts(url)
}
