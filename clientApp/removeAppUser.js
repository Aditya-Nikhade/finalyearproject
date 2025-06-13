const { Wallets } = require('fabric-network');
const path = require('path');

async function removeAppUser() {
    try {
        // Load wallet from file system (adjust path if necessary)
        const walletPath = path.join(__dirname, 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);

        // Check if the identity exists
        const identity = await wallet.get('appUser');
        if (identity) {
            // Remove the identity
            await wallet.remove('appUser');
            console.log('Successfully removed appUser from the wallet');
        } else {
            console.log('appUser does not exist in the wallet');
        }
    } catch (error) {
        console.error(`Error removing appUser: ${error}`);
    }
}

removeAppUser();

// const { FileSystemWallet } = require('@hyperledger/fabric-gateway');
// const path = require('path');

// async function removeAppUser() {
//     try {
//         // Load wallet from file system
//         const walletPath = path.join(__dirname, 'wallet');
//         const wallet = await FileSystemWallet.newFileSystemWallet(walletPath);

//         // Check if the identity exists
//         const identity = await wallet.get('appUser');
//         if (identity) {
//             // Remove the identity
//             await wallet.remove('appUser');
//             console.log('Successfully removed appUser from the wallet');
//         } else {
//             console.log('appUser does not exist in the wallet');
//         }
//     } catch (error) {
//         console.error(`Error removing appUser: ${error}`);
//     }
// }

// removeAppUser();