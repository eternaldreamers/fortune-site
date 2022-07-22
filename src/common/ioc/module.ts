import { ContainerModule, interfaces } from 'inversify'
import { AxiosInstance } from 'axios'

import { TicketService } from '@services'
import { TicketRespository } from '@repositories'
import { TYPES } from '@common/constants/types'
import axiosInstance from '@config/axios.config'

const IoCModule = () =>
  new ContainerModule((bind: interfaces.Bind, _: interfaces.Unbind) => {
    bind<AxiosInstance>(TYPES.HttpClient).toConstantValue(axiosInstance())

    bind<TicketService>(TicketService).to(TicketService)

    bind<TicketRespository>(TicketRespository).to(TicketRespository)
  })

export default IoCModule
