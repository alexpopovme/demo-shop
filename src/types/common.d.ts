export interface Category {
  id: number
  name: string
  thumbnail: {
    url: string
    width: number
    height: number
  }
  productCount: number
}

export interface Product {
  id: number
  name: string
  description: string
  thumbnailUrl: string
  hdThumbnailUrl: string
  price: number
  defaultDisplayedPriceFormatted: string
}
