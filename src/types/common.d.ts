export interface Category {
  id: string
  name: string
  thumbnail: {
    url: string
    width: number
    height: number
  }
  productCount: number
}
