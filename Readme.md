# Installation

> git clone https://github.com/myleaningstuff/safeword
> cd safeword
> yarn
> truffle deploy

Find out the uniswap router address in your network.

> truffle console
> safeword = await SafeWord.deployed();
> safeword.setUniswapRouter(<uniswap_router_address>);

## Contract address in bsc testnet

https://testnet.bscscan.com/address/0xe851a02d4A5B7663E96e5E4589850205d5242425

