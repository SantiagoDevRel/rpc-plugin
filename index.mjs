// Import web3 plugin base
import { Web3PluginBase, utils, eth } from "web3";

// Create class
export default class zeroTodApp extends Web3PluginBase {
  pluginNamespace = "accra";

  async arbitrum() {
    this.setProvider("wss://arbitrum-one-rpc.publicnode.com");
    const result = await this.requestManager.send({
      method: "eth_call",
      params: [
        {
          to: utils.padLeft("0xc8", 40), //0x000000000000000000000000000000000000c8
          data: eth.abi.encodeFunctionSignature("nitroGenesisBlock()"),
        },
      ],
    });
    console.log("Arbitrum result:", utils.toBigInt(result));
  }

  async starknet() {
    //this.setProvider("https://docs-demo.strk-mainnet.quiknode.pro")
    const result = await this.requestManager.send({
      method: "starknet_chainId",
      params: [],
    });
    console.log("Starknet chain id:", utils.toBigInt(result));
  }

  async zksync() {}
  async polygon() {}
}
