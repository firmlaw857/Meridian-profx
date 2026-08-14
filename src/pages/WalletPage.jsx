import PageHeader from '../components/PageHeader'

export default function WalletPage() {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <PageHeader title="Wallet" subtitle="Balances & transactions" />
      <div className="bg-gradient-to-br from-base-800 to-base-900 border border-gold/20 rounded-xl p-5 max-w-sm">
        <div className="text-xs text-slate-500">Demo Account</div>
        <div className="font-display text-2xl font-bold text-gold-light mt-1">$10,000.00</div>
      </div>
    </div>
  )
}
