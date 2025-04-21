"use client"

import { useEffect, useRef } from "react"

// Dữ liệu mẫu điểm chuẩn
const diemChuanData = {
  labels: ["2018", "2019", "2020", "2021", "2022"],
  datasets: [
    {
      label: "Công nghệ thông tin",
      data: [19.5, 20.5, 21.5, 22.75, 23.5],
      color: "#2563eb",
    },
    {
      label: "Công nghệ phần mềm",
      data: [20.0, 21.0, 22.25, 23.5, 24.2],
      color: "#16a34a",
    },
    {
      label: "Hệ thống thông tin",
      data: [19.0, 20.0, 21.0, 22.0, 22.8],
      color: "#ea580c",
    },
    {
      label: "Kỹ thuật máy tính",
      data: [18.5, 19.5, 20.5, 21.8, 22.5],
      color: "#9333ea",
    },
  ],
}

export function DiemChuanChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Thiết lập kích thước canvas
    const canvas = canvasRef.current
    canvas.width = canvas.offsetWidth
    canvas.height = 400

    // Vẽ biểu đồ
    drawChart(ctx, canvas.width, canvas.height)

    // Vẽ lại biểu đồ khi resize
    const handleResize = () => {
      if (!canvasRef.current || !ctx) return
      canvas.width = canvas.offsetWidth
      drawChart(ctx, canvas.width, canvas.height)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const drawChart = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Xóa canvas
    ctx.clearRect(0, 0, width, height)

    // Thiết lập padding
    const padding = { top: 40, right: 30, bottom: 60, left: 60 }
    const chartWidth = width - padding.left - padding.right
    const chartHeight = height - padding.top - padding.bottom

    // Vẽ trục X
    ctx.beginPath()
    ctx.moveTo(padding.left, height - padding.bottom)
    ctx.lineTo(width - padding.right, height - padding.bottom)
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1
    ctx.stroke()

    // Vẽ trục Y
    ctx.beginPath()
    ctx.moveTo(padding.left, padding.top)
    ctx.lineTo(padding.left, height - padding.bottom)
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1
    ctx.stroke()

    // Vẽ nhãn trục X
    const xStep = chartWidth / (diemChuanData.labels.length - 1)
    diemChuanData.labels.forEach((label, i) => {
      const x = padding.left + i * xStep
      const y = height - padding.bottom + 20

      ctx.fillStyle = "#4b5563"
      ctx.font = "14px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(label, x, y)

      // Vẽ đường dọc
      ctx.beginPath()
      ctx.moveTo(x, height - padding.bottom)
      ctx.lineTo(x, padding.top)
      ctx.strokeStyle = "#f3f4f6"
      ctx.lineWidth = 1
      ctx.stroke()
    })

    // Tìm giá trị min, max của dữ liệu
    const minValue = 18
    const maxValue = 25

    // Vẽ nhãn trục Y
    const yStep = chartHeight / (maxValue - minValue)
    for (let i = minValue; i <= maxValue; i++) {
      const x = padding.left - 10
      const y = height - padding.bottom - (i - minValue) * yStep

      ctx.fillStyle = "#4b5563"
      ctx.font = "14px sans-serif"
      ctx.textAlign = "right"
      ctx.fillText(i.toString(), x, y + 5)

      // Vẽ đường ngang
      ctx.beginPath()
      ctx.moveTo(padding.left, y)
      ctx.lineTo(width - padding.right, y)
      ctx.strokeStyle = "#f3f4f6"
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Vẽ dữ liệu
    diemChuanData.datasets.forEach((dataset) => {
      ctx.beginPath()
      dataset.data.forEach((value, i) => {
        const x = padding.left + i * xStep
        const y = height - padding.bottom - (value - minValue) * yStep

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      ctx.strokeStyle = dataset.color
      ctx.lineWidth = 3
      ctx.stroke()

      // Vẽ điểm
      dataset.data.forEach((value, i) => {
        const x = padding.left + i * xStep
        const y = height - padding.bottom - (value - minValue) * yStep

        ctx.beginPath()
        ctx.arc(x, y, 5, 0, Math.PI * 2)
        ctx.fillStyle = dataset.color
        ctx.fill()
        ctx.strokeStyle = "#ffffff"
        ctx.lineWidth = 2
        ctx.stroke()
      })
    })

    // Vẽ tiêu đề
    ctx.fillStyle = "#111827"
    ctx.font = "bold 16px sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("Biểu đồ điểm chuẩn các ngành qua các năm", width / 2, 20)

    // Vẽ chú thích
    const legendX = padding.left
    const legendY = height - 20
    const legendItemWidth = chartWidth / diemChuanData.datasets.length

    diemChuanData.datasets.forEach((dataset, i) => {
      const x = legendX + i * legendItemWidth

      // Vẽ đường màu
      ctx.beginPath()
      ctx.moveTo(x, legendY)
      ctx.lineTo(x + 20, legendY)
      ctx.strokeStyle = dataset.color
      ctx.lineWidth = 3
      ctx.stroke()

      // Vẽ điểm
      ctx.beginPath()
      ctx.arc(x + 10, legendY, 4, 0, Math.PI * 2)
      ctx.fillStyle = dataset.color
      ctx.fill()
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 1.5
      ctx.stroke()

      // Vẽ nhãn
      ctx.fillStyle = "#4b5563"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "left"
      ctx.fillText(dataset.label, x + 25, legendY + 4)
    })
  }

  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Biểu đồ điểm chuẩn</h2>

        <div className="w-full h-[400px]">
          <canvas ref={canvasRef} className="w-full h-full"></canvas>
        </div>
      </div>
    </div>
  )
}
