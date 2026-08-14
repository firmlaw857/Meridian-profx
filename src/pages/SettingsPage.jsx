import PageHeader from '../components/PageHeader'

export default function SettingsPage() {
  const rows = ['Notifications', 'Theme', 'API Connection', 'Risk Limits']
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <PageHeader title="Settings" />
      <div className="bg-base-900 border border-base-700 rounded-xl divide-y divide-base-700 max-w-md">
        {rows.map((r) => (
          <div key={r} className="p-4 text-sm flex items-center justify-between">
            <span>{r}</span>
            <span className="text-slate-600 text-xs">›</span>
          </div>
        ))}
      </div>
    </div>
  )
}
