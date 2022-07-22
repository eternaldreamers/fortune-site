import { FunctionalComponent, h } from 'preact'

import TicketFormSnippet from '@snippets/ticket-form'

const TicketSection: FunctionalComponent = () => {
  return (
    <section class="ticket">
      <div class="container wrapper">
        <div class="ticket__main">
          <TicketFormSnippet />
        </div>
      </div>
    </section>
  )
}

export default TicketSection
