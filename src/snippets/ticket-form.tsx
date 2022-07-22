import { serializeObject } from '@common/utils/serialize-object'
import { FunctionalComponent, h } from 'preact'

type ChildrenProps = {
  submit: any
}

const TicketFormSnippet: FunctionalComponent<ChildrenProps> = ({
  submit,
}: ChildrenProps) => {
  const onSubmit = (e: any) => {
    e.preventDefault()
    const payload = serializeObject(e.target)
    submit(payload)
  }

  return (
    <div class="ticket-form">
      <form onSubmit={onSubmit} class="form">
        <div class="form__section">
          <div class="select-field select-field--base">
            <select class="select-field__select" name="type" required>
              {['White', 'Gray', 'Black'].map((type: string, idx: number) => (
                <option key={idx} value={idx}>
                  {type}
                </option>
              ))}
            </select>

            <span class="select-field__dropdown-icon">
              <img src="/icons/icon-dropdown.svg" />
            </span>
          </div>
        </div>

        <div class="form__section">
          <div class="input-field input-field--textarea">
            <textarea
              id="ticket-message"
              name="message"
              rows={3}
              class="input-field__input"
              required
            ></textarea>

            <label for="ticket-message" class="input-field__label">
              Message
            </label>
          </div>
          <div data-form-error="message" class="form__error"></div>
        </div>

        <div class="form__section">
          <div class="input-field">
            <input
              id="ticket-autor"
              name="autor"
              class="input-field__input"
              required
            />

            <label for="ticket-autor" class="input-field__label">
              Autor
            </label>
          </div>
          <div data-form-error="autor" class="form__error"></div>
        </div>

        <div class="form__section">
          <button
            type="submit"
            class="button button--primary button--large button--expand"
          >
            Submit
            <span class="button__spinner">
              <div class="spinner spinner--small spinner--light"></div>
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default TicketFormSnippet
