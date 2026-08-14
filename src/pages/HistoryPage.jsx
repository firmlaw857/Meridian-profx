import PageHeader from '../components/PageHeader'

export default function HistoryPage() {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <PageHeader title="History" subtitle="Recent contract results" />
      <div className="bg-base-900 border border-base-700 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-base-800 text-slate-500 text-xs">
            <tr>
              <th className="text-left p-3">Contract</th>
              <th className="text-left p-3">Stake</th>
              <th className="text-left p-3">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-base-700">
              <td className="p-3">Rise — V75</td>
              <td className="p-3">$10.00</td>
              <td className="p-3 text-up">+$9.20</td>
            </tr>
            <tr className="border-t border-base-700">
              <td className="p-3">Fall — V100</td>
              <td className="p-3">$10.00</td>
              <td className="p-3 text-down">-$10.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
