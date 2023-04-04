import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import dotenv from "dotenv" 

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  solidity: "0.5.16",
  // networks: {
  //   goerli: {
  //     url: process.env.GOERLI_URL,
  //     accounts: [process.env.PRIVATE_KEY]
  //   }
  // },
  // etherscan: {
  //   apiKey: process.env.ETHERSCAN_KEY
  // }
};

export default config