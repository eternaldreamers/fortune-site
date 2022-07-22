import { FunctionalComponent, h } from 'preact'

import secureHoc from '@hocs/secure'

import TicketSection from '@sections/ticket'

const TicketPage: FunctionalComponent = () => {
  return (
    <div class="main">
      <div class="main__sections main__sections--space">
        <TicketSection />
      </div>
    </div>
  )
}

export default secureHoc(TicketPage)
