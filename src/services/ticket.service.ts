import * as _ from 'lodash'
import { inject } from 'inversify'
import { provide } from 'inversify-binding-decorators'

import { TicketRespository } from '@repositories'

@provide(TicketService)
export class TicketService {
  constructor(
    @inject(TicketRespository)
    private readonly ticketRepository: TicketRespository
  ) {}

  public async getOne(id: string) {
    return await this.ticketRepository.getOne(id)
  }

  public async getMany() {
    return this.ticketRepository.getMany()
  }

  public async findMany(query: any) {
    return this.ticketRepository.findMany(query)
  }

  public async create(dto: any) {
    return this.ticketRepository.create(dto)
  }
}
