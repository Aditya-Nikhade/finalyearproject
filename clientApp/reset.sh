# #!/bin/bash

# # Navigate to the wallet directory (assuming the script is run from the project root)
# cd wallet

# # Remove the existing files
# echo "Removing existing enrollment files..."
# rm -f admin.id
# rm -f appUser.id

# # Navigate back to run the Node.js commands
# cd ..

# # Run the enrollment scripts
# echo "Running enrolladmin.js..."
# node enrolladmin.js

# echo "Running registerEnrollClientUser.js..."
# node registerEnrollClientUser.js

# echo "Reset complete!"

# node server.js

# echo "DONE"

#!/bin/bash

# Ensure the Fabric test network is running
# echo "Checking if Fabric test network is running..."
# if ! docker ps | grep -q peer0.org1.example.com; then
#     echo "Starting Fabric test network..."
#     cd ../finalyear/test-network
#     ./network.sh down
#     ./network.sh up
#     cd ../../clientApp
# else
#     echo "Fabric test network is already running."
# fi

# Navigate to the wallet directory
echo "Navigating to wallet directory..."
cd wallet || { echo "Wallet directory not found!"; exit 1; }

# Remove existing enrollment files
echo "Removing existing enrollment files..."
rm -f admin.id appUser.id

# Navigate back to the project root
cd ..

# # Ensure dependencies are installed
# echo "Installing dependencies..."
# npm install @hyperledger/fabric-gateway fabric-ca-client@2.2.20

# Run the enrollment scripts
echo "Running enrolladmin.js..."
node enrolladmin.js || { echo "Failed to run enrolladmin.js"; exit 1; }

echo "Running registerEnrollClientUser.js..."
node registerEnrollClientUser.js || { echo "Failed to run registerEnrollClientUser.js"; exit 1; }

echo "Reset complete!"

# Start the server
echo "Starting server.js..."
node server.js

echo "DONE"