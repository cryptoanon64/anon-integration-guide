# Veil.Cash - Privacy on Base L2

## Overview
Veil.Cash is a non-custodial privacy protocol on Base L2, enabling verified users to achieve privacy and anonymity through trusted pools. It leverages zk-SNARKs to allow users to deposit into fixed pools and withdraw to another address without creating an on-chain link.

**Current Version**: v0.2  
**Status**: Deployed on Base Mainnet  

Veil is experimental, unaudited software. Use at your own risk. Ensure compliance with local laws before interacting with the protocol.

## Main Features
- **zk-SNARKs Privacy**: Ensures transactions remain private by obfuscating deposit and withdrawal links.
- **Fixed Deposit Pools**: Users deposit into pre-set pools, improving privacy and usability.
- **Verified User Access**: Only verified users can deposit, adding a layer of trust and compliance.
- **ETH Privacy Pools**: Supports multiple deposit pools for ETH transactions.
- **Validator Contract**: Enforces deposit requirements and access control.
- **Coinbase Onchain Verification**: Allows onchain verification via Coinbase.

## Supported Networks
- **Base L2 (Mainnet)**

## Common Tasks
- **Depositing**: Users must hold 2,500 $VEIL tokens and be verified to deposit.
- **Withdrawing**: Withdrawals can be made from a different address with no relayer fees.
- **Verification**: Users must provide an Ethereum address and social data (Farcaster ID / Twitter Handle) to gain access.

## Pain Points Solved
- **Onchain Privacy**: Protects users from blockchain surveillance.
- **Trust and Compliance**: Ensures only verified users participate, reducing bad actors.
- **No Custodians**: Fully decentralized with smart contract-based privacy.
- **No Relayer Fees**: Withdrawals are free, reducing cost barriers.

## Why should I use Veil?
- **Enhanced Privacy**: Hide transaction trails from prying eyes.
- **Verified Pools**: Transact with trusted participants.
- **Decentralized**: No third-party control over funds.
- **Low Fees**: Only a 0.5% deposit fee, with free withdrawals.

## Installation
To install Veil's protocol package, run the following:

```bash
yarn add @heyanon/veil
