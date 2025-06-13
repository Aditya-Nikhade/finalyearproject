# Project Name

## Description
[Add your project description here]

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
- jq (for JSON processing)
- OpenSSL
- Make (for running scripts)

## Installation
```bash
# Clone the repository
git clone [repository-url]

# Install dependencies for client application
cd clientApp
npm install

# Install dependencies for integrated-tradex
cd ../integrated-tradex
npm install
```

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