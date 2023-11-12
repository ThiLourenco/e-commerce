export function formatId(value: string) {
  const data = value.substring(18, 24)

  return `#${data}`
}
