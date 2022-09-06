import axios, { AxiosError } from 'axios'
import { DateTime } from 'luxon'

export interface INasaApod {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

export interface INasaApodError {
  code: string
  msg: string
}

export const getApodbyDate = async (dateTime: DateTime | null) => {
  let date = ''
  if (dateTime) {
    date = dateTime.toISODate()
  }
  const response = await axios.get<INasaApod>(
    `${process.env.REACT_APP_APOD_API}/`,
    {
      params: { api_key: process.env.REACT_APP_NASA_APOD_API_KEY, date },
      headers: {
        'Content-type': 'application/json',
      },
    }
  )
  return response.data
}

export const formatError = (err: AxiosError) => {
  if (err && err.response) {
    if (err.response?.data) {
      let data = err.response.data as INasaApodError
      return data
    }
  }
  console.log(err) // should send error to logging service
  return null
}
