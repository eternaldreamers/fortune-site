import { FunctionalComponent, h } from 'preact'
import { useSelector, useDispatch } from 'react-redux'
import { actions, selectors } from '@redux/store'

import TicketFormSnippet from '@snippets/ticket-form'

const TicketSection: FunctionalComponent = () => {
  const dispatch = useDispatch()

  return (
    <section class="ticket">
      <div class="container wrapper">
        <div class="ticket__main">
          <TicketFormSnippet
            submit={(payload: any) =>
              dispatch(actions.ticketCreate(payload))
            }
          />
        </div>
      </div>
    </section>
  )
}

export default TicketSection
