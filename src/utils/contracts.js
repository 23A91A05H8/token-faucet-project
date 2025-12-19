import { Contract } from "https://cdn.jsdelivr.net/npm/ethers@6.10.0/dist/ethers.min.js";
import { getSigner, getProvider } from "./wallet.js";

// 👇 paste addresses from deployed-addresses.json
const TOKEN_ADDRESS = "PASTE_YOUR_TOKEN_ADDRESS";
const FAUCET_ADDRESS = "PASTE_YOUR_FAUCET_ADDRESS";

// 👇 minimal ABIs
const tokenABI = [
  "function balanceOf(address) view returns (uint256)"
];

const faucetABI = [
  "function requestTokens()",
  "function canClaim(address) view returns (bool)",
  "function getRemainingAllowance(address) view returns (uint256)"
];

export function getTokenContract() {
  return new Contract(TOKEN_ADDRESS, tokenABI, getProvider());
}

export function getFaucetContract(signer = true) {
  return new Contract(
    FAUCET_ADDRESS,
    faucetABI,
    signer ? getSigner() : getProvider()
  );
}

export async function getBalance(address) {
  const token = getTokenContract();
  const bal = await token.balanceOf(address);
  return bal.toString();
}

export async function canClaim(address) {
  const faucet = getFaucetContract(false);
  return await faucet.canClaim(address);
}

export async function requestTokens() {
  const faucet = getFaucetContract(true);
  const tx = await faucet.requestTokens();
  await tx.wait();
  return tx.hash;
}

export async function getRemainingAllowance(address) {
  const faucet = getFaucetContract(false);
  const remaining = await faucet.getRemainingAllowance(address);
  return remaining.toString();
}
