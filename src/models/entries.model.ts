export type Weather = 'sunny' | 'rainy' | 'hurricane'
export type Visibility = 'good' | 'bad'

export interface Entry {
  id: string
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
  flightNumber: number
}

// Omit is a utility type that takes a type and a set of keys to omit from that type
export type NoSensitiveDiaryEntry = Omit<Entry, 'comment'>

export type CreateNewEntry = Omit<Entry, 'id'>

// Alternatively, we can use Pick to take a type and a set of keys to pick from that type
// export type NoSensitiveDiaryEntry = Pick<Entry, 'id' | 'date' | 'weather' | 'visibility' | 'flightNumber'>
