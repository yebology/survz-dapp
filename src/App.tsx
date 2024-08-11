import './App.css'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { endpoint } from './utils/constants'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/fixed/Navbar'
import { Footer } from './components/fixed/Footer'
import { Survey } from './pages/Survey'

function App() {
  const phantomWallet = new PhantomWalletAdapter();
  const networkEndpoint = endpoint;
  // const wallet = useAnchorWallet();

  return (
    <ConnectionProvider endpoint={networkEndpoint}>
      <WalletProvider wallets={[phantomWallet]}>
        <WalletModalProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/survey' element={<Survey />} />
          </Routes>
          <Footer />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>  
  )
}

export default App
