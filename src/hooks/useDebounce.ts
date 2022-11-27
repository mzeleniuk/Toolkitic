import { useEffect, useState } from 'react'

export function useDebounce(value: string, delay: number = 1000): string {
  const [debounced, setDebounced] = useState<string>(value)

  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timeout)
  }, [value, delay])

  return debounced
}
