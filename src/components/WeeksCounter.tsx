'use client'

import { useEffect, useState } from 'react'

interface WeeksData {
  weeksLeft: number;
  totalLived: number;
  lastUpdated: string;
}

export function WeeksCounter() {
  const [weeksData, setWeeksData] = useState<WeeksData | null>(null)

  useEffect(() => {
    const fetchWeeks = async () => {
      try {
        const response = await fetch('/api/weeks')
        const data = await response.json()
        setWeeksData(data)
      } catch (error) {
        console.error('Failed to fetch weeks data:', error)
      }
    }

    fetchWeeks()

    // Fetch new data every hour
    const interval = setInterval(fetchWeeks, 60 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (!weeksData) {
    return <div>Loading...</div>
  }

  return (
    <div className="countdown-container">
      <h2 className="weeks-count mb-0">{weeksData.weeksLeft} weeks left</h2>
      <p className="weeks-explanation mt-0 mb-6">(assuming i live till 80 - that&apos;s 4160 weeks)</p>
    </div>
  )
} 