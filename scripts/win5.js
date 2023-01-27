const gameAddr = "0x0B306BF915C4d645ff596e518fAf3F9669b97016";
const contractName = "Game5";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // do whatever you need to do to win the game here:
  const tx1 = await game.giveMeAllowance(100025);
  await tx1.wait();
  const tx2 = await game.mint(10010);
  await tx2.wait();
  const tx3 = await game.win();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx3.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
