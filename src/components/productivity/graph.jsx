import { useEffect, useRef } from "react"

import useSWR from "swr"

function drawBackgroundLines(context, x, y, xInterval, yInterval, xCount, yCount) {
  const maxX = x + (xCount - 1) * xInterval
  const maxY = y + (yCount - 1) * yInterval
  context.strokeStyle = "#999"

  // Draw horizontal lines
  context.beginPath()
  for (let i = 1; i < yCount - 1; i++)
  {
    context.moveTo(x, y + i * yInterval)
    context.lineTo(x + maxX, y + i * yInterval)
  }
  context.stroke()

  // Draw vertical lines
  context.beginPath()
  for (let i = 1; i < xCount - 1; i++)
  {
    context.moveTo(x + i * xInterval, y)
    context.lineTo(x + i * xInterval, maxY)
  }
  context.stroke()
}

function drawProductivityLines(context, heights, x, y, xInterval, yInterval) {
  context.strokeStyle = "#000"
  context.beginPath()
  context.moveTo(x, y + heights[0] * yInterval)

  for (let i = 1; i < heights.length; i++)
    context.lineTo(x + i * xInterval, y + heights[i] * yInterval)

  context.stroke()
}

function ActionGraph() {
  const canvasRef = useRef(null)
  const { data: stats } = useSWR(["/productivity/statistics/", true])

  useEffect(() => {
    if (stats) {
      const width = canvasRef.current.offsetWidth
      const height = width * 9 / 16

      const graphX = 1
      const graphY = 1
      const graphWidth = width - 2
      const graphHeight = height - 2
      const dayInterval = graphWidth / (stats.day_count - 1)
      const secondInterval = graphHeight / (stats.max_duration)
      const tenMinuteInterval = graphHeight / (stats.max_duration / 60 / 10)
      
      let canvas = canvasRef.current
      canvas.width = width
      canvas.height = height
      let context = canvas.getContext("2d")

      drawBackgroundLines(context, graphX, graphY, dayInterval, tenMinuteInterval, stats.day_count, stats.max_duration / 60 / 10 + 1)
      for (const [category, durations] of Object.entries(stats.durations))
        drawProductivityLines(context, durations, graphX, graphY, dayInterval, secondInterval)
    }
  }, [stats])
  
  return <canvas ref={canvasRef} />
}

export default ActionGraph
