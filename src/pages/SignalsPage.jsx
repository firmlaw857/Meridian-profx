import PageHeader from '../components/PageHeader'

export default function SignalsPage() {
  const signals = [
    { pair: 'EUR/USD', dir: 'BUY', conf: 82 },
    { pair: 'Volatility 100', dir: 'SELL', conf: 74 },
  ]
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <PageHeader title="Signals" subtitle="AI-generated trade signals" />
      <div className="space-y-3">
        {signals.map((s) => (
          <div key={s.pair} className="bg-base-900 border border-base-700 rounded-xl p-4 flex items-center justify-between">
            <span className="text-sm font-medium">{s.pair}</span>
            <span className={`text-xs font-semibold px-2 py-1 rounded ${s.dir === 'BUY' ? 'bg-up/20 text-up' : 'bg-down/20 text-down'}`}>
              {s.dir}
            </span>
            <span className="text-xs text-gold-light">{s.conf}% confidence</span>
          </div>
        ))}
      </div>
    </div>
  )
}
