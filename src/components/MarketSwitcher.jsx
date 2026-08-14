import { useState } from 'react'
import { X, Search } from 'lucide-react'
import { MARKET_CATEGORIES } from '../data/markets'

export default function MarketSwitcher({ onSelect, onClose }) {
  const [query, setQuery] = useState('')

  const q = query.trim().toLowerCase()
  const filtered = MARKET_CATEGORIES.map((cat) => ({
    ...cat,
    symbols: cat.symbols.filter(
      (s) => s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q)
    ),
  })).filter((cat) => cat.symbols.length > 0)

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-start justify-center pt-16 px-4">
      <div className="bg-base-900 border border-base-700 rounded-xl w-full max-w-md max-h-[75vh] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-base-700">
          <h2 className="font-display text-sm font-semibold text-gold-light">Select Market</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-white">
            <X size={18} />
          </button>
        </div>

        <div className="p-3 border-b border-base-700">
          <div className="flex items-center gap-2 bg-base-800 border border-base-700 rounded-lg px-3 py-2">
            <Search size={14} className="text-slate-500" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search markets..."
              className="bg-transparent text-sm outline-none flex-1 placeholder:text-slate-600"
            />
          </div>
        </div>

        <div className="overflow-y-auto flex-1 p-2">
          {filtered.map((cat) => (
            <div key={cat.name} className="mb-2">
              <div className="text-[10px] uppercase tracking-wide text-slate-500 px-2 py-1.5">
                {cat.name}
              </div>
              {cat.symbols.map((s) => (
                <button
                  key={s.code}
                  onClick={() => onSelect(s)}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-base-800 flex items-center justify-between group"
                >
                  <span className="text-sm text-slate-200 group-hover:text-gold-light">{s.name}</span>
                  <span className="text-xs text-slate-600">{s.code}</span>
                </button>
              ))}
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center text-sm text-slate-600 py-8">No markets found</div>
          )}
        </div>
      </div>
    </div>
  )
}
