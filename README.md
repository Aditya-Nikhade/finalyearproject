# TradeX Application

## Description
This repo contains the code to run the Hyperledger Fabric Project locally.

## Prerequisites
### System Requirements
- Node.js (v14.x or later)
- npm (v6.x or later)
- Docker (v20.x or later)
- Docker Compose (v2.x or later)
- Go (v1.16 or later)
- Git

### Hyperledger Fabric Requirements
- Hyperledger Fabric v2.2 or later
- Hyperledger Fabric CA (Certificate Authority)
- Hyperledger Fabric SDK for Node.js
- Hyperledger Fabric Samples (for reference and utilities)

### Additional Tools
- cURL
- Linux or Windows WSL for running the shell scripts and docker containers

## Installation Steps
### Step 1. Hyperledger Fabric
- The chaincode contains the logic for the trading platform. Kindly install it on peers using appropriate method or using the chaincodeLifecycle.sh script provided.
- Up the network using appropriate method.

### Step 2. clientApp
- **Description**: This contains the server code which connects the frontend and backend. It also has a custom shell script which basically you have to run everytime the network is again up and running.
- **Steps**: 
  1. Go to the directory of the clientApp and run `./reset.sh`
  2. The custom shell script creates a new user identity into the wallet.
  3. Please note that this server code connects us to the network through organization 1 peer 0 of test network. While using custom networks, use the network configuration accordingly.
- **P.S.** Run the shell script everytime the network restarts.

### Step 3. Integrated TradeX
- **Description**: This is the frontend part of the Integrated TradeX. In this the login functionality is mocked. You can enter any email password to enter to the platform. The required authentication part can be looked at during production mode.
- **Steps**: 
  1. Please go to the directory of Integrated TradeX and do `npm i` to install required dependencies.
  2. Once the server is up and running and the Hyperledger Network is up and running, we can do `npm run dev` to start the frontend and you can view the results on the webpage at localhost:5173

## Project Structure
- `clientApp/` - Backend application with Hyperledger Fabric integration
  - Contains server.js, enrollment scripts, and blockchain interaction logic
- `chaincode/` - Smart contracts for the blockchain
  - Contains property-app chaincode
- `integrated-tradex/` - Frontend application
  - React-based UI with Tailwind CSS

## Usage
[Add usage instructions]

## Contributing
[Add contribution guidelines]

## License
[Add license information] 