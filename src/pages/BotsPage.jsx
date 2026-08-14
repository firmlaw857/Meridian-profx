import PageHeader from '../components/PageHeader'
import { Bot, Play } from 'lucide-react'

export default function BotsPage() {
  const bots = ['Martingale Rise/Fall', 'Anti-Martingale Digit', 'Over/Under Scanner']
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <PageHeader title="Bots" subtitle="Automated strategies" />
      <div className="space-y-3">
        {bots.map((b) => (
          <div key={b} className="bg-base-900 border border-base-700 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center">
                <Bot size={16} className="text-gold" />
              </div>
              <span className="text-sm font-medium">{b}</span>
            </div>
            <button className="flex items-center gap-1 bg-base-800 border border-base-700 hover:border-gold/40 rounded-lg px-3 py-1.5 text-xs">
              <Play size={12} /> Run
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
