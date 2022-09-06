import axios, { AxiosError, AxiosResponse } from 'axios'
import { DateTime } from 'luxon'

import { formatError, getApodbyDate } from './ApiClient'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('getApodbyDate', () => {
  describe('when API call is successful', () => {
    it('should return apod', async () => {
      const testDate = DateTime.now()
      const response = {
        data: {
          copyright: 'Tunc Tezel',
          date: '2022-08-19',
          explanation: 'Blah',
          hdurl: 'https://apod.nasa.gov/apod/image/2208/Saturn1993-2022Lb.jpg',
          media_type: 'image',
          service_version: 'v1',
          title: 'Saturn: 1993 - 2022',
          url: 'https://apod.nasa.gov/apod/image/2208/Saturn1993-2022Lb1024.jpg',
        },
      }

      mockedAxios.get.mockResolvedValueOnce(response)

      const result = await getApodbyDate(testDate)

      expect(axios.get).toHaveBeenCalledWith(
        `${process.env.REACT_APP_APOD_API}/`,
        {
          params: {
            api_key: process.env.REACT_APP_NASA_APOD_API_KEY,
            date: testDate.toISODate(),
          },
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      expect(result).toEqual(response.data)
    })
  })

  describe('when API call fails', () => {
    it('should return an error', async () => {
      const response: AxiosResponse = {
        data: {
          msg: 'Bad',
          code: '400',
        },
        status: 400,
      } as AxiosResponse
      const axiosError = {
        config: {},
        request: {},
        response: response,
      } as AxiosError<any>

      mockedAxios.get.mockResolvedValueOnce(response)

      const result = await getApodbyDate(null)

      expect(axios.get).toHaveBeenCalledWith(
        `${process.env.REACT_APP_APOD_API}/`,
        {
          params: {
            api_key: process.env.REACT_APP_NASA_APOD_API_KEY,
            date: '',
          },
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      expect(result).toEqual(response.data)
    })
  })
})

describe('formatError', () => {
  it('should format an AxiosError', async () => {
    const response: AxiosResponse = {
      data: {
        msg: 'Bad',
        code: '400',
      },
      status: 400,
    } as AxiosResponse
    const axiosError = {
      config: {},
      request: {},
      response: response,
    } as AxiosError<any>
    let result = formatError(axiosError)
    expect(result).toEqual(axiosError.response?.data)
  })
  it('should console.log an unknown error', async () => {
    console.log = jest.fn() // So we don't see console logs in test runs
    const logSpy = jest.spyOn(console, 'log') // So Typescript is happy without hacking
    const axiosError = {
      config: {},
      request: {},
      response: {},
    } as AxiosError<any>
    let result = formatError(axiosError)
    expect(result).toEqual(null)
    expect(logSpy).toHaveBeenCalledWith(axiosError)
  })
})
