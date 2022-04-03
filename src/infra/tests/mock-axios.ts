import faker from '@faker-js/faker'
import axios from 'axios'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue({
    data: faker.helpers.contextualCard(),
    status: faker.datatype.number({ min: 100, max: 599 })
  })
  return mockedAxios
}
