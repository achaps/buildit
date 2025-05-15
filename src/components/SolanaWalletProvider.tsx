'use client';

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { clusterApiUrl } from '@solana/web3.js';
import { FC, ReactNode, useCallback, useMemo } from 'react';
import { toast } from 'sonner';

interface SolanaWalletProviderProps {
  children: ReactNode;
}

export const SolanaWalletProvider: FC<SolanaWalletProviderProps> = ({ children }) => {
  // Set to 'devnet' for the Arena feature
  const network = WalletAdapterNetwork.Devnet;
  
  // RPC endpoint
  const endpoint = useMemo(() => {
    console.log('Initializing Solana connection with endpoint:', clusterApiUrl(network));
    return clusterApiUrl(network);
  }, [network]);
  
  // Wallets that are supported - create a new adapter instance
  const wallets = useMemo(() => {
    try {
      console.log('Initializing Phantom wallet adapter');
      const phantomWallet = new PhantomWalletAdapter();
      console.log('Phantom wallet adapter initialized successfully');
      return [phantomWallet];
    } catch (error) {
      console.error('Failed to initialize wallets:', error);
      toast.error('Failed to initialize wallet adapter');
      return [];
    }
  }, []);

  // Handle wallet errors
  const onError = useCallback((error: Error) => {
    console.error('Wallet error:', error);
    toast.error(`Wallet error: ${error.message}`);
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider 
        wallets={wallets} 
        onError={onError} 
        autoConnect={true}
        localStorageKey="walletAdapter"
      >
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
}; 