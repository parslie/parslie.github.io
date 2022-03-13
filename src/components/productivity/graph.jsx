import { useEffect, useRef } from "react"

import useSWR from "swr"

function ActionGraph() {
  const canvasRef = useRef(null)
  const { data: stats } = useSWR("/productivity/statistics/")

  useEffect(() => {
    if (stats) {
      const width = canvasRef.current.offsetWidth
      const height = width * 9 / 16

      const dayInterval = width / (stats.day_count - 1)
      const secondInterval = height / (stats.max_duration)
      const tenMinuteInterval = height / (stats.max_duration / 60 / 10)
      
      let canvas = canvasRef.current
      canvas.width = width
      canvas.height = height
      let context = canvas.getContext("2d")

      // Draw horizontal background lines
      context.beginPath()
      for (let i = 1; i <= (stats.max_duration / 60 / 10 - 1); i++) {
        context.moveTo(0, 0 + i * tenMinuteInterval)
        context.lineTo(0 + width, 0 + i * tenMinuteInterval)
      }
      context.strokeStyle = "#888"
      context.stroke()

      // Draw vertical background lines
      context.beginPath()
      for (let i = 1; i < (stats.day_count - 1); i++) {
        context.moveTo(0 + i * dayInterval, 0)
        context.lineTo(0 + i * dayInterval, 0 + height)
      }
      context.strokeStyle = "#888"
      context.stroke()

      // Initialize drawing durations
      let graphYOffset = []
      for (let i = 0; i < stats.day_count; i++)
        graphYOffset.push(0)
      let oldGraphYOffsets = [...graphYOffset]

      // Draw durations
      for (const [category, durations] of Object.entries(stats.durations)) {
        context.beginPath()
        context.moveTo(0, 0 + oldGraphYOffsets[0])

        // Set lines of top of category
        for (let i = 0; i < durations.length; i++) {
          let x = 0 + dayInterval * i
          let y = 0 + oldGraphYOffsets[i] + durations[i] * secondInterval
          context.lineTo(x, y)
          graphYOffset[i] += durations[i] * secondInterval
        }

        // Set lines of bottom of category
        for (let i = oldGraphYOffsets.length - 1; i >= 0; i--) {
          let x = 0 + dayInterval * i
          let y = 0 + oldGraphYOffsets[i]
          context.lineTo(x, y)
        }
        context.fillStyle = (category === "Studying" ? "#f23" : "#fc1") + "a" // TODO: randomize in other way
        context.fill()

        oldGraphYOffsets = [...graphYOffset]
      }
    }
  }, [stats])
  
  return <canvas ref={canvasRef} />
}

export default ActionGraph
