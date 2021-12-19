require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october foot danger response often unaware hundred light army gaze'; 
let testAccounts = [
"0x99f61f398513097b45f4aca76371fd5874cd5b0a24dfba6ac22657eab870a1a1",
"0x1dc2480594e7245158f94684521e1940ded164804a382b72ce63a01a864869aa",
"0x2a0f496d0b6d6d143be4740fad6932f45825ff98d2bc1f3e20803aac1bb688b4",
"0x9818990241728d2e79456a832c0aeaf24f99ee6bfc2776dc72c70ca5ee5d1912",
"0xa74891cfc8a2a452b35bbe54f8ce96b7d1147871ee204e98678be4b3ec5c70e1",
"0x9ab49f302a5d47d8c473ec8bc67644a36b8d846bbd392d9db7873a510c0a33a0",
"0x6ce64a18b7baf6eb8eb784e768fbb3081b2dc3a5f418744d0f097b7ea5c82d53",
"0xec9da600090d36cd8eaca59841d65f9ff0613094bc8205e0cf4bcb7a39cda190",
"0x3f74446059f004ab5dc85a6470e1eef3006cc5c36c5f34a49b6ed2ca81900ec3",
"0xee48c4948981efb78dd2f7c27ba62020d81e1ec5a3f070af3133d16699fc5f51"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


