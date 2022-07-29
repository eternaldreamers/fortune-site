import { createRef, FunctionalComponent, h } from 'preact'
import { useEffect } from 'preact/hooks'

import defaultHoc from '@hocs/default'

const IndexPage: FunctionalComponent = () => {
  const fcRef = createRef()

  useEffect(() => {
    fcRef.current.addEventListener('click', () => {
      const classList = fcRef.current.classList
      const spawned = 'spawned'
      const opened = 'opened'

      if (classList.contains(spawned)) {
        classList.remove(spawned)
        classList.add(opened)
      } else {
        classList.remove(opened)
        classList.add(spawned)
      }
    })
  }, [])

  return (
    <div class="container wrapper">
      <div className="fortune-cookie">
        <div class="fortune-cookie__wrapper">
          <button
            ref={fcRef}
            class="fortune-cookie__button spawned"
            type="button"
          >
            <div class="fortune-cookie__part left"></div>
            <div class="fortune-cookie__part right"></div>
            <div class="fortune-cookie__crumbs">
              <div class="fortune-cookie__crumb"></div>
              <div class="fortune-cookie__crumb"></div>
              <div class="fortune-cookie__crumb"></div>
              <div class="fortune-cookie__crumb"></div>
              <div class="fortune-cookie__crumb"></div>
              <div class="fortune-cookie__crumb"></div>
              <div class="fortune-cookie__crumb"></div>
              <div class="fortune-cookie__crumb"></div>
            </div>
            <div class="fortune-cookie__fortune">
              <p class="fortune-cookie__fortune-text">No fortune</p>
              <p class="fortune-cookie__lucky-numbers">
                Lucky Numbers <span>?</span>
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
