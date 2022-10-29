export const debounce = (handler: () => void, delay: number) => {
  let timer: number
  return (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      handler.apply(null, args)
    }, delay)
  }
}
