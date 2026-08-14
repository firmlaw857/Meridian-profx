import { useState } from 'react'
import ChartPanel from '../components/ChartPanel'

const DURATIONS = ['5 Ticks', '10 Ticks', '1 Min', '5 Min', '15 Min', '1 Hour']

export default function TradePage({ symbol, demoBalance, setDemoBalance, accountType }) {
  const [stake, setStake] = useState(10)
  const [duration, setDuration] = useState('5 Ticks')
  const [durationOpen, setDurationOpen] = useState(false)
  const [toast, setToast] = useState(null)

  const placeTrade = (direction) => {
    if (accountType === 'demo') {
      setDemoBalance((b) => Math.max(0, b - Number(stake)))
    }
    setToast(`${direction} contract placed — ${symbol.name} · $${stake} · ${duration}`)
    setTimeout(() => setToast(null), 2500)
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden min-h-0 relative">
      <ChartPanel symbol={symbol} />

      {toast && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-base-800 border border-gold/40 text-gold-light text-xs px-4 py-2 rounded-lg shadow-lg z-10">
          {toast}
        </div>
      )}

      <div className="bg-base-900 border border-base-700 rounded-xl m-3 mt-1 p-3 shrink-0 relative">
        <div className="flex items-end gap-3">
          <div className="flex-1 min-w-0">
            <label className="text-xs text-slate-500">Stake</label>
            <input
              type="number"
              min="1"
              value={stake}
              onChange={(e) => setStake(e.target.value)}
              className="w-full bg-base-800 border border-base-700 focus:border-gold/50 outline-none rounded-lg px-3 py-2 text-sm mt-1"
            />
          </div>

          <div className="flex-1 min-w-0 relative">
            <label className="text-xs text-slate-500">Duration</label>
            <button
              onClick={() => setDurationOpen((v) => !v)}
              className="w-full text-left bg-base-800 border border-base-700 hover:border-gold/40 rounded-lg px-3 py-2 text-sm mt-1 truncate"
            >
              {duration}
            </button>
            {durationOpen && (
              <div className="absolute bottom-full mb-1 left-0 right-0 bg-base-800 border border-base-700 rounded-lg overflow-hidden z-10">
                {DURATIONS.map((d) => (
                  <button
                    key={d}
                    onClick={() => { setDuration(d); setDurationOpen(false) }}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-base-700"
                  >
                    {d}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => placeTrade('Rise')}
            className="flex-1 bg-up/20 border border-up text-up rounded-lg py-2.5 text-sm font-semibold active:scale-95 transition-transform"
          >
            Rise
          </button>
          <button
            onClick={() => placeTrade('Fall')}
            className="flex-1 bg-down/20 border border-down text-down rounded-lg py-2.5 text-sm font-semibold active:scale-95 transition-transform"
          >
            Fall
          </button>
        </div>
      </div>
    </div>
  )
}
