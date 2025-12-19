import { connectWallet } from "./wallet.js";
import {
  requestTokens,
  getBalance,
  canClaim,
  getRemainingAllowance
} from "./contracts.js";

window.EVAL = {
  connectWallet: async () => {
    return await connectWallet();
  },

  requestTokens: async () => {
    return await requestTokens();
  },

  getBalance: async (address) => {
    return await getBalance(address);
  },

  canClaim: async (address) => {
    return await canClaim(address);
  },

  getRemainingAllowance: async (address) => {
    return await getRemainingAllowance(address);
  },

  getContractAddresses: async () => {
    return {
      token: "PASTE_YOUR_TOKEN_ADDRESS",
      faucet: "PASTE_YOUR_FAUCET_ADDRESS"
    };
  }
};
