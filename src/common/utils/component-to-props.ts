export const componentToProps = (componentName: string) => {
  const [name, type] = componentName.split(/(Page|Section|Snippet)/)
  const finalName = name
    .split(/(?=[A-Z])/)
    .map((e) => e.toLowerCase())
    .join('-')
  return { type: type.toLowerCase(), name: finalName.toLowerCase() }
}
