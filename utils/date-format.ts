export function formatCurrencyDate(value: number) {
  const date = new Date(value * 1000).toLocaleString('pt-BR')
  return date
}
