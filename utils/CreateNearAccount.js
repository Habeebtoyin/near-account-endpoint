
const { KeyPair, keyStores, connect, utils } = require("near-api-js");
const fs = require("fs");
const NearSchema = require('./../model/near.model');
const path = require('path');
const homedir = require('os').homedir();
// import { connect, KeyPair, keyStores } from 'near-api-js';

const privateKey = 'ed25519:6Dyvxt4XZxg6YQ86Kctc15DfeSuMCahaRHuH4fcRzNBrJ1RD2W4XJZzLkAUePiLHaevb6iT7qE5hfnAx3GJsMPb'; // add yours here
// const privateKey = 'ed25519:AccountPK'; // add yours here
const keyPair = KeyPair.fromString(privateKey);

const keyStore = new keyStores.InMemoryKeyStore;
keyStore.setKey('testnet', 'folly.testnet', keyPair);

const config = {
  keyStore,
  networkId: 'testnet',
  nodeUrl: 'https://rpc.testnet.near.org/',
};

async function createNearAccount(creatorname) {
  const nearConnection = await connect(config);
  const account = await nearConnection.account('folly.testnet');

  const result = await account.createAccount(
    `${creatorname}.folly.testnet`, // new account name
    'ed25519:7jXkYAWEC2XCotRJm7kJoedmdcNRJ7t46461VBaDPahj', // public key of folly.testnet
    '10000000000000000000000' // initial balance for new account 
  );

  return result;
}
module.exports = createNearAccount