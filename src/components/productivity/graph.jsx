import { useEffect, useRef } from "react"

import useSWR from "swr"

function drawGraph(context, x, y, width, height, stats) {
  const borderSize = 1
  const innerX = x + borderSize
  const innerY = y + borderSize
  const innerWidth = width - borderSize * 2
  const innerHeight = height - borderSize * 2

  const dayInterval = innerWidth / (stats.day_count - 1)
  const secondInterval = innerHeight / (stats.max_duration)
  const tenMinuteInterval = innerHeight / (stats.max_duration / (60 * 10))

  context.lineWidth = borderSize
  context.strokeStyle = "#000000"

  // Draw border
  context.beginPath()
  context.rect(x + borderSize / 2, y + borderSize / 2, width - borderSize, height - borderSize)
  context.stroke()

  context.lineWidth = 1
  context.strokeStyle = "#999999"

  // Draw horizontal lines
  context.beginPath()
  for (let line = 1; line < stats.max_duration / (60 * 10); line++) {
    context.moveTo(innerX, innerY + tenMinuteInterval * line)
    context.lineTo(innerX + innerWidth, innerY + tenMinuteInterval * line)
  }
  context.stroke()

  // Draw vertical lines
  context.beginPath()
  for (let line = 1; line < (stats.day_count - 1); line++) {
    context.moveTo(innerX + dayInterval * line, innerY)
    context.lineTo(innerX + dayInterval * line, innerY + innerHeight)
  }
  context.stroke()

  // Initialize drawing durations
  let yOffsets = []
  for (let i = 0; i < stats.day_count; i++)
    yOffsets.push(0)
  let oldYOffsets = [...yOffsets]

  // Draw durations
  for (const category of stats.categories) {
    context.beginPath()
    context.moveTo(innerX, innerY + innerHeight + oldYOffsets[0])

    // Set lines of top of category
    for (let i = 0; i < stats.day_count; i++) {
      let x = innerX + dayInterval * i
      let y = innerY + innerHeight + oldYOffsets[i] - category.durations[i] * secondInterval
      context.lineTo(x, y)
      yOffsets[i] -= category.durations[i] * secondInterval
    }

    // Set lines of bottom of category
    for (let i = oldYOffsets.length - 1; i >= 0; i--) {
      let x = innerX + dayInterval * i
      let y = innerY + innerHeight + oldYOffsets[i]
      context.lineTo(x, y)
    }

    context.fillStyle = category.color + "aa"
    context.fill()
    oldYOffsets = [...yOffsets]
  }
}

function ActionGraph() {
  const canvasRef = useRef(null)
  const { data: stats } = useSWR("/productivity/statistics/")

  useEffect(() => {
    if (stats) {
      const width = canvasRef.current.offsetWidth
      const height = width * 9 / 16
      
      const canvas = canvasRef.current
      canvas.width = width
      canvas.height = height
      const context = canvas.getContext("2d")

      const fontSize = 12
      const fontMargin = 12

      const topMargin = fontSize
      const rightMargin = fontSize * 0.3
      const bottomMargin = fontSize + fontMargin
      const leftMargin = fontMargin + fontSize * 1.7

      const dayInterval = (width - rightMargin - leftMargin) / (stats.day_count - 1)
      const tenMinuteInterval = (height - topMargin - bottomMargin) / (stats.max_duration / (60 * 10))

      drawGraph(context, leftMargin, topMargin, width - leftMargin - rightMargin, height - bottomMargin - topMargin, stats)
      context.fillStyle = "#000000"
      context.font = fontSize + "px sans-serif"

      // Draw y labels
      context.textAlign = "right"
      context.textBaseline = "middle"
      for (let i = 0; i < stats.max_duration / (60 * 10) + 1; i++) {
        let y = height - bottomMargin - tenMinuteInterval * i
        context.fillText(i * 10, leftMargin - fontMargin, y)
      }

      // Draw x labels
      context.textAlign = "center"
      context.textBaseline = "top"
      for (let i = 0; i < stats.day_count; i++) {
        let x = leftMargin + dayInterval * i
        context.fillText(i - 13, x, height - bottomMargin + fontMargin)
      }
    }
  }, [stats])
  
  return <canvas ref={canvasRef} />
}

export default ActionGraph
