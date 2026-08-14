import { ChevronDown, Wifi } from 'lucide-react'

export default function TopBar({ symbol, onOpenSwitcher, accountType, setAccountType, balance }) {
  return (
    <div className="h-14 bg-base-900 border-b border-base-700 flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenSwitcher}
          className="flex items-center gap-2 bg-base-800 hover:bg-base-700 px-3 py-2 rounded-lg border border-base-700 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-up"></span>
          <span className="text-sm font-medium">{symbol.name}</span>
          <ChevronDown size={14} className="text-slate-500" />
        </button>
        <div className="flex items-center gap-1 text-xs text-slate-500 px-2">
          <Wifi size={12} className="text-up" />
          <span>Live</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex bg-base-800 rounded-lg p-1 border border-base-700">
          <button
            onClick={() => setAccountType('demo')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium ${accountType === 'demo' ? 'bg-base-700 text-gold' : 'text-slate-500'}`}
          >
            Demo
          </button>
          <button
            onClick={() => setAccountType('real')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium ${accountType === 'real' ? 'bg-base-700 text-gold' : 'text-slate-500'}`}
          >
            Real
          </button>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-slate-500">Balance</div>
          <div className="text-sm font-display font-semibold text-gold-light">
            ${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
        </div>
      </div>
    </div>
  )
}
