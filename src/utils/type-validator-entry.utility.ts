import { Visibility, Weather } from '../models'

export const isString = (string: String): boolean =>
  typeof string === 'string' || string instanceof String

export const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

export const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

export const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

export const isNumber = (param: any): boolean => {
  return typeof param === 'number'
}
