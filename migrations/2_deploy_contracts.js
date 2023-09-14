const FusionAINFT = artifacts.require('FusionAINFT')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(FusionAINFT, 'FusionAI NFTs', 'FAI', 10, accounts[1])
}