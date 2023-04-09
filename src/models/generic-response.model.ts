export interface IGenericResponseOptions<T> {
  ok?: boolean
  message?: string | null
  data: T
}
export interface IGenericResponse<T> {
  ok?: boolean
  message?: string | null
  data: T
}

export interface IGenericResponseErrorOptions<T> {
  ok: boolean
  message: string
  error?: T | null
}

export interface IGenericResponseError<T> {
  ok: boolean
  message: string
  error?: T | null
}
