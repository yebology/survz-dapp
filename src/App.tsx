import './App.css'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { endpoint } from './utils/constants'
import { Routes } from 'react-router-dom'

function App() {
  const phantomWallet = new PhantomWalletAdapter();
  const networkEndpoint = endpoint;

  return (
    <ConnectionProvider endpoint={networkEndpoint}>
      <WalletProvider wallets={[phantomWallet]}>
        <WalletModalProvider>
          <Routes>
            
          </Routes>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>  
  )
}

export default App
