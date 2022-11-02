import type { ApiResCategories, CategoriesData, ApiResProducts } from '@/types/api'
import type { ItemInBasket } from '@/types/state'
import type { Product } from '@/types/common'

const storeId = '58958138'
const apiBaseUrl = `https://app.ecwid.com/api/v3/${storeId}/`
const headers = {
  accept: 'application/json',
  Authorization: 'Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD'
}

const getData = async <R>(url: string): Promise<R|undefined> => {
  const options = {
    method: 'GET',
    headers
  }
  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  } catch (err) {
    console.log('API error:')
    console.error(err)
  }
}

export const getCategories = async (limit: number|undefined = 10): Promise<CategoriesData|undefined> => {
  const urlData = new URL('categories', apiBaseUrl)
  urlData.searchParams.set('limit', `${limit}`)
  const url = urlData.href
  const response = await getData<ApiResCategories>(url)
  if (!response) return
  return {
    items: response.items
  }
}

export const getProducts = async (url: string): Promise<ApiResProducts|undefined> => {
  const response = await getData<ApiResProducts>(url)
  if (!response) return
  return {
    items: response.items
  }
}

export const getProductsByCategory = async (categoryId: number): Promise<ApiResProducts|undefined> => {
  const urlData = new URL('products', apiBaseUrl)
  urlData.searchParams.set('categories', `${categoryId}`)
  const url = urlData.href
  return getProducts(url)
}

export const getProductsByIDs = async (idList: ItemInBasket[]): Promise<ApiResProducts|undefined> => {
  const urlData = new URL('products', apiBaseUrl)
  urlData.searchParams.set('productId', idList.map((item) => item.id).join())
  const url = urlData.href
  return getProducts(url)
}

export const getProductByIDs = async (id: number): Promise<Product|undefined> => {
  const urlData = new URL(`products/${id}`, apiBaseUrl)
  const url = urlData.href
  return getData<Product>(url)
}
