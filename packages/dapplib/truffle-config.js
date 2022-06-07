require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski stove radar remain method inflict ensure slot ghost'; 
let testAccounts = [
"0x3ae22d15b8b03c5e37b8f41813f51ca7fe7783a4f36dd7f5fca35fab39ad532b",
"0x21dce6c36b6ef7739b42d4d38ccc4b6d94d87954dbfb7b374886529cb2926d84",
"0x6bb96f907fe89db974cdca070ed1a92e07f3f243c301a249ac6350c20735f42c",
"0xd05db6853228abaf38e8d3a052dd7a51e3abeb83ddd2e55e97c902e1cf9f603d",
"0xbd9ba78b9f7caaa341af9fabe80aa2e3e25cec834598aa0ed057cfa3bee026b6",
"0xdc1bcb14b3b0a01aa7eaae2e6361edb61ef1e3db6e50d7a721e7599be141a1d1",
"0xed442db81ecd837dab68abd4a58cdbc77793f30abcb5f022532fb117ccad95ef",
"0x8c6f73d87b2fa3d9183ea2181e09f27350ac88aaf79de1c7f9ed409e7fd0d2cf",
"0xb29ba1dbaaa84b5bc3c1f7f895ee04d32a392495c0c0651e2f461a621b4c7a6c",
"0x39eefc86a3d744249d5dcea951a4a1afd2ec9f39b31c0c5ace754b76709a7154"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

