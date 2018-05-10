var HelloChina = artifacts.require("./HelloChina.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloChina);
};
