const ethers = require("ethers");
const Web3Modal = require("web3modal");
const MetaMaskConnector = require("./index");
const connector = new MetaMaskConnector({
  port: 3333, // this is the default port
  onConnect() {
    console.log("MetaMask client connected");
  }, // Function to run when MetaMask is connected (optional)
});

connector.start().then(() => {
  // Now go to http://localhost:3333 in your MetaMask enabled web browser.
  const web3 = new Web3(window.ethereum);
  // Use web3 as you would normally do. Sign transactions in the browser.
});
