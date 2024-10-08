import "./App.css";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { endpoint } from "./utils/constants";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { useMemo } from "react";
import "@solana/wallet-adapter-react-ui/styles.css";
import Content from "./Content";

function App() {
  const networkEndpoint = endpoint;
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(), 
      new SolflareWalletAdapter()
    ],
    [networkEndpoint]
  );

  return (
    <ConnectionProvider endpoint={networkEndpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Content />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
