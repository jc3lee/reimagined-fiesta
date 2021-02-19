import { useEffect, useState } from "react"
import readingTime from "reading-time"

export default function useReadTime(readTimeRef) {
  const [readTime, setReadTime] = useState("")
  useEffect(() => {
    setReadTime(readingTime(readTimeRef.current.innerText).text)
  }, [readTimeRef])
  return {
    readTime,
  }
}