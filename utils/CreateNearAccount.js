
const { KeyPair, keyStores, connect, utils } = require("near-api-js");
const fs = require("fs");
const NearSchema = require('./../model/near.model');
const path = require('path');
const homedir = require('os').homedir();
require('dotenv').config();
// import { connect, KeyPair, keyStores } from 'near-api-js';

const privateKey = process.env.PRIVATE_KEY; // add yours here
// const privateKey = 'ed25519:AccountPK'; // add yours here
const keyPair = KeyPair.fromString(privateKey);

const keyStore = new keyStores.InMemoryKeyStore;
keyStore.setKey('testnet', 'arems2023.testnet', keyPair);

const config = {
  keyStore,
  networkId: 'testnet',
  nodeUrl: 'https://rpc.testnet.near.org/',
};

async function createNearAccount(creatorname) {
  const nearConnection = await connect(config);
  const account = await nearConnection.account('arems2023.testnet');

  const result = await account.createAccount(
    `${creatorname}.arems2023.testnet`, // new account name
    'ed25519:7aSzD2ntd4moobEe5og4PUM5Bvj26FzgcEizF7ucGieX', // public key of folly.testnet
    '10000000000000000000000' // initial balance for new account 
  );

  return result;
}
module.exports = createNearAccount