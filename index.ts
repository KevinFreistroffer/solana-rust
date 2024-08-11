const { Keypair } = require("@solana/web3.js");

let keypair = Keypair.generate();
console.log(keypair);
console.log(keypair.secretKey);
