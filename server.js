const MetaMaskConnector = require("./index");
const connector = new MetaMaskConnector({
  port: 3333, // this is the default port
  onConnect() {
    console.log("MetaMask client connected");
  }, // Function to run when MetaMask is connected (optional)
});

connector.start().then(async () => {
  // Now go to http://localhost:3333 in your MetaMask enabled web browser.
  console.log("Connected");
  // Use web3 as you would normally do. Sign transactions in the browser.
});
