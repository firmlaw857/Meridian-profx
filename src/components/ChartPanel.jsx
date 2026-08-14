import { useEffect, useRef } from 'react'
import { createChart, ColorType } from 'lightweight-charts'

function generateDemoCandles(count = 150) {
  const data = []
  let time = Math.floor(Date.now() / 1000) - count * 60
  let price = 100 + Math.random() * 20

  for (let i = 0; i < count; i++) {
    const open = price
    const change = (Math.random() - 0.5) * 2
    const close = open + change
    const high = Math.max(open, close) + Math.random() * 0.8
    const low = Math.min(open, close) - Math.random() * 0.8

    data.push({ time, open, high, low, close })
    price = close
    time += 60
  }
  return data
}

export default function ChartPanel({ symbol }) {
  const containerRef = useRef(null)
  const chartRef = useRef(null)
  const seriesRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const chart = createChart(containerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: 'transparent' },
        textColor: '#8a95ab',
        fontFamily: 'Inter, system-ui, sans-serif',
      },
      grid: {
        vertLines: { color: 'rgba(28, 39, 64, 0.6)' },
        horzLines: { color: 'rgba(28, 39, 64, 0.6)' },
      },
      crosshair: {
        vertLine: { color: '#d4af37', width: 1, style: 2 },
        horzLine: { color: '#d4af37', width: 1, style: 2 },
      },
      rightPriceScale: { borderColor: '#1c2740' },
      timeScale: { borderColor: '#1c2740', timeVisible: true },
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
    })

    const series = chart.addCandlestickSeries({
      upColor: '#22c55e',
      downColor: '#ef4444',
      borderVisible: false,
      wickUpColor: '#22c55e',
      wickDownColor: '#ef4444',
    })

    seriesRef.current = series
    chartRef.current = chart
    series.setData(generateDemoCandles())
    chart.timeScale().fitContent()

    const handleResize = () => {
      if (!containerRef.current) return
      chart.applyOptions({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      })
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      chart.remove()
    }
  }, [])

  useEffect(() => {
    if (seriesRef.current) {
      seriesRef.current.setData(generateDemoCandles())
      chartRef.current?.timeScale().fitContent()
    }
  }, [symbol?.code])

  return (
    <div className="flex-1 bg-base-950 rounded-xl border border-base-700 m-3 mb-2 min-h-0 overflow-hidden">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  )
}
