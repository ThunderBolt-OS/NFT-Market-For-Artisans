require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: process.env.REACT_APP_ALCHEMY_API_URL,
      accounts: [`0x${process.env.REACT_APP_METAMASK_PRIVATE_KEY}`]
    }
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    },
  },
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test",
    depoy: "./src/backend/scripts/deploy.js"
  },
};
