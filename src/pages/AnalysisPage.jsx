import PageHeader from '../components/PageHeader'

export default function AnalysisPage() {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <PageHeader title="Analysis" subtitle="Digit stats, volatility trends & market structure" />
      <div className="grid grid-cols-3 gap-4">
        {['Digit Distribution', 'Volatility Trend', 'Even/Odd Ratio'].map((t) => (
          <div key={t} className="bg-base-900 border border-base-700 rounded-xl p-4 h-40">
            <h3 className="text-sm font-medium text-slate-300">{t}</h3>
            <div className="text-xs text-slate-600 mt-2">Coming soon</div>
          </div>
        ))}
      </div>
    </div>
  )
}
