// require('babel-register')
// require('babel-polyfill')
require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
 
  networks: {
    goerli: {
      provider: () => new HDWalletProvider('de8a26e6b72d88624b6654fbab69d5ffd89e5abe562c0fddde2c728565a9f4ba', 'https://eth-goerli.g.alchemy.com/v2/zFLsJNluWQy1M5B5uTv_EKE_NH0APmcz'),
      network_id: 5,
      gas: 5000000, //gas limit
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
     },
  },
 
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.11",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "istanbul"
      }
    }
  },
};