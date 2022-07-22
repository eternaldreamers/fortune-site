import * as _ from 'lodash'
import { provide } from 'inversify-binding-decorators'
import { AxiosInstance } from 'axios'

import { HttpClient } from '@common/decorators/client.decorator'

@provide(TicketRespository)
export class TicketRespository {
  constructor(@HttpClient private httpClient: AxiosInstance) {}

  public async getOne(id: string) {
    return this.httpClient.get(`/${id}`)
  }

  public async getMany() {
    return this.httpClient.get(`/`)
  }

  public async findMany(query: any) {
    return this.httpClient.get(`/${query}`)
  }

  public async create(dto: any) {
    console.log(dto)
    return {}
    // return this.httpClient.post('/', dto)
  }
}
