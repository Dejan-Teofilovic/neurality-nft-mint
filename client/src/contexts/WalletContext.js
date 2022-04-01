import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { ethers } from "ethers";
import { useMetaMask } from 'metamask-react';
import {
  ERROR,
  SUCCESS,
  CHAIN_ID,
  SWITCH_ERROR_CODE,
  CHAIN_NAME,
  RPC_URLS,
  BLOCK_EXPLORER_URLS,
  NATIVE_CURRENCY_NAME,
  NATIVE_CURRENCY_SYMBOL,
  DECIMALS,
  CONTRACT_ABI,
  CONTRACT_ADDRESS
} from '../utils/constants';
import { AlertMessageContext } from './AlertMessageContext';
import { WhitelistContext } from './WhitelistContext';

// ----------------------------------------------------------------------

const initialState = {
  walletConnected: false,
  currentAccount: '',
  tokenId: 0
};

const handlers = {
  SET_WALLET_CONNECTED: (state, action) => {
    return {
      ...state,
      walletConnected: action.payload
    };
  },
  SET_CURRENT_ACCOUNT: (state, action) => {
    return {
      ...state,
      currentAccount: action.payload
    };
  },
  SET_TOKEN_ID: (state, action) => {
    return {
      ...state,
      tokenId: action.payload
    };
  }
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const WalletContext = createContext({
  ...initialState,
  connectWallet: () => Promise.resolve()
});

//  Provider
function WalletProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { openAlert } = useContext(AlertMessageContext);
  const { checkAddressIsWhitelisted } = useContext(WhitelistContext);
  const { connect, account, chainId, ethereum } = useMetaMask();


  const connectWallet = async () => {
    await connect();
    //  If the current network is the expected one.
    if (chainId === CHAIN_ID) {
      dispatch({
        type: 'SET_CURRENT_ACCOUNT',
        payload: account
      });

      dispatch({
        type: 'SET_WALLET_CONNECTED',
        payload: true
      });

      checkAddressIsWhitelisted(account);

      openAlert({
        severity: SUCCESS,
        message: 'Connected.'
      });

    } else {
      if (ethereum) {
        //  If the current network isn't the expected one, switch it to the expected one.
        try {
          await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: CHAIN_ID }],
          });

          dispatch({
            type: 'SET_CURRENT_ACCOUNT',
            payload: account
          });

          dispatch({
            type: 'SET_WALLET_CONNECTED',
            payload: true
          });

          checkAddressIsWhitelisted(account);
        } catch (switchError) {
          //  If the expected network isn't existed in the metamask.
          if (switchError.code === SWITCH_ERROR_CODE) {
            await ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: CHAIN_ID,
                  chainName: CHAIN_NAME,
                  rpcUrls: RPC_URLS,
                  blockExplorerUrls: BLOCK_EXPLORER_URLS,
                  nativeCurrency: {
                    name: NATIVE_CURRENCY_NAME,
                    symbol: NATIVE_CURRENCY_SYMBOL, // 2-6 characters length
                    decimals: DECIMALS,
                  }
                },
              ],
            });
            dispatch({
              type: 'SET_CURRENT_ACCOUNT',
              payload: account
            });

            dispatch({
              type: 'SET_WALLET_CONNECTED',
              payload: true
            });

            checkAddressIsWhitelisted(account);
          } else {
            dispatch({
              type: 'SET_CURRENT_ACCOUNT',
              payload: ''
            });

            dispatch({
              type: 'SET_WALLET_CONNECTED',
              payload: false
            });

            openAlert({
              severity: ERROR,
              message: 'Wallet connection failed.'
            });
          }
        }
      }
    }

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      // console.log('# process.env.REACT_APP_CONTRACT_ADDRESS: ', process.env.REACT_APP_CONTRACT_ADDRESS);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      const { _hex } = await contract.getTokenId();

      dispatch({
        type: 'SET_TOKEN_ID',
        payload: Number(_hex)
      });
    }

  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <WalletContext.Provider
      value={{
        ...state,
        connectWallet
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export { WalletContext, WalletProvider };
