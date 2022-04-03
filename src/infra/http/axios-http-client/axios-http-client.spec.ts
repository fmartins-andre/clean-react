import { faker } from '@faker-js/faker'
import axios from 'axios'

import { HttpPostParams } from '@/data/protocols/http'

import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResults = {
  data: faker.helpers.contextualCard(),
  status: faker.datatype.number({ min: 100, max: 599 })
}
mockedAxios.post.mockResolvedValue(mockedAxiosResults)

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.helpers.contextualCard()
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return the correct statusCode and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockPostRequest())
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResults.status,
      body: mockedAxiosResults.data
    })
  })
})
