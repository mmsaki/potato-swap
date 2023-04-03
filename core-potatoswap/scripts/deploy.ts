import  { PotatoswapFactory__factory } from "../typechain-types"
import { ethers } from "ethers";
import dotenv from "dotenv"
dotenv.config();

async function main() {
  const provider = new ethers.providers.AlchemyProvider("goerli", process.env.ALCHEMY_API_KEY);
  const privateKey = process.env.PRIVATE_KEY; 

  //Setup wallet with privateKey
  const wallet =  new ethers.Wallet(privateKey);
  const signer = wallet.connect(provider); 
  const balance = await signer.getBalance();
  console.log(`The account ${signer.address} has a balance of ${balance} Wei`)

  const PotatoswapFactoryContractFactory = new PotatoswapFactory__factory(signer);
  const contract = await PotatoswapFactoryContractFactory.deploy("0xbC65B2A1801A4d81F74dBfbe3bCf6aD4f39e66c3");//this is _FEETOSETTER: <The wallet allowed to set the fees’ wallet>
  const deployTxReceipt = await contract.deployTransaction.wait();

  //HRE deployment
  //const deployer = await ethers.getSigners();
  //const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
  // uniswapV2Factory = await UniswapV2Factory.deploy("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

  console.log(
    `The Potatoswap contract was deployed at the adddress ${contract.address} at the block number ${deployTxReceipt.blockNumber}.`
    );
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
