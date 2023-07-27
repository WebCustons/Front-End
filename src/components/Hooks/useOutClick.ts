import { useEffect, useRef } from "react"

export const useOutClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function modalOutClick(e: MouseEvent) {
      const target = e.target as HTMLDivElement
      const element = ref.current

      if (!element) {
        return null
      }

      if (!element.contains(target)) {
        callback()
      }
    }
    window.addEventListener("mousedown", modalOutClick)

    return () => {
      window.removeEventListener("mousedown", modalOutClick)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}
