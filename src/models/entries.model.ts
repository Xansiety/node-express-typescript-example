export type Weather = 'sunny' | 'rainy' | 'hurricane'
export type Visibility = 'good' | 'bad'

export interface Entry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
  flightNumber: number
}
