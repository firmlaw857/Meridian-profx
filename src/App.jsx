import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import MarketSwitcher from './components/MarketSwitcher'
import TradePage from './pages/TradePage'
import AnalysisPage from './pages/AnalysisPage'
import BotsPage from './pages/BotsPage'
import SignalsPage from './pages/SignalsPage'
import HistoryPage from './pages/HistoryPage'
import WalletPage from './pages/WalletPage'
import SettingsPage from './pages/SettingsPage'

const pages = {
  trade: TradePage,
  analysis: AnalysisPage,
  bots: BotsPage,
  signals: SignalsPage,
  history: HistoryPage,
  wallet: WalletPage,
  settings: SettingsPage,
}

export default function App() {
  const [active, setActive] = useState('trade')
  const [symbol, setSymbol] = useState({ code: 'R_75', name: 'Volatility 75 Index' })
  const [accountType, setAccountType] = useState('demo')
  const [switcherOpen, setSwitcherOpen] = useState(false)
  const [demoBalance, setDemoBalance] = useState(10000)
  const [realBalance] = useState(0)

  const balance = accountType === 'demo' ? demoBalance : realBalance
  const Page = pages[active]

  return (
    <div className="flex w-screen bg-base-950 font-sans" style={{ height: '100dvh' }}>
      <Sidebar active={active} setActive={setActive} />
      <div className="flex-1 flex flex-col min-h-0">
        <TopBar
          symbol={symbol}
          onOpenSwitcher={() => setSwitcherOpen(true)}
          accountType={accountType}
          setAccountType={setAccountType}
          balance={balance}
        />
        <Page symbol={symbol} demoBalance={demoBalance} setDemoBalance={setDemoBalance} accountType={accountType} />
      </div>

      {switcherOpen && (
        <MarketSwitcher
          onSelect={(s) => {
            setSymbol(s)
            setSwitcherOpen(false)
          }}
          onClose={() => setSwitcherOpen(false)}
        />
      )}
    </div>
  )
}
