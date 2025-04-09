
export interface Property {
  title: string
  description: string
  location: string
  price: number
  type: 'apartment' | 'house' | 'land'
  bedrooms: number
  bathrooms: number
  area: number
}