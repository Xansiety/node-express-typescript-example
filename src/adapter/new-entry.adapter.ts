import { CreateNewEntry, Weather } from '../models'
import { Visibility } from '../models/entries.model'
import {
  isNumber,
  isString,
  isVisibility,
  isWeather
} from '../utils/type-validator-entry.utility'

const parseComment = (comment: any): string => {
  if (!isString(comment)) {
    throw new Error('Incorrect or missing comment')
  }
  return comment
}

const parseDate = (date: any): string => {
  if (!isString(date)) {
    throw new Error('Incorrect or missing date')
  }
  return date
}

const parseWeather = (weather: any): Weather => {
  if (!isString(weather)) {
    throw new Error('Incorrect or missing weather')
  }
  if (!isWeather(weather)) {
    throw new Error('Incorrect option weather')
  }
  return weather
}

const parseVisibility = (visibility: any): Visibility => {
  if (!isString(visibility)) {
    throw new Error('Incorrect or missing visibility')
  }
  if (!isVisibility(visibility)) {
    throw new Error('Incorrect option visibility')
  }
  return visibility
}

const parseFlightNumber = (flightNumber: any): number => {
  if (!isNumber(flightNumber)) {
    throw new Error('Incorrect or missing flightNumber')
  }
  return flightNumber
}

export const toNewDiaryEntryAdapter = (object: any): CreateNewEntry => {
  return {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    flightNumber: parseFlightNumber(object.flightNumber)
  }
}
