import type { ApiResCategories, CategoriesData } from '@/types/api'
import { ApiResProducts } from '@/types/api'

const storeId = '58958138'
const apiUrl = `https://app.ecwid.com/api/v3/${storeId}/`
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
  const url = `${apiUrl}categories?limit=${limit}`
  const response = await getData<ApiResCategories>(url)
  if (!response) return null
  const fake = {
    items: [{"id":104994286,"orderBy":10,"hdThumbnailUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208510042.jpg","thumbnailUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208495045.jpg","originalImageUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208495044.jpg","imageUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208510043.jpg","originalImage":{"url":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208495044.jpg","width":555,"height":557},"thumbnail":{"url":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208495045.jpg","width":399,"height":400},"borderInfo":{"dominatingColor":{"red":255,"green":255,"blue":255,"alpha":255},"homogeneity":true},"name":"Шерсть","nameTranslated":{"ru":"Шерсть"},"url":"https://store58958138.company.site/products/Sherst-c104994286","productCount":2,"description":"","descriptionTranslated":{"ru":""},"enabled":true,"isSampleCategory":false},
      {"id":104994287,"orderBy":20,"hdThumbnailUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208511099.jpg","thumbnailUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509122.jpg","originalImageUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509121.jpg","imageUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208511100.jpg","originalImage":{"url":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509121.jpg","width":395,"height":396},"thumbnail":{"url":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509122.jpg","width":395,"height":396},"borderInfo":{"dominatingColor":{"red":255,"green":255,"blue":255,"alpha":255},"homogeneity":true},"name":"Хлопок","nameTranslated":{"ru":"Хлопок"},"url":"https://store58958138.company.site/products/Khlopok-c104994287","productCount":3,"description":"","descriptionTranslated":{"ru":""},"enabled":true,"isSampleCategory":false},
      {"id":104994287,"orderBy":20,"hdThumbnailUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208511099.jpg","thumbnailUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509122.jpg","originalImageUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509121.jpg","imageUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208511100.jpg","originalImage":{"url":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509121.jpg","width":395,"height":396},"thumbnail":{"url":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509122.jpg","width":395,"height":396},"borderInfo":{"dominatingColor":{"red":255,"green":255,"blue":255,"alpha":255},"homogeneity":true},"name":"Хлопок","nameTranslated":{"ru":"Хлопок"},"url":"https://store58958138.company.site/products/Khlopok-c104994287","productCount":3,"description":"","descriptionTranslated":{"ru":""},"enabled":true,"isSampleCategory":false},
      {"id":104994287,"orderBy":20,"hdThumbnailUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208511099.jpg","thumbnailUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509122.jpg","originalImageUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509121.jpg","imageUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208511100.jpg","originalImage":{"url":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509121.jpg","width":395,"height":396},"thumbnail":{"url":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509122.jpg","width":395,"height":396},"borderInfo":{"dominatingColor":{"red":255,"green":255,"blue":255,"alpha":255},"homogeneity":true},"name":"Хлопок","nameTranslated":{"ru":"Хлопок"},"url":"https://store58958138.company.site/products/Khlopok-c104994287","productCount":3,"description":"","descriptionTranslated":{"ru":""},"enabled":true,"isSampleCategory":false},
      {"id":104994287,"orderBy":20,"hdThumbnailUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208511099.jpg","thumbnailUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509122.jpg","originalImageUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509121.jpg","imageUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208511100.jpg","originalImage":{"url":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509121.jpg","width":395,"height":396},"thumbnail":{"url":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509122.jpg","width":395,"height":396},"borderInfo":{"dominatingColor":{"red":255,"green":255,"blue":255,"alpha":255},"homogeneity":true},"name":"Хлопок","nameTranslated":{"ru":"Хлопок"},"url":"https://store58958138.company.site/products/Khlopok-c104994287","productCount":3,"description":"","descriptionTranslated":{"ru":""},"enabled":true,"isSampleCategory":false} ,
      {"id":104994287,"orderBy":20,"hdThumbnailUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208511099.jpg","thumbnailUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509122.jpg","originalImageUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509121.jpg","imageUrl":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208511100.jpg","originalImage":{"url":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509121.jpg","width":395,"height":396},"thumbnail":{"url":"https://d2j6dbq0eux0bg.cloudfront.net/images/58958138/2208509122.jpg","width":395,"height":396},"borderInfo":{"dominatingColor":{"red":255,"green":255,"blue":255,"alpha":255},"homogeneity":true},"name":"Хлопок","nameTranslated":{"ru":"Хлопок"},"url":"https://store58958138.company.site/products/Khlopok-c104994287","productCount":3,"description":"","descriptionTranslated":{"ru":""},"enabled":true,"isSampleCategory":false}
    ]
  }
  return {
    items: response.items
  }
}

export const getProductsByCategory = async (categoryId: number): Promise<CategoriesData> => {
  const url = `${apiUrl}products?categories=${categoryId}`
  const response = await getData<ApiResProducts>(url)
  if (!response) return null
  return {
    items: response.items
  }
}
