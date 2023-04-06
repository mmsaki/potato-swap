const friends = [
  "0x3818e0d929FA14Fd9E560AA830CA88B10B577E9e"
];

const tokenContractAddr = "0x1612d1706B7063525e29d742FE64be44a02DaDd6"; 
async function main() {
  const token = await ethers.getContractAt("0x1612d1706B7063525e29d742FE64be44a02DaDd6", tokenContractAddr);

  const signer0 = await ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();
  const amountToAirdrop = ethers.utils.parseEther("10"); // Replace with the amount of tokens to airdrop

  for(let i = 0; i < friends.length; i++) {
    await token.transfer(friends[i], amountToAirdrop, {
      nonce: nonce + i
    });
  }

  console.log("Airdrop is complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
