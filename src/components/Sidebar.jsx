import { LineChart, BarChart3, Bot, Newspaper, History, Wallet, Settings, LogOut } from 'lucide-react'

const navItems = [
  { id: 'trade', icon: LineChart, label: 'Trade' },
  { id: 'analysis', icon: BarChart3, label: 'Analysis' },
  { id: 'bots', icon: Bot, label: 'Bots' },
  { id: 'signals', icon: Newspaper, label: 'Signals' },
  { id: 'history', icon: History, label: 'History' },
  { id: 'wallet', icon: Wallet, label: 'Wallet' },
  { id: 'settings', icon: Settings, label: 'Settings' },
]

export default function Sidebar({ active, setActive }) {
  const handleExit = () => {
    if (window.confirm('Exit Meridian ProFX?')) {
      window.close()
    }
  }

  return (
    <div className="w-20 h-full bg-base-900 border-r border-base-700 flex flex-col items-center py-4 gap-2">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-dim flex items-center justify-center mb-4 glow-gold">
        <span className="font-display font-bold text-sm text-base-950">M</span>
      </div>

      {navItems.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => setActive(id)}
          className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center gap-1 transition-all
            ${active === id
              ? 'bg-base-700 text-gold border border-gold/40'
              : 'text-slate-500 hover:text-slate-300 hover:bg-base-800'}`}
        >
          <Icon size={18} strokeWidth={2} />
          <span className="text-[9px] font-medium">{label}</span>
        </button>
      ))}

      <div className="mt-auto">
        <button
          onClick={handleExit}
          className="w-14 h-14 rounded-xl flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-down hover:bg-base-800 transition-all"
        >
          <LogOut size={18} strokeWidth={2} />
          <span className="text-[9px] font-medium">Exit</span>
        </button>
      </div>
    </div>
  )
}
