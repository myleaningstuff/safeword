const Safeword = artifacts.require("./safeword.sol");

module.exports = async (deployer, network, addresses) => {
  await deployer.deploy(Safeword, {gas: 57976607});
}