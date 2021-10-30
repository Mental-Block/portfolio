import { useEffect, useRef } from 'react'

const useEvent = (
  event,
  handler,
  { enabled = true, target = document } = {}
) => {
  const handlerRef = useRef(handler)

  useEffect(() => {
    handlerRef.current = handler
  })

  useEffect(() => {
    if (!enabled) {
      return
    }

    const internalRef = (e) => handlerRef.current(e)

    target.addEventListener(event, internalRef)

    return () => {
      target.removeEventListener(event, internalRef)
    }
  }, [enabled, target, event])
}

export default useEvent
