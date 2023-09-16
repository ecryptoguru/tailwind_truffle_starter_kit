const FusionAINFT = artifacts.require('FusionAINFT')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()
  console.log("Accounts[1]:", "0x1FC81651ec89E2544d19de83c1b96BFf4C296fe9"); // Log the value of accounts[1]

  await deployer.deploy(FusionAINFT, 'FusionAI NFTs', 'FAI', 10, "0x1FC81651ec89E2544d19de83c1b96BFf4C296fe9");

  // Log contract address after deployment
  const deployedContract = await FusionAINFT.deployed();
  console.log("Contract Address:", deployedContract.address);
}