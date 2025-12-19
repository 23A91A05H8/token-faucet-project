import { BrowserProvider } from "https://cdn.jsdelivr.net/npm/ethers@6.10.0/dist/ethers.min.js";

let provider;
let signer;

export async function connectWallet() {
  if (!window.ethereum) {
    throw new Error("MetaMask not found");
  }

  provider = new BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  signer = await provider.getSigner();

  return await signer.getAddress();
}

export function getProvider() {
  if (!provider) throw new Error("Wallet not connected");
  return provider;
}

export function getSigner() {
  if (!signer) throw new Error("Wallet not connected");
  return signer;
}
