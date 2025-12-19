# Token Faucet DApp

## 1. Project Overview


This project is a simple **Token Faucet decentralized application (DApp)** that allows users to claim ERC-20 tokens at fixed intervals. 
The faucet enforces cooldowns and claim limits to prevent abuse.

The application consists of:
- ERC-20 Token Smart Contract
- Faucet Smart Contract
- Frontend web interface
- Dockerized deployment setup

---

## 2. Architecture

### Smart Contracts
- **YourToken.sol**
  - Standard ERC-20 token
  - Fixed total supply
  - Minting role granted to Faucet contract

- **TokenFaucet.sol**
  - Handles token distribution
  - Enforces cooldown between claims
  - Limits maximum tokens per user

### Frontend
- Built using **HTML + JavaScript**
- Uses **ethers.js** for blockchain interaction
- Wallet connection handled via MetaMask
- Contract logic separated into utility files:
  - `wallet.js`
  - `contracts.js`
  - `eval.js`

---

## 3. Deployed Contracts

⚠️ Contracts are deployed on a **local Hardhat network** for development and testing.

- Token Contract  
  Address: 0x5FbDB2315678afecb367f032d93F642f64180aa3

- Faucet Contract  
  Address: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
## 4. Quick Start

```bash
cp .env.example .env
# Edit .env with your values
docker-compose up


## 5. Configuration

Environment variables used:

- `VITE_RPC_URL` – RPC endpoint for blockchain network
- `VITE_TOKEN_ADDRESS` – Deployed ERC-20 token contract address
- `VITE_FAUCET_ADDRESS` – Deployed faucet contract address

These values are loaded from the `.env` file.

---

## 6. Design Decisions

- **Faucet Amount per Request**  
  A fixed number of tokens is distributed per request to ensure fair access.

- **Cooldown Period**  
  A cooldown is enforced between claims to prevent spamming and abuse.

- **Token Supply**  
  The total supply is fixed to avoid uncontrolled inflation.

---

## 7. Testing Approach

- Smart contracts were tested using **Hardhat test framework**
- Unit tests verify:
  - Correct token deployment
  - Faucet address storage
  - Claim eligibility logic
- Frontend testing was done manually by:
  - Connecting MetaMask
  - Requesting tokens
  - Verifying balances update correctly

---

## 8. Security Considerations

- Cooldown enforcement prevents repeated abuse
- Claim limits protect against draining the faucet
- Minting rights restricted only to the Faucet contract
- Wallet-based authentication via MetaMask

---

## 9. Known Limitations

- Contracts are deployed on a local Hardhat network only
- Frontend does not include advanced UI validation
- No backend indexing or analytics support
- Requires MetaMask browser extension
