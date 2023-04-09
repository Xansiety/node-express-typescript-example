import {
  IGenericResponseOptions,
  IGenericResponse,
  IGenericResponseErrorOptions,
  IGenericResponseError
} from '../models/generic-response.model'

export const genericResponse = <T>({
  ok,
  message = null,
  data
}: IGenericResponseOptions<T>): IGenericResponse<T> => {
  return {
    data,
    message,
    ok
  }
}

export const genericResponseError = <T>({
  ok,
  message,
  error
}: IGenericResponseErrorOptions<T>): IGenericResponseError<T> => {
  return {
    error,
    message,
    ok
  }
}
