# Getting started with our plugin

```js
// import plugin and web3 module
import zeroTodApp from "zerotodapp-test";
import { Web3 } from "web3";

// initialize an RPC endpoint
const web3 = new Web3("https://docs-demo.strk-mainnet.quiknode.pro");
web3.registerPlugin(new zeroTodApp());

// use plugin
web3.accra.arbitrum();
web3.accra.starknet();
```
