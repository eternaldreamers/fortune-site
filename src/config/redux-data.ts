import { TicketService } from '@services'

export default [
  {
    key: 'ticket',
    type: TicketService,
    methods: ['getOne', 'getMany', 'findMany', 'create'],
  },
]
