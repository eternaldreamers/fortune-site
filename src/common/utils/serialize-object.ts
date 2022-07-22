export const serializeObject = (form: any) => {
  let data: any = {}
  Array.prototype.slice.call(form.elements).forEach((field) => {
    if (
      !field.name ||
      field.disabled ||
      ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1
    )
      return
    if (field.type === 'select-multiple') {
      Array.prototype.slice.call(field.options).forEach((option) => {
        if (!option.selected) return
        data[field.name] = option.value
      })
      return
    }
    if (['checkbox', 'radio'].indexOf(field.type) > -1 && !field.checked) return
    data[field.name] = field.value
  })
  return data
}
