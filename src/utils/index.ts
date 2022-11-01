import dompurify from 'dompurify'

export const debounce = (handler: () => void, delay: number) => {
  let timer: number
  return (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      handler.apply(null, args)
    }, delay)
  }
}

export const sanitizeStr = (str: string) => {
  return dompurify.sanitize(str);
}
